<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>USDA Challenge App</title>
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/main.css">
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
			<div class="form-group">
				<label>Data Category:</label>
				<select name="category" class="form-control">
					  <option>Price Received</option>
					  <option>Sales</option> 
				</select>
			</div>
		<button id="submit" type="submit" name="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
	<div id="test" style="background: grey">
		
	</div>
	<main id="graph">

	</main>
	<?php 
		if(isset($_POST['submit'])){
			$sector = $_POST['sector'];
			$group = $_POST['group'];
			$commodity = $_POST['commodity'];
			$category  = $_POST['category'];
		}
	 ?>
	<?php require("../includes/initialize_js.php"); ?>
	<script src="../includes/js/data_query.js"></script>
	<script>
		var sector = strEncode("<?php echo $sector; ?>");
		var group = strEncode("<?php echo $group; ?>");
		var commodity = strEncode("<?php echo $commodity; ?>");
		var category = strEncode("<?php echo $category; ?>");
		loadAjax(sector, group, commodity, category);
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

