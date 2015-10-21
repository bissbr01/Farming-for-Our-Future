
var loc = new Object(); //used to store city, county, state
var defaults_data = new Object();
var default_queries = new Object;

function find_location(){
   if (navigator.geolocation) {  
		navigator.geolocation.getCurrentPosition(function(pos) {
			
			var apiurl = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + pos.coords.latitude + ',' + pos.coords.longitude + '&sensor=false';
		    var get = $.getJSON(apiurl,
		        function(data){
		        	console.log(data);
		        	loc['city'] = data.results[0].address_components[1].short_name;   // city
		        	loc['county'] = data.results[0].address_components[3].short_name;   // county
		        	
		        	// find state
		        	for (var i = 0; i < data.results[0].address_components.length; i++) {
		        		if (data.results[0].address_components[i].types[0] == "administrative_area_level_1"){
		        			loc['state'] = data.results[0].address_components[i].long_name;
		        		}
		        	};

		        	console.log(loc);

		            var html = 'Your location: ';
		            for (key in loc) {
		            	html += loc[key] + ' ';
		            };     	          
            		$('#geo').html(html);
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
					
		    	} 
			});
		}, function(){        // fail callback
			$('.loading').fadeOut();
			$('section .btn').attr('disabled', 'disabled');	
			$('section > .row').prepend('<div class=\'no-geo\'><h4>This feature requires your location to function.</h4><p>If you\'d like to use this, enable geolocation services and reload the page. </p></div>');
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
    	$('#graphs').prepend('<h3>The request was timed out.  Use a more specific search or try again later.  </h3>');
    	setTimeout(function() { $('#graphs > h3').fadeOut(); }, 5000);
	})
	.fail(function(error){
		console.log(error.responseText);
	})
    .done(function(json) {  
    	if (json.data != undefined) {
	    	console.log(json);
	    	draw_zoom_graph(json, key, defaults);

			$('.loading').fadeOut();
	  		$('#graphs').sortable({
	  			handle: '.glyphicon-fullscreen',
	  			cancel: ''
	  		});
	  		$('.chart').resizable({
	  			// helper: "ui-resizable-helper",
				stop: function( event, ui) {
					for (var i = 0; i < Highcharts.charts.length; i++) {
						Highcharts.charts[i].reflow();
					};
				}
			});
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
			
		};

		if (defaults) {
			options.series =  [{
				type: 'line',
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
		   		width: 'auto',
		   		height: 'auto',
		   		modal: true,
		   		open: function() {
					$(this).css('overflow', 'hidden'); //this line does the actual hiding
				},
		   		resize: function() {
		   			chart.reflow();
		   		},
		   		close: function() {
		   			$(this).dialog('destroy');
		   			$(this).removeClass();
		   			$(this).removeAttr('style');
		   			$(this).addClass('chart griditem ui-resizable');
		   			$('#graphs').append($(this))
		   			chart.reflow();
		   		}
		   	});
		});

		$(chart.container).find('.glyphicon-remove').parent('a').click(function(event) {
			$(chart.container).parent().remove();
		});
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


