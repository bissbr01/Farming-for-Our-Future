
/**
 * THIS IS OBSOLETE, USE FIND_PARAMS
 * Find parameter names and values from form 'selector' inputs.  Basically, get form values.
 * @return {assoc array of params}
 */
function find_params_string(){
	var params = '';
	$('#selectors div').children("select").each(function() {
		var key = $(this).attr('id');
		var value = $(this).val();
		if (value === '') //Means input is in default state
		{
			//Set to default query. Ex. "distinctParams=sector_desc"
			value = key;
			key = 'distinctParams';
		} 
		params += key + '=' + encodeURIComponent(value) + '&'; //need to encode, otherwise spaces & symbols break ajax request (like "anmials & products")
	});
		

	// Go through params, see if params with hidden fields are set.  
	//    -->If so, see if hidden fields are already set.  
	//       --> If they are not set, assign them as dependentParams.
	if ( params.search('COMMODITY_DESC=') >= 0 ) {
		if (params.search('CLASS_DESC=') == -1) {	
			params += 'distinctParams' + '=' + 'CLASS_DESC' + '&';
		}
		if (params.search('STATISTICCAT_DESC=') == -1) {
			params += 'distinctParams' + '=' + 'STATISTICCAT_DESC' + '&';
		}
	}
	else if ( params.search('AGG_LEVEL_DESC=') >= 0 ) {
		if (params.search('STATE_NAME=') == -1) {
			params += 'distinctParams' + '=' + 'STATE_NAME' + '&';
		}
		if (params.search('ASD_DESC=') == -1) {
			params += 'distinctParams' + '=' + 'ASD_DESC' + '&';
		}
		if (params.search('COUNTY_NAME=') == -1) {
			params += 'distinctParams' + '=' + 'COUNTY_NAME' + '&'; //should this be included?
		}
	}
	else if ( params.search('YEAR=') >= 0 ) {
		if (params.search('FREQ_DESC=') == -1) {
			params += 'distinctParams' + '=' + 'FREQ_DESC' + '&';
		}
	}
	// Output URI as pretty as Brian
	var strArray = params.split('&');
	console.log("*************");
	for (var i = 0; i < strArray.length; i++) {
		console.log(strArray[i]);
	}
	console.log("*************");

	return params;
}

function find_params(){
	var params = new Object();
	params['distinctParams'] = [];
	$('#selectors div').children("select").each(function() {
		var key = $(this).attr('id');
		var value = $(this).val();
		if (value === '') //Means input is in default state
		{
			//Set to default query. Ex. "distinctParams=sector_desc"
			params['distinctParams'].push(key);
		} 
		else {
			params[key] = encodeURIComponent(value);
		}
	});
	find_hidden_params(params);
	console.log(params);
	return params;
}

/**
 * finds initially hidden params and evaultes if they should appear
 * @param  find_params() parameters object array
 * @return {[array]}        array of dependentParams
 */
function find_hidden_params(params){
	// Go through params, see if params with hidden fields are set.  
	//    -->If so, see if hidden fields are already set.  
	//       --> If they are not set, assign them as dependentParams.
	if ( 'COMMODITY_DESC' in params ) {
		if ( !('CLASS_DESC' in  params)) {	
			params['distinctParams'].push('CLASS_DESC');
		}
		if ( !('STATISTICCAT_DESC' in params)) {
			params['distinctParams'].push('STATISTICCAT_DESC');
		}
	}
	if ( 'AGG_LEVEL_DESC' in params ) {
		if ( !('STATE_NAME' in params)) {
			params['distinctParams'].push('STATE_NAME');
		}
		if ( ('STATE_NAME' in params) && !('ASD_DESC' in params)) {
			params['distinctParams'].push('ASD_DESC');
		}
		if ( ('ASD_DESC' in params) && !('COUNTY_NAME' in params)) {
			params['distinctParams'].push('COUNTY_NAME'); //should this be included?
		}
	}
	if ( 'YEAR' in params) {
		if ( !('FREQ_DESC' in params)) {
			params['distinctParams'].push('FREQ_DESC');
		}
	}
}

/**
 * Get params formatted for the api/api_get? request needed to display data to chart
 * @return {string of params}
 */
function find_GET_params(){
	var params = '';
	$('#selectors div').children("select").each(function() {
		var key = $(this).attr('id');
		var value = $(this).val();
		if (value === '') //Means input is in default state
		{
			return true; // skip this value because blank
		}
		params += key + '=' + encodeURIComponent(value) + '&'; //need to encode, otherwise spaces & symbols break ajax request (like "anmials & products")
	});
	console.log(params);
	return params;
}


/** converts assoc array of params to string ready for ajax request URL
 * @param  {assoc array of params}
 * @return {string for URL}
 */
function params_to_string(params){
	var string = "";
	$.each(params, function(key, value) {
	if (key == 'distinctParams'){
		for (var i = 0; i < params['distinctParams'].length; i++) {
			string += 'distinctParams';
			string += '=';
			string += params['distinctParams'][i];
			string += "&";
		};
	} else {
		string += key;
		string += "=";
		string += value;
		string += "&";
	}
	});
	// Output URI as pretty as Brian
	// var output = string;
	// var strArray = string.split('&');
	// console.log("*************");
	// for (var i = 0; i < strArray.length; i++) {
	// 	console.log(strArray[i]);
	// }
	// console.log("*************");

	return string;
}


/**
 * Processes Form to display Highcharts chart with NASS data
 * @return {none}
 */
function get_dependent_params() {
	var params = params_to_string(find_params());
	//var link = "http://nass-api.azurewebsites.net/api/api_get?";
	var link = "http://nass-api.azurewebsites.net/api/get_dependent_param_values?";
	//link += params_to_string(params);
	link += params;  
	console.log(link);

    $.ajax({
    	type: "GET",
    	url: link,
    	cached: true,
    	crossDomain: true,
    	contentType: "application/json; charset=utf-8",
    	dataType: "json", 
    	success: function(json) {
	    	console.log("Success! ");
	    	console.log(json);
	    	// Need to check to see if empty.  This will occur when all params are selected.
	    	if (json != undefined && json.data != undefined) {
			loadCommodities(json);
			} else {
				console.log("All Parameters are chosen.  Click submit to query, or change params");
			}
				
		},
		error: function(error){
			console.log(error.responseText);
		}
	})
  .done(function() {  
		$('#loadingModal').fadeOut('slow');
  });
}

function display_chart(){

	$('#loadingModal').fadeIn('slow');  // trigger loading screen while ajax request processes

	var params = find_GET_params();
	//var link = "http://nass-api.azurewebsites.net/api/api_get?";
	var link = "http://nass-api.azurewebsites.net/api/api_get?";
	//link += params_to_string(params);
	link += params;  
	console.log(link);

    $.ajax({
    	type: "GET",
    	url: link,
    	cached: true,
    	crossDomain: true,
    	contentType: "application/json; charset=utf-8",
    	dataType: "json", 
    	success: function(json) {
	    	console.log("Success! Data: ");
	    	console.log(json);
			highchart_area_graph(json);
				
		},
		error: function(error){
			console.log(error.responseText);
		}
	})
  .done(function() {  
		$('#loadingModal').fadeOut('slow');
  });
}

function parseFloatIgnoreCommas(number) {
    var numberNoCommas = number.replace(/,/g, '');
    return parseFloat(numberNoCommas);
}

function format_data(json){
	if (json != undefined && json.data != undefined) {
		var dataArray = [];
		$.each(json.data, function(i){
			dataArray.push(parseFloatIgnoreCommas(this.value));
		});
		return dataArray;
	} else {
		console.log("Object or object property is undefined");
		return false;
	}
}

function highchart_line_graph(json){
	
	dataArray = format_data(json);
	$('#graph').highcharts({
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

	})

}

function highchart_area_graph(json){
	 dataArray = format_data(json);
	 $('#graph').highcharts({
        chart: {
            type: 'area'
        },
        title: {
			text: json.data[0].commodity_desc
		},
		subtitle: {
            text: json.data[0].data_item
        },
		yAxis: {
			title: {
				text: json.data[0].statisticcat_desc + " in " + json.data[0].unit_desc
			}
		},
        xAxis: {
        	title: {
        		text: json.data[0].freq_desc
        	}
        },
        tooltip: {
            pointFormat: ''
        },
        plotOptions: {
            area: {
                
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Farm Data',
            data: dataArray
        }]
    });
}
			