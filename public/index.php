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
				<select id="sector" name="sector" class="form-control">
				</select>
			</div>
			<div class="form-group">
				<label>Group:</label>
				<select id="Group" name="Group" class="form-control">
				</select>
			</div>

			<div class="form-group">
				<label>Commodity:</label>
				<select id="commodity" name="commodity" class="form-control">
				</select>
			</div>
			<div class="form-group">
				<label>Year:</label>
				<select id="year" name="year" class="form-control">
				</select>
			</div>
		<button type="submit" name="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
	<main id="graph">
	</main>
	<?php require("../includes/initialize_js.php"); ?>
	<script>
	$(document).ready(function() {
		// loadCommodities();
	});

	$("form").submit(function(event) {
	var commodity = strEncode($.post('commodity'));
	var year =      strEncode($.post('year'));
	// loadAjax(commodity, year);
		
	});



		
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

