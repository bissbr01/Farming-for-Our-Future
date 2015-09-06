/**
 * [parameter_Query description]
 * @param  {[string]} param [description]
 * @return {[json ]}       [description]
 */
function parameterQuery(param) {
	var link = "http://nass-api.azurewebsites.net/api/get_param_values?" + 
		"param=" + param;	   
    $.ajax({
    	type: "GET",
    	url: link,
    	cached: true,
    	crossDomain: true,
    	contentType: "application/json; charset=utf-8",
    	dataType: "json", 
    	success: function(json){
	    		console.log(json.data);
    		if (json.data != undefined) {
	    		return json.data;
				
			} else {
				console.log("Object or object property is undefined");
				return null;
			}
		},
		error: function(error){
			console.log(error.responseText);
		}
	});
}

function getContainers() {
	var link = "http://innovationchallenge.azurewebsites.net/Api/Sources/Get?containers=source_desc;"
	$.ajax({
    	type: "GET",
    	url: link,
    	cached: true,
    	crossDomain: true,
    	contentType: "application/json; charset=utf-8",
    	dataType: "json", 
    	success: function(json){
	    		console.log(json);
    		if (json != undefined && json.data != undefined) {
	    		var dataArray = [];
	    		 $.each(json.data, function(i){
					dataArray.push(parseFloat(this.value));
				});
	    		return dataArray;
				
			} else {
				console.log("Object or object property is undefined");
				return null;
			}
		},
		error: function(error){
			console.log(error.responseText);
		}
	});
}

function optionHTML(param, id){
	var array = parameterQuery(param);
	var output, value;

	array.forEach( function(value) {
		output += "<option>";
		output += value;
		output += "</option>";
	});

	$(id).innerHTML(output);
}
/**
 * output html options for array of commodities
 * @param  {[array of commoditynames]} array [description]
 * @return {[none]}       [description]
 */
function loadCommodities(){
	// get commodities
	optionHTML("commodity_desc", "#commodity");
	findYears();
}

function findYears(){
	var years = [];
	for (var i = 1899; i < 2015; i++) {
		years.push(i);
	};
	console.log(years);
	
	var output;

	years.forEach( function(value) {
		output += "<option>";
		output += value;
		output += "</option>";
	});


	$("#year").innerHTML(output);
}



