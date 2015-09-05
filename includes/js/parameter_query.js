/**
 * [parameter_Query description]
 * @param  {[string]} param [description]
 * @return {[array of ]}       [description]
 */
function parameterQuery(param) {
	alert("sector: " + sector);
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