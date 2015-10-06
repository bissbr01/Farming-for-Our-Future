
function find_location(){
	return find_GET_params();  //need to change eventually 
}

var graphs = []; // used to contain highcharts graphs after drawn

function generate_defaults(){
     
	var default_queries = new Object;

	default_queries['ANIMAL TOTALS'] = { 
		"SECTOR_DESC" : 'ANIMALS & PRODUCTS', 
		"GROUP_DESC":'ANIMAL TOTALS', 
		"COMMODITY_DESC":'ANIMAL TOTALS', 
		"STATISTICCAT_DESC":'SALES'};

	default_queries['CROP TOTALS'] = { 
		"SECTOR_DESC":'CROPS',               
		"GROUP_DESC":'CROP TOTALS',   
		"COMMODITY_DESC":'CROP TOTALS',             
		'STATISTICCAT_DESC':'SALES'};

	default_queries['INCOME'] = { 
		"SECTOR_DESC":'ECONOMICS',           
		"GROUP_DESC":'INCOME',        
		"COMMODITY_DESC":'INCOME, NET CASH FARM',   
		"STATISTICCAT_DESC":'NET INCOME'};
        
	// query API for each default, then display each in graph
	var queries = [];
	for (var key in default_queries) {
		if (!default_queries.hasOwnProperty(key)){continue;}

		var string = "";
		for (var prop in default_queries[key]) {
			if (!default_queries[key].hasOwnProperty(prop)){continue;}
			string += prop;
			string += "=";
			string += encodeURIComponent(default_queries[key][prop]);
			string += "&";
		}
		string += find_location();
		queries.push(string);
	}

	for (var i = 0; i < queries.length; i++) {
		url = "http://nass-api.azurewebsites.net/api/api_get?";
		url += queries[i];
		query_api(url);

	}
}

function query_api(url){
	$.ajax({
    	type: "GET",
    	url: url,
    	cached: true,
    	crossDomain: true,
    	contentType: "application/json; charset=utf-8",
    	dataType: "json", 
    	success: function(json){
    		console.log(json);
			graphs.push(draw_graph(json));
		},
		error: function(error){
			console.log(error.responseText);
		}
	})
  .done(function() {  
		$('#loadingModal').fadeOut();
		$('.grid').masonry();
		console.log(graphs);
  });	
}

function draw_graph(json){
	
	// Create a containing div as Masonry grid item
	var key = String(Math.random());  //used to create random key for graph ID for renderTo property
	var html = '<div id=\'' + key + '\' class=\'chart grid-item\'></div>';
	$('#graphs').append(html);

	
	dataArray = format_data(json);
	var chart = new Highcharts.Chart({
	       plotOptions: {
	        series: {
	            cursor: 'pointer',
	            point: {
	                events: {
	                    click: function (e) {
	                        hs.htmlExpand(null, {
	                            pageOrigin: {
	                                x: e.pageX || e.clientX,
	                                y: e.pageY || e.clientY
	                            },
	                            headingText: this.series.name,
	                            maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
	                                this.y + ' visits',
	                            width: 200
	                        });
	                    }
	                }
	            },
	            marker: {
	                lineWidth: 1
	            }
	        }
	    },

		chart: {
			renderTo: key
		},
		title: {
			text: json.data[0].commodity_desc
		},
		subtitle: {
            text: json.data[0].data_item
        },
        xAxis: {
                tickInterval: 7 * 24 * 3600 * 1000 * 52, // one year
                tickWidth: 0,
                gridLineWidth: 1,
                labels: {
                    align: 'left',
                    x: 3,
                    y: -3
                },
                title: {
        			text: json.data[0].freq_desc
        		}
            },

            yAxis: { 
                title: {
					text: json.data[0].statisticcat_desc + " in " + json.data[0].unit_desc
				},
            },
		series: [{
			type: "line",
			allowPointSelect: true,
			pointStart: dataArray[1],
			pointInterval: (dataArray.length / 15),
			name: 'Farm Data',
			data: dataArray
		}]

	});

	// Zoom on graph on click using Masonry
	var originalEvent = chart.container.onclick;
	chart.container.onclick = function(e){
		$(this).parent('.grid-item').toggleClass('grid-item-full');
		chart.reflow();
		//$('.grid').masonry();
		originalEvent(e);
		console.log('event triggered');
	}

	return chart;
}

function display_location_params(){

	var defaultsValues = "distinctParams=STATE_NAME"; 
	var url = "http://nass-api.azurewebsites.net/api/get_dependent_param_values?" + defaultsValues;
	
	$.ajax({
    	type: "GET",
    	url: url,
    	cached: true,
    	crossDomain: true,
    	contentType: "application/json; charset=utf-8",
    	dataType: "json", 
    	success: function(json){
    		console.log("Initial params: ");
    		console.log(json);
    		json.data[0].Values.shift();  //first element is empty for some reason?
			loadCommodities(json);
		},
		error: function(error){
			console.log(error.responseText);
		}
	})
  .done(function() {  
		$('#loadingModal').fadeOut();
  });	
}
