jQuery(document).ready(function($) {
	var taxonomyId = 'Api/GET-api-api_GET';
	$.get('http://nass-api.azurewebsites.net/api/api_get?source_desc=CENSUS&sector_desc=ANIMALS%20%26%20PRODUCTS&group_desc=ANIMAL%20TOTALS&commodity_desc=ANIMAL%20TOTALS&statisticcat_desc=SALES&class_desc=ANIMALS%20ONLY&domain_desc=ORGANIC%20STATUS&agg_level_desc=STATE&state_name=ALABAMA&year=2007&freq_desc=ANNUAL').done(function (data) {
	    console.log(data);  
	});

});







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