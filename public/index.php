<?php 


 ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>USDA Challenge App</title>
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" href="css/main.css">
</head>
<body>
	<div class="banner grid">
		<h1 class="banner-item">USDA Challenge App</h1>
	</div>
	
	<div class="grid">
		<div class="grid-sizer"></div>
		<div class="grid-item">
			<h3>Source</h3>
		</div>
		<div class="grid-item">Sector</div>
		<div class="grid-item">Group</div>
		<div class="grid-item">Commodity</div>
		<div class="grid-item">Category</div>
		<div class="grid-item">Class</div>
	</div>

	<?php require("../includes/initialize_js.php"); ?>
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

