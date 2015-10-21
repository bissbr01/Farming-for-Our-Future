
function find_params(changeEvent){
	$('#submit').attr('disabled', false); 
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
 * If a change is made in higher-order selector, clear values of lower selectors
 * @param  {handle} changeEvent 
 * @return {null}             
 */
function erase_stale_params(changeEvent){

	var select = changeEvent.target.id;
	var clear = false;
	var id = '#' + changeEvent.target.id;
	var filter = $(id).parents('.filter')[0];
	var filterID = '#' + filter.id;

	$(filterID).find('select').each(function() {
		console.log($(this)[0].id);
		if (clear == true) {
			$(this).children('option').removeAttr('selected');
		}
		if ( $(this)[0].id == select){
			clear = true;
		}
	});
	
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
	if ( ('COMMODITY_DESC' in params) && (params['COMMODITY_DESC'].length > 0) ) {
		if ( !('CLASS_DESC' in  params)) {	
			params['distinctParams'].push('CLASS_DESC');
		}
		if ( !('STATISTICCAT_DESC' in params)) {
			params['distinctParams'].push('STATISTICCAT_DESC');
		}
	}
	if ( ('AGG_LEVEL_DESC' in params) && (params['AGG_LEVEL_DESC'].length > 0) ) {
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
	if ( ('YEAR' in params) && (params['YEAR'].length > 0)) {
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
function get_dependent_params(changeEvent) {
	erase_stale_params(changeEvent);
	$('.form-control').attr('disabled', 'disabled');

	var params = params_to_string(find_params(changeEvent));
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
		// $('#loadingModal').fadeOut('slow');
		$('.form-control').removeAttr('disabled');
  });
}

/**
 *  displays initial parameters to index.php.
 * @return {[none]}
 */
function display_inital_params(){
	$('#submit').attr('disabled', true);
	var defaultsValues = "distinctParams=source_desc&distinctParams=sector_desc&distinctParams=group_desc&distinctParams=commodity_desc&distinctParams=agg_level_desc&distinctParams=year"; //&distinctParams=freq_desc
	var url = "http://nass-api.azurewebsites.net/api/get_dependent_param_values?" + defaultsValues;
	//var url = 'http://nass-api.azurewebsites.net/api/get?containers=source_desc&sector_desc&group_desc&commodity_desc&agg_level_desc&year'
	$('.filter > .form-group').remove();  //clear old data

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
			loadCommodities(json);
		},
		error: function(error){
			console.log(error.responseText);
		}
	})
    .done(function() {  
  		$('.form-control').attr('disabled', false);
		// $('#loadingModal').fadeOut();
  });	
}




