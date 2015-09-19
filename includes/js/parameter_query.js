
/** output html corresponding to JSON object
 * @param  {array of json objects}
 * @param  {[ name of NASS parameter]}
 * @return {[none]} just outputs html to "#selectors"
 */
function optionHTML(json, param) {

	$('select#' + param).parent().remove();

	var html = "";
	html += "<div class=\"form-group\">";
	html +=	"<label>" + param + ":</label>";
	html +=	"<select id=\"" + param + "\" name=\"" + param + "\" class=\"form-control\">"
    html += "<option value='' selected>None</option>"; //Default option
	for (var j=0; j < json.Values.length; j++) {
    	html += "<option>" + json.Values[j].toString() + "</option>";
	}
	html +=	"</select></div>";
	$("#selectors").prepend(html);
}

/**
 * loop through JSON objects and display HTML
 *   > Also disables old input values
 * @param  {[Object]} json [array of NASS JSON Objects]
 * ]
 */
function loadCommodities(json){
	console.log("Loaded Commodities:");
	// Disable select inputs that are not updated.  Safegaurd against going back and changing, getting bad inputs
	$('select').attr('disabled', 'true');

	for (var i = 0; i < json.data.length; i++) {
		optionHTML(json.data[i], json.data[i].Name)
	};
}

/**
 *  displays initial parameters to index.php.
 * @return {[none]}
 */
function display_inital_params(){

var defaultsValues = "distinctParams=sector_desc&distinctParams=group_desc&distinctParams=commodity_desc&distinctParams=agg_level_desc&distinctParams=year&distinctParams=source_desc"; //&distinctParams=freq_desc
var url = "http://nass-api.azurewebsites.net/api/get_dependent_param_values?" + defaultsValues;
//var url = 'http://nass-api.azurewebsites.net/api/get?containers=source_desc&sector_desc&group_desc&commodity_desc&agg_level_desc&year'
	
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
		$('#loadingModal').fadeOut();
  });	
}



