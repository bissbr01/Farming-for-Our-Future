
function generate_defaults(location){
	//default values for params
	var default_sources = [
		'CENSUS',
		'SURVEY'
	];
	var default_sectors = [
		'ANIMALS & PRODUCTS',
		'CROPS',
		'DEMOGRAPHICS',
		'ECONOMICS',
		'ENVIRONMENTAL'
	];
	var default_groups = [
		'ANIMAL TOTALS',
		'CROP TOTALS',
		'EXPENSES',
		'INCOME',
		'PRICES PAID'
	];

	// query API for each default, then display each in graph
	var queries = [];
	for (var i = 0; i < default_groups.length; i++) {
		
		
	};
}

function query_api(url){
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
			
		},
		error: function(error){
			console.log(error.responseText);
		}
	})
  .done(function() {  
		$('#loadingModal').fadeOut();
  });	
}