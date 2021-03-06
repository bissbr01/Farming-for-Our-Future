
var loc = new Object(); //used to store city, county, state
var defaults_data = new Object();
var default_queries = new Object;

function find_location(){
   if (navigator.geolocation) {  
		navigator.geolocation.getCurrentPosition(function(pos) {
			
			var apiurl = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + pos.coords.latitude + ',' + pos.coords.longitude + '&sensor=false';
		    var get = $.getJSON(apiurl,
		        function(data){
		        	//console.log(data);
		        	loc['city'] = data.results[0].address_components[1].short_name;   // city
		        	loc['county'] = data.results[0].address_components[3].short_name;   // county
		        	
		        	// find state
		        	for (var i = 0; i < data.results[0].address_components.length; i++) {
		        		if (data.results[0].address_components[i].types[0] == "administrative_area_level_1"){
		        			loc['state'] = data.results[0].address_components[i].long_name;
		        		}
		        	};

		        	//console.log(loc);

		            var html = 'Location: ';
		            for (key in loc) {
		            	html += loc[key] + ' ';
		            };    
					html += "<img id='refreshLoc' src='images/refreshLoc.png' alt='Update your location' />"; //Reload location button
            		$('#geo').html(html);					
					
					$('#refreshLoc').click(function() {
						window.location.href=window.location.href; //Reload page to allow 2nd shot at geolocation
					});
		        }
		    );
			get.done(function(){
		    	if (loc != undefined && loc['state'] != undefined){        // there is not a valid value for state
			    	
					setup_geo_services(pos);   //Run extra features requiring geolocation
					
					$('#cash-crops > .btn').click(function(e){
						generate_defaults(0);
					});
					$('#overview > .btn').click(function(e){
						generate_defaults(1);
					});
					
					$('#geo').removeClass('nogeo');
					
		    	} 
			});
		}, function(){        // fail callback --- probably never called. Spotty browser implementation. 
			$('.loading').fadeOut();
			$('section .btn').attr('disabled', 'disabled');	
			$('section > .row').prepend('<div class=\'nogeo\'><h4>This feature requires your location to function.</h4><p>If you\'d like to use this, enable geolocation services and reload the page. </p></div>');			
			$('html, body').animate({
			scrollTop: $("div.nogeo").offset().top
			}, 2000);
		});			
    }
}

function generate_defaults(index){

	default_queries['AREA PLANTED'] = {
		'CORN' : {
			'SOURCE_DESC' : 'SURVEY',
			'SECTOR_DESC' : 'CROPS',
			'COMMODITY_DESC' : 'CORN',
			'STATISTICCAT_DESC' : 'AREA PLANTED',
			'AGG_LEVEL_DESC' : 'STATE'
		},
		'COTTON' : {
			'SOURCE_DESC' : 'SURVEY',
			'SECTOR_DESC' : 'CROPS',
			'COMMODITY_DESC' : 'COTTON',
			'STATISTICCAT_DESC' : 'AREA PLANTED',
			'AGG_LEVEL_DESC' : 'STATE'
		},
		'RICE' : {
			'SOURCE_DESC' : 'SURVEY',
			'SECTOR_DESC' : 'CROPS',
			'COMMODITY_DESC' : 'RICE',
			'STATISTICCAT_DESC' : 'AREA PLANTED',
			'AGG_LEVEL_DESC' : 'STATE'
		},
		'SOYBEANS' : {
			'SOURCE_DESC' : 'SURVEY',
			'SECTOR_DESC' : 'CROPS',
			'COMMODITY_DESC' : 'SOYBEANS',
			'STATISTICCAT_DESC' : 'AREA PLANTED',
			'AGG_LEVEL_DESC' : 'STATE'
		},
		'WHEAT' : {
			'SOURCE_DESC' : 'SURVEY',
			'SECTOR_DESC' : 'CROPS',
			'COMMODITY_DESC' : 'WHEAT',
			'STATISTICCAT_DESC' : 'AREA PLANTED',
			'AGG_LEVEL_DESC' : 'STATE'
		}
	};

	default_queries['PRODUCTION'] = {
		'YIELD' : {
			'SOURCE_DESC' : 'SURVEY',
			'SECTOR_DESC' : 'CROPS',
			'COMMODITY_DESC' : 'CORN',
			'STATISTICCAT_DESC' : 'YIELD',
			'AGG_LEVEL_DESC' : 'STATE'
		},
		'AREA PLANTED' : {
			'SOURCE_DESC' : 'SURVEY',
			'SECTOR_DESC' : 'CROPS',
			'COMMODITY_DESC' : 'CORN',
			'STATISTICCAT_DESC' : 'AREA PLANTED',
			'AGG_LEVEL_DESC' : 'STATE'
		},
		'AREA HARVESTED' : {
			'SOURCE_DESC' : 'SURVEY',
			'SECTOR_DESC' : 'CROPS',
			'COMMODITY_DESC' : 'CORN',
			'STATISTICCAT_DESC' : 'AREA HARVESTED',
			'AGG_LEVEL_DESC' : 'STATE'
		}
	};
        
	// query API for each default, then display each in graph
	default_queries_to_string(default_queries);

    // can't automatically loop through b/c of aysnc ajax calls.  This was my patch fix.
	var key = ['AREA PLANTED', 'PRODUCTION'];
	query_default_from_key(key[index]);
}

function query_default_from_key(key){
	url = "http://nass-api.azurewebsites.net/api/api_get?";
	url += default_queries[key]['queries'][0];
	var jqxhr = query_api(url, undefined, true);
	var promises = [];
	jqxhr.done(function(){
		var l = Highcharts.charts.length-1;
		for (i = 1; i < default_queries[key]['queries'].length; i++) {
			url = "http://nass-api.azurewebsites.net/api/api_get?";
			url += default_queries[key]['queries'][i];
			promises.push(query_api(url, Highcharts.charts[l]), true);
		};
	});
	return promises;
}

function default_queries_to_string(default_queries){
	for (var key in default_queries) {
		if (!default_queries.hasOwnProperty(key)){continue;}
		default_queries[key]['queries'] = [];
		for (var k in default_queries[key]) {
			if (!default_queries[key].hasOwnProperty(k)){continue;}
			if (k == 'queries'){continue;}
			var string = "";
			for (var prop in default_queries[key][k]) {
				if (!default_queries[key][k].hasOwnProperty(prop)){continue;}
				string += prop;
				string += "=";
				string += encodeURIComponent(default_queries[key][k][prop]);
				string += "&";
			}
			string += 'STATE_NAME=' + loc['state'].toUpperCase();
			default_queries[key]['queries'].push(string);
		}
	}
	return default_queries;
}

function query_api(url, key, defaults){

	$('.loading').fadeIn();

	return jqxhr =  $.ajax({
    	type: "GET",
    	url: url,
    	cached: true,
    	crossDomain: true,
    	contentType: "application/json; charset=utf-8",
    	dataType: "json",
    	timeout: 10000         // 10 seconds
	})
	.fail(function(error, timeout, jqXHR){
		$('.loading').fadeOut();
		$('.timedOut').remove(); //Clear old fails
    	$('#graphs').prepend('<h3 class="timedOut">Report failed. Use a more specific search by selecting more filters or try again later.  </h3>');
		$('html, body').animate({
			scrollTop: $(".timedOut").offset().top
		}, 800);
    	setTimeout(function() { $('#graphs > h3').fadeOut(); }, 5000);
	})
    .done(function(json) {  
    	if (json.data != undefined) {
	    	//console.log(json);
	    	draw_zoom_graph(json, key, defaults);

			$('.loading').fadeOut();
						
	  		$('#graphs').sortable({
	  			handle: '.glyphicon-fullscreen',
	  			cancel: ''
	  		});

	  		// 		$('.chart').resizable({
	  		// 			// helper: "ui-resizable-helper",
			// 	stop: function( event, ui) {
			// 		for (var i = 0; i < Highcharts.charts.length; i++) {
			// 			Highcharts.charts[i].reflow();
			// 		};
			// 	}
			// });
  		}
    });	
}

function draw_zoom_graph(json, key, defaults){
	var original = false;
	if (key === undefined){
		// Create a containing div 
		var key = String(Math.random());  //used to create random key for graph ID for renderTo property
		var html = '<div id=\'' + key + '\' class=\'chart grid-item\'><span class=\"glyphicon glyphicon-new-window\" aria-hidden=\"true\"> </span>  </div>';
		$('#graphs').append(html);
		original = true;
	}

	dataArray = format_data(json);
	if (original) {
		var options = {
			chart: {
				zoomType: 'xy',
				renderTo: key
			},
			title: {
				text: json.data[0].commodity_desc
			},
			subtitle: {
	            text: json.data[0].data_item
	        },
	        xAxis: {
	            title: {
	    			text: json.data[0].freq_desc
	    		}
	        },
	        yAxis: { 
	            title: {
					text: json.data[0].statisticcat_desc + " in " + json.data[0].unit_desc
				},
	        },
	        tooltip: {
			    crosshairs: [true, true],
		        formatter: function(){
		        	return '<b>'+ this.x + '</b><br>' + '<br><span style="color:'+ this.series.color +'">\u25CF</span>: ' + this.series.name + ': ' + this.y;
		        }
			}
			
		};

		if (defaults) {
			options.series =  [{
				type: 'line',
				name: json.data[0].statisticcat_desc,
				data: dataArray
			}];
		}
		else if (json.data.length < 2){   //regression line will display incorrectly if less than 3 points, so don't show
			options.series =  [{
				type: 'scatter',
				name: json.data[0].statisticcat_desc,
				data: dataArray
			}];
		}
		else {
			options.series =  [{
				regression: true ,
	            regressionSettings: {
	                type: 'linear',
	                color:  'rgba(223, 83, 83, .9)'
	            },
				type: 'scatter',
				name: json.data[0].statisticcat_desc,
				data: dataArray
			}];
		}

		var chart = new Highcharts.Chart(options);


		html  = '<a><span class=\"glyphicon glyphicon-new-window\" aria-hidden=\"true\"><a>';
		html += '<a><span class=\"glyphicon glyphicon-fullscreen\" aria-hidden=\"true\"><a>';
		html += '<a><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"><a>';
		$(chart.container).prepend(html);

		$(chart.container).find('.glyphicon-new-window').parent('a').click(function(event) {
		   	$(this).parents('.chart').dialog({
		   		width: '100%',
		   		height: 'auto',
		   		modal: true,
		   		open: function() {
		   			chart.setSize($('.ui-dialog').width(), $('.ui-dialog').height());
					$(this).css('overflow', 'hidden'); //this line does the actual hiding
				},
		   		resize: function() {
		   			chart.setSize($('.ui-dialog').width(), $('.ui-dialog').height());
		   		},
		   		close: function() {
		   			$(this).dialog('destroy');
		   			$(this).removeClass();
		   			$(this).removeAttr('style');
		   			$(this).addClass('chart griditem ui-resizable');
		   			$('#graphs').append($(this));

		   			// js media based queries encouraged to not use $(window).  See https://www.fourfront.us/blog/jquery-window-width-and-media-queries
		   			if ($("a[role='tab'] > .glyphicon").css('display') == 'none'){
		   				var w = ($('body').width()-35);
		   				chart.setSize( w, 400);
		   			} else {
		   				var w = ($('body').width() /2) -30;
		   				chart.setSize( w, 400);
		   			}
		   		}
		   	});
		});

		$(chart.container).find('.glyphicon-remove').parent('a').click(function(event) {
			$(chart.container).parent().remove();
		});

		$('html, body').animate({
			scrollTop: $("#graphs").children().last().offset().top
		}, 800);
	} else {
		if (json.data[0].commodity_desc != 'CORN' &&
			json.data[0].statisticcat_desc == 'AREA PLANTED'){
			key.addSeries({
				name: json.data[0].commodity_desc,
				data: dataArray
			});
		}
		else {
			key.addSeries({
				type: 'line',
				name: json.data[0].statisticcat_desc,
				data: dataArray
			});
		}
	}
	return chart;
}


