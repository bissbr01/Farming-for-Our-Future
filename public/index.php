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
	<div class="page-container">
		<div class="banner">
			<h1 class="banner-item">USDA Challenge App</h1>
		</div>
		<div id='loadingModal'> <div id='loading-text'>Hold up! We're shucking corn and grinding out some data... </div> </div>
		<div class="col-sm-6 col-xs-12">
			<form accept-charset="utf-8"> 
				
				<div id="selectors"> 
					<div id="commodity">
						<h3>Commodity</h3>
					</div>
					<div id="location">
						<h3>Location</h3>
					</div>
					<div id="time">
						<h3>Time</h3>
					</div>
				</div>
		
		
				<button type="submit" name="submit" class="btn btn-primary">Submit</button>
				<a class="btn btn-danger">Cancel</a>
			</form>
		</div>	
	
		<main id="graph" class="col-sm-6 col-xs-12">
		</main>
		
		<?php require("../includes/initialize_js.php"); ?>
		
		<script>
			$(document).ready(function() {
				display_inital_params();
				console.log(location.href);	
			});
	
			$('.btn-danger').click(function(event) {
				location.reload();
			});
	
			$("form").submit(function(event) {
				event.preventDefault();
				display_chart();		
			});
	
			$(document).on('change','.form-control',function(){
				$('#loadingModal').fadeIn();
				get_dependent_params();
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
	</div>
</body>
</html>

