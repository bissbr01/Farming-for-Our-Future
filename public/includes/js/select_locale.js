
function find_location(){
	return find_GET_params();  //need to change eventually 
}


function generate_defaults(){
	//default values for params
	// var default_sources = [
	// 	'CENSUS',
	// 	'SURVEY'
	// ];
	var default_sectors = [
		'ANIMALS & PRODUCTS',
		'CROPS',
		'ECONOMICS'
	];
	var default_groups = [
		'ANIMAL TOTALS',
		'CROP TOTALS',
		'INCOME'
	];

	var default_locations = [
		'STATE',
	];  

	var default_commodities = [
		'ANIMAL TOTALS',
		'CROP TOTALS',
		'INCOME, NET CASH FARM'
	];        

	var default_categories = [
		'SALES',
		'SALES',
		'NET INCOME'
	];       
        
	// query API for each default, then display each in graph
	var queries = [];
	var string;
	for (var i = 0; i < default_sectors.length; i++) {
		string =  'SECTOR_DESC='    + encodeURIComponent(default_sectors[i]) + '&'; 
		string += 'GROUP_DESC='     + encodeURIComponent(default_groups[i]) + '&';
		string += 'COMMODITY_DESC=' + encodeURIComponent(default_commodities[i]) + '&';
		string += 'STATISTICCAT_DESC' + encodeURIComponent(default_categories[i]) + '&';
		string += 'AGG_LEVEL_DESC=' + encodeURIComponent(default_locations[0]) + '&';
		string += find_location();
		queries.push(string);
	};

	for (var i = 0; i < queries.length; i++) {
		url = "http://nass-api.azurewebsites.net/api/api_get?";
		url += queries[i];
		console.log('Query:');
		console.log(queries[i]);
		console.log('url:');
		console.log(url);
		query_api(url);
	};
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
    		console.log("Initial params: ");
    		console.log(json);
			draw_graph(json);
			msnry.layout();
		},
		error: function(error){
			console.log(error.responseText);
		}
	})
  .done(function() {  
		$('#loadingModal').fadeOut();
  });	
}


function draw_graph(json){
	
	dataArray = format_data(json);

	var key = String(Math.random());
	var html = '<div id=\'' + key + '\' class=\'chart grid-item\'></div>';
	$('#graphs').append(html);
	console.log(key);

	var chart = new Highcharts.Chart({
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
        	title: {
        		text: json.data[0].freq_desc
        	}
        },
		yAxis: {
			title: {
				text: json.data[0].statisticcat_desc + " in " + json.data[0].unit_desc
			}
		},
		series: [{
			type: "line",
			allowPointSelect: true,
			name: 'Farm Data',
			data: dataArray
		}]

	});
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