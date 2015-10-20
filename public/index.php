<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<title>USDA Challenge App</title>
	<link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="includes/js/jQuery/jquery-ui-1.11.4/jquery-ui.min.css">
	<link href='https://fonts.googleapis.com/css?family=Comfortaa:400,300' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/main.css">
</head>
<body>
	<div class="page-container">
		<div class="banner">
			<h1 class="banner-item">Farming For Our Future</h1>
			<h5 class="banner-subtitle">Looking Backward, Farming Forward</h5>
		</div> 
		<div id='loadingModal'> <div id='loading-text'>Hold up! We're shucking corn and grinding out some data... </div> </div>
		<div class="col-sm-12 col-xs-12">
		<div id="theSky">
			<div id="cloud" class="headerWeather"><span class='shadow'></span></div>
			<div id="cloud2" class="headerWeather"><span class='shadow'></span></div>
			<div id="cloud3" class="headerWeather"><span class='shadow'></span></div>
		</div>
			<h3 id='geo'>Location Unknown</h3>
			<!-- <div id="geoToday" class="headerWeather"><b>Today</b></div>
			<div id="geoTomorrow" class="headerWeather"><b>Tomorrow</b></div>
			<div id="geo2Day" class="headerWeather"><b>Two Days Away</b></div> -->
			<form id="primary" accept-charset="utf-8" > 
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
	</div>

		<?php require("includes/initialize_js.php"); ?>
		
		<script>
			$(document).ready(function() {
				// display_location_params();
				display_inital_params();
				find_location(); //Init other functions needing location as callback
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

			


		    // $('#chart-modal').on('show.bs.modal', function() {
		    //     $('#hc-modal-target').css('visibility', 'hidden');
		    // });
		    // $('#chart-modal').on('shown.bs.modal', function() {
		    //     $('#hc-modal-target').css('visibility', 'initial');
		    //     chart.reflow();
		    // }); 
			

	
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
	
</body>
</html>

