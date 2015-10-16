
/** output html corresponding to JSON object
 * @param  {array of json objects}
 * @param  {[ name of NASS parameter]}
 * @return {[none]} just outputs html to "#selectors"
 */
function optionHTML(json, param) {

	$('select#' + param).parent().remove();

	// if (json.Values[0] != ""){  //ensure we don't output an empty selector, which can then be selected and break app
	if (json.Values[0] != ""){
		var html = "";
		html += "<div class=\"form-group\">";
		html +=	"<label>" + param + ":</label>";
		html +=	"<select id=\"" + param + "\" name=\"" + param + "\" class=\"form-control\" MULTIPLE SIZE=5>"
	    // html += "<option value='' selected>None</option>"; //Default option
		for (var j=0; j < json.Values.length; j++) {
	    	html += "<option>" + json.Values[j].toString() + "</option>";
		}
		html +=	"</select></div>";
		if (
			param == 'SOURCE_DESC' ||
			param == 'SECTOR_DESC' ||
			param == 'COMMODITY_DESC' ||
			param == 'STATISTICCAT_DESC' ||
			param == 'CLASS_DESC'
			)
		{
			var div = '#commodity';
		}
		else if 
			(
			param == 'AGG_LEVEL_DESC' ||
			param == 'STATE_NAME' ||
			param == 'ASD_DESC' ||
			param == 'COUNTY_NAME'
			) 
		{
			var div = '#location';
		}
		else if 
			(
			param == 'YEAR' ||
			param == 'FREQ_DESC'
			) 
		{
			var div = '#time';
		}

		$(div).append(html);
	}
}

/**
 * loop through JSON objects and display HTML
 * @param  {[Object]} json [array of NASS JSON Objects]
 * ]
 */
function loadCommodities(json){
	console.log("Loaded Commodities:");

	for (var i = 0; i < json.data.length; i++) {
		optionHTML(json.data[i], json.data[i].Name)
	};
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
			draw_zoom_graph(json);
				
		},
		error: function(error){
			console.log(error.responseText);
		}
	})
  .done(function() {  
		$('.loading').fadeOut();
  		$('#graphs').sortable({
  			handle: '.glyphicon-fullscreen',
  			cancel: ''
  		});
  		$('.chart').resizable({
			stop: function( event, ui) {
				for (var i = 0; i < Highcharts.charts.length; i++) {
					Highcharts.charts[i].reflow();
				};
			}
		});
  });
}

function parseFloatIgnoreCommas(number) {
    var numberNoCommas = number.replace(/,/g, '');
    return parseFloat(numberNoCommas);
}

function Comparator(a,b){
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

function format_data(json){                                    
	if (json != undefined && json.data != undefined) {
		var dataArray = [];
		$.each(json.data, function(i){
			if(!isNaN(parseFloatIgnoreCommas(this.value))){
				dataArray.push([
					parseInt(this.year),
					parseFloatIgnoreCommas(this.value)
				]);
			}
		});
		dataArray.sort(Comparator);                 // find better way to sort data         
		return dataArray;
	} else {
		console.log("Object or object property is undefined");
		return false;
	}
}
