
function loadAjax(sector, group, commodity, category) {
	alert("sector: " + sector);
	var link = "http://nass-api.azurewebsites.net/api/api_get?" + 
		"source_desc="  + "SURVEY" + 
		"&sector_desc=" + sector +
		"&group_desc=" + group + 
		"&commodity_desc=" + commodity + 
		"&statisticcat_desc=" + category;	   
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
