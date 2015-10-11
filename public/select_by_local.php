<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<title>USDA Challenge App</title>
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
	<link href='https://fonts.googleapis.com/css?family=Comfortaa:400,300' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/main.css">
</head>
<body>
	<div class="page-container">
		<div class="banner">
			<h1 class="banner-item">USDA Challenge App</h1>
		</div>
		<div id='loadingModal'> <div id='loading-text'>Hold up! We're shucking corn and grinding out some data... </div> </div>
		
		

		<div class="col-sm-12 col-xs-12">
			<h3 id='geo'></h3>
			<form accept-charset="utf-8"> 
				<div role="tabpanel">
					<!-- Nav tabs -->
					<ul class="nav nav-tabs" role="tablist">
						<li role="presentation" class="active">
							<a href="#commodity" aria-controls="commodity" role="tab" data-toggle="tab">Commodity</a>
						</li>
						<li role="presentation">
							<a href="#location" aria-controls="location" role="tab" data-toggle="tab">Location</a>
						</li>
						<li role="presentation"> 
							<a href="#time" aria-controls="time" role="tab" data-toggle="tab">Time</a>
						</li>
					</ul>
					<!-- Tab panes -->
					<div id="selectors" class="tab-content">
						<div id="commodity" role="tabpanel" class="tab-pane active filter">
						</div>
						<div id="location" role="tabpanel" class="tab-pane filter">
						</div>
						<div id="time" role="tabpanel" class="tab-pane filter">
						</div>
					</div>
				</div>			
			</form>
			<!-- <form accept-charset="utf-8"> 
				<div role="tabpanel">
					<ul class="nav nav-tabs" role="tablist">
						<li role="presentation" class="active">
							<a href="#location" aria-controls="location" role="tab" data-toggle="tab">Location</a>
						</li>
					</ul>
					<div id="selectors" class="tab-content">
						<div id="location" role="tabpanel" class="tab-pane active filter">
						</div>
					</div>
				</div>	
			</form> -->
		</div>	
		
		<main class="col-sm-12 col-xs-12">
			<button id="submit" class="btn btn-primary">Graph!</button>
			<a id='clear-form' class="btn btn-danger">Clear Form</a>
			<a id='clear-graphs' class="btn btn-danger">Clear Graphs</a>
			<div id="graphs" class='grid'>
			<div class='loading'>
				<img src="images/loading.gif" alt="">
			</div>
			<!-- 	<div class='grid-sizer'></div>
				<div class='grid-item'></div>
				<div class='grid-item'></div>
				<div class='grid-item'></div> -->
			</div>
		</main>
		
		
		<?php require("includes/initialize_js.php"); ?>
		
		<script>
			$(document).ready(function() {
				// display_location_params();
				display_inital_params();
				find_location();
			
			});
	
			$('#clear-form').click(function(event) {
				$('.form-group').remove();
				display_inital_params();
			});

			$('#clear-graphs').click(function(event) {
				$('#graphs').empty();			
			});
	
			$('#submit').click(function(event) {
				event.preventDefault();
				display_chart();		
			});
	
			$('form').change(function(event){
				$('#loadingModal').fadeIn();
				get_dependent_params(event);
			});

			$('#graph').sortable();
			$('#graph').disableSelection();
			$('#graph .chart').resizable();
	
		</script>
	
		
		<script type="text/javascript">
		// $(document).ready(function() {
		// 	$('.grid').masonry({
		//   		itemSelector: '.grid-item',
		//   		columnWidth: '.grid-sizer',
		//   		isAnimated: true,
		//   		stamp: '.stamp'
		// 	});
		// });
		</script>
	
	</div>
</body>
</html>

