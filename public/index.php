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
	<div id='loadingModal'> <div id='loading-text'>Hold up! We're shucking corn and grinding out some data... </div> </div>
		<form accept-charset="utf-8"> 
			
			<div id="selectors"> </div>


		<button type="submit" name="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
	
	<main id="graph">
	</main>
	
	<?php require("../includes/initialize_js.php"); ?>
	
	<script>
	$(document).ready(function() {
		display_inital_params();
	});

	$("form").submit(function(event) {
		event.preventDefault();
		display_chart();		
	});
	
	$(document).on('change','.form-control',function(){
		$('#loadingModal').fadeIn();
		display_chart();
	});
	
	</script>

	<!--
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
	-->
	
</body>
</html>

