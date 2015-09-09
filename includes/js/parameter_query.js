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
			var array = [];
			$.each(json.data, function(i, data){
					array.push(data);
				});
			console.log("json to array: ");
			console.log(array);
			return array;
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

function optionHTML(json, param, i){
	// var array = [];
	// $.each(json.data, function(i, data){
	// 		array.push(data);
	// 	});
	var html = "";
	html += "<div class=\"form-group\">";
	html +=	"<label>" + param + ":</label>";
	html +=	"<select id=\"" + param + "\" name=\"" + param + "\" class=\"form-control\">"
	for (var j=0; j < json.data[i].values.length; j++) {
    	html += "<option>" + json.data[i].values[j].toString() + "</option>";
	}
	html +=	"</select></div>";
	$("form").append(html);
}

/**
 * output html options for array of commodities
 * @param  {[array of commoditynames]} array [description]
 * @return {[none]}       [description]
 */
function loadCommodities(json){
	for (var i = 0; i < json.data.length; i++) {
		optionHTML(json.data[i], json.data[i].name, i)
	};
}

function findYears(){
	var years = [];
	for (var i = 1899; i < 2015; i++) {
		years.push(i);
	};
	console.log(years);

    $.each(years, function (i) { 
        $("<option>" + years[i] + "</option>").appendTo("#year"); 
    });
}

function query_dependent_params(){
	var url = "http://nass-api.azurewebsites.net/api/get_dependent_param_values?" + 
		"distinctParams=commodity_desc" + 
		"&distinctParams=agg_level_desc" + 
		"&distinctParams=year" +
		"&distinctParams=freq_desc";
	$.ajax({
    	type: "GET",
    	url: url,
    	cached: true,
    	crossDomain: true,
    	contentType: "application/json; charset=utf-8",
    	dataType: "json", 
    	success: function(json){
    		console.log(json);
			loadCommodities(json);
		},
		error: function(error){
			console.log(error.responseText);
		}
	});
}



