
/**
 * THIS IS OBSOLETE, USE FIND_PARAMS
 * Find parameter names and values from form 'selector' inputs.  Basically, get form values.
 * @return {assoc array of params}
 */


function find_params(){
	var params = new Object();
	params['distinctParams'] = [];
	$('#selectors div').children("select").each(function() {
		var key = $(this).attr('id');
		var values = [];
		var $select = $(this);
		// find each selected option
		$select.children('option').each(function(){  
			if (this.selected){
				values.push(this.value);
			}
		});
		params[key] = values;
		if (values.length == 0) //Means input is in default state
		{
			//Set to default query. Ex. "distinctParams=sector_desc"
			params['distinctParams'].push(key);
			// delete params[this.value];
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
	if ( params['COMMODITY_DESC'].length > 0 ) {
		if ( !('CLASS_DESC' in  params)) {	
			params['distinctParams'].push('CLASS_DESC');
		}
		if ( !('STATISTICCAT_DESC' in params)) {
			params['distinctParams'].push('STATISTICCAT_DESC');
		}
	}
	if ( params['AGG_LEVEL_DESC'].length > 0 ) {
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
	if ( params['YEAR'].length > 0) {
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
	var params = find_params();
	delete params['distinctParams'];

	return params_to_string(params);
}


/** converts assoc array of params to string ready for ajax request URL
 * @param  {assoc array of params}
 * @return {string for URL}
 */
function params_to_string(params){
	var string = "";
	$.each(params, function(key, values) {
		for (var i = 0; i < values.length; i++) {

			if (key == 'distinctParams'){
					string += 'distinctParams';
					string += '=';
					string += values[i];
					string += "&";
			} else if (values.length == 1) {
				string += key;
				string += "=";
				string += encodeURIComponent(values[i]);
				string += "&";
			} else if (values.length > 1) {
				string += key;
				string += "__or";  //GET request syntax changes for multiple selects. 
				string += "=";
				string += encodeURIComponent(values[i]);
				string += "&";
			}
		};
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
