
function loadAjax(commodity, year) {
	var link = "http://nass-api.azurewebsites.net/api/api_get?" + 
		"&commodity_desc=" + commodity + 
		"&year" + year;	   
    $.ajax({
    	type: "GET",
    	url: link,
    	cached: true,
    	crossDomain: true,
    	contentType: "application/json; charset=utf-8",
    	dataType: "json", 
    	success: function(json) {
	    		console.log(json);
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
		},
		error: function(error){
			console.log(error.responseText);
		}
	});
}

function strEncode(string){
	return encodeURIComponent(string).toUpperCase();
}