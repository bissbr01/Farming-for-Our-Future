<?php 

if(isset($_POST['submit'])){
	$sector = $_POST['sector'];
	$group = $_POST['group'];
	$commodity = $_POST['commodity'];
}

 ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>USDA Challenge App</title>
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/main.css">
	<?php require("../includes/initialize_js.php"); ?>


</head>
<body>
	<div class="banner">
		<h1 class="banner-item">USDA Challenge App</h1>
	</div>
	<div id="selectors">
		<form action="index.php" method="POST" accept-charset="utf-8">
			<div class="form-group">
				<label>Sector:</label>
				<select name="sector" class="form-control">
					  <option>Animals & Products</option>
					  <option>Crops</option>
					  <option>Economics</option>
				</select>
			</div>
			<div class="form-group">
				<label>Group:</label>
				<select name="group" class="form-control">
					  <option>Dairy</option>
					  <option>Livestock</option>
					  <option>Poultry</option>
				</select>
			</div>
			<div class="form-group">
				<label>Commodity:</label>
				<select name="commodity" class="form-control">
					  <option>Butter</option>
					  <option>Buttermilk</option>
					  <option>Cattle</option>
					  <option>Cheese</option>
					  <option>Cream</option>
					  <option>Eggs</option>
					  <option>Hogs</option>
					  <option>Ice Cream</option>
					  <option>Milk</option>
					  <option>Red Meat</option>
					  <option>Sheep</option>
					  <option>Sherbet</option>
					  <option>Whey</option>
					  <option>Yogurt</option>
				</select>
			</div>
		<button id="submit" type="submit" name="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
	<div id="test" style="background: grey">
		
	</div>
	<main id="graph">

	</main>
	
	<script>
	$(document).ready(function() {
		$("#submit").click(function() {
    	var sector = "<?php echo $sector; ?>";
    	var group = "<?php echo $group; ?>";
    	var commodity = "<?php echo $commodity; ?>";
		// var link = "http://nass-api.azurewebsites.net/api/api_get?source_desc=SURVEY&sector_desc=" + sector + "&group_desc=" + group + "&commodity_desc=" + commodity;	   
		var link = "http://nass-api.azurewebsites.net/api/api_get?source_desc=SURVEY&sector_desc=ANIMALS%20%26%20PRODUCTS&group_desc=DAIRY&commodity_desc=BUTTER&statisticcat_desc=MOISTURE%20CONTENT&class_desc=ALL%20CLASSES&agg_level_desc=NATIONAL&state_name=US%20TOTAL&year=1999&freq_desc=WEEKLY";
	    $.ajax({
	    	type: "GET",
	    	url: link,
	    	cached: true,
	    	crossDomain: true,
	    	contentType: "application/json; charset=utf-8",
	    	dataType: "json", 
	    	success: function(json){
	    		console.log(json);
	    		var dataArray = [];
	    		 $.each(json.data, function(i){
					dataArray.push(parseFloat(this.value));
				});
	    		 console.log(dataArray);
    			$('#graph').highcharts({
    				title: {
    					text: 'Values of ajax query'
    				},
    				series: [{
    					data: dataArray
    				}]

    			})
			}
		});
	});
	});
	</script>	
	</script>	



	<script type="text/javascript">
	$(document).ready(function() {
		$('.grid').masonry({
	  		itemSelector: '.grid-item',
	  		columnWidth: '.grid-sizer',
	  		percentPosition: true,
	  		stamp: '.stamp'
		});
	});
	</script>
</body>
</html>

