
/** output html corresponding to JSON object
 * @param  {array of json objects}
 * @param  {[ name of NASS parameter]}
 * @return {[none]} just outputs html to "#selectors"
 */
function optionHTML(json, param) {

	var html = "";
	html += "<div class=\"form-group\">";
	html +=	"<label>" + param + ":</label>";
	html +=	"<select id=\"" + param + "\" name=\"" + param + "\" class=\"form-control\">"
	for (var j=0; j < json.Values.length; j++) {
    	html += "<option>" + json.Values[j].toString() + "</option>";
	}
	html +=	"</select></div>";
	$("#selectors").prepend(html);
}

/**
 * loop through JSON objects and display HTML
 * @param  {[Object]} json [array of NASS JSON Objects]
 * ]
 */
function loadCommodities(json){
	for (var i = 0; i < json.data.length; i++) {
		console.log(json.data[i].Name);
		console.log(json.data[i].Values.length);
		optionHTML(json.data[i], json.data[i].Name)
	};
}

/**
 *  displays initial parameters to index.php.
 * @return {[none]}
 */
function display_inital_params(){
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



