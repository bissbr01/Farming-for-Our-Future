
/**
 * Find parameter names and values from form 'selector' inputs.  Basically, get form values.
 * @return {assoc array of params}
 */
function find_params(){
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
		params += key + '=' + value + '&'; //need to encode, otherwise spaces & symbols break ajax request (like "anmials & products")
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
	
	string += key;
	string += "=";
	string += value;
	string += "&";
	});
	return encodeURI(string);
}


/**
 * Processes Form to display Highcharts chart with NASS data
 * @return {none}
 */
function display_chart() {
	var params = find_params();
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
	    	console.log("Success! Data: " + json.data);
			loadCommodities(json);
				
		},
		error: function(error){
			console.log(error.responseText);
		}
	})
  .done(function() {  
		$('#loadingModal').fadeOut('slow');
  });
}


/*
    		if (json != undefined && json.data != undefined) {
	    		var dataArray = [];
	    		 $.each(json.data, function(i){
					dataArray.push(parseFloat(this.value));
				});
				$('#graph').highcharts({
					title: {
						text: 'Values of ajax query'
					},
					yAxis: {
						title: {
							text: json.data[1].unit_desc
						}
					},
					series: [{
						type: "line",
						allowPointSelect: false,
						animation: true,
						color: undefined,
						connectEnds: true,
						connectNulls: false,
						cropThreshold: 300,
						cursor: undefined,
						dashStyle: "Solid",
						data: dataArray
					}]

				})
			} else {
				console.log("Object or object property is undefined");
			}
			*/