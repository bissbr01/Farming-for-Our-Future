
	function getbyJson()
	{
		var link = "http://nass-api.azurewebsites.net/api/api_get?source_desc=SURVEY&sector_desc=ANIMALS%20%26%20PRODUCTS&group_desc=DAIRY&commodity_desc=BUTTER&agg_level_desc=STATE&statisticcat_desc=PRODUCTION&class_desc=ALL%20CLASSES&state_name=CALIFORNIA&year=2006&freq_desc=MONTHLY";
		$.ajax({
			type: "GET",
			url: link,
			cached: true,
			crossDomain: true,
			contentType: "application/json; charset=utf-8",
			dataType: "jsonp", 
			success: function(request){
				console.log(request);
				alert(request);
			} 
		});
	}








// http://nass-api.azurewebsites.net/Api/GET-api-api_GET

// api_get?
// 	source_desc=CENSUS
// 	&sector_desc=ANIMALS%20%26%20PRODUCTS
// 	&group_desc=ANIMAL%20TOTALS
// 	&commodity_desc=ANIMAL%20TOTALS
// 	&agg_level_desc=NATIONAL
// 	&state_name=US%20TOTAL
// 	&year=2012
// 	&freq_desc=ANNUAL