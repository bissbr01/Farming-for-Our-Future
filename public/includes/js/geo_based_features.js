//Geo based features
var currPos;

function setup_geo_services(positionObj){
   if(positionObj) {   
		currPos = positionObj; //Set class level variable
		get_weather();
		get_forecast();
	}
}

function get_weather(){
	var apiurl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + currPos.coords.latitude + '&lon=' + currPos.coords.longitude + '&units=imperial&APPID=a6353e053fb997c24ad388a6e1c1d04d';
	//var apiurl = 'http://api.worldweatheronline.com/free/v2/weather.ashx?q=' + currPos.coords.latitude + ',' + currPos.coords.longitude + '&num_of_days=3&format=json&key=b0a3861bec44c110f1015f3384601';
	
	$.ajax({ 
		type: 'GET', 
		url: apiurl, 
		dataType: 'json',
		success: function (data) { 
			//console.log(data.weather[0].description);
			var temp = Math.round(parseFloat(data.main.temp));
			var humidity = data.main.humidity;
			var description = data.weather[0].description;
			
			
			//Today:			
			$( "<div/>", {
				"text": "Today",
				"class": "header currently"
			  }).appendTo( "#cloud" );
			  
			$( "<div/>", {
				"id": "geoTemp",
				"text": "Temperature: " + temp + " ºF",
				"class": "currently"
			  }).appendTo( "#cloud" );
			  
			$( "<div/>", {
				"id": "geoHumid",
				"text": "Humidity: " + humidity + "%",
				"class": "currently"
			  }).appendTo( "#cloud" );
			  
			$( "<div/>", {
				"id": "geoSkyDescription",
				"text": "" + description,
				"class": "currently"
			  }).appendTo( "#cloud" );
			  
			  $('#cloud').children().hide().fadeIn(400);			  
			  
		}
	});
}
	
function get_forecast(){
	var apiurl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + currPos.coords.latitude + '&lon=' + currPos.coords.longitude + '&units=imperial&cnt=3&APPID=a6353e053fb997c24ad388a6e1c1d04d';
	
	$.ajax({ 
		type: 'GET', 
		url: apiurl, 
		dataType: 'json',
		success: function (data) { 
			var days = data.list;
			
			var humidity = days[0].main.humidity;
			var description = days[0].weather[0].description;
			var temp = Math.round(parseFloat(days[0].main.temp));
			
			var humidity2 = days[1].main.humidity;
			var description2 = days[1].weather[0].description;
			var temp2 = Math.round(parseFloat(days[1].main.temp));
			
			//Tomorrow:			
			$( "<div/>", {
				"text": "Tomorrow",
				"class": "header forecasted tomorrow"
			  }).appendTo( "#cloud2" );
			  
			$( "<div/>", {
				"id": "geoforecastedTemp",
				"text": "Temperature: " + temp + " ºF",
				"class": "forecasted tomorrow"
			  }).appendTo( "#cloud2" );
			  
			$( "<div/>", {
				"id": "geoforecastedHumid",
				"text": "Humidity: " + humidity + "%",
				"class": "forecasted tomorrow"
			  }).appendTo( "#cloud2" );
			  
			$( "<div/>", {
				"id": "geoforecastedSkyDescription",
				"text": "" + description,
				"class": "forecasted tomorrow"
			  }).appendTo( "#cloud2" );
			  
			  $('#cloud2').children().hide();
			  
			//2 Day Forecast:
			$( "<div/>", {
				"text": "2 Days Away",
				"class": "header day2"
			  }).appendTo( "#cloud3" );
			  
			$( "<div/>", {
				"id": "geoforecastedTemp2",
				"text": "Temperature: " + temp2 + " ºF",
				"class": "forecasted day2"
			  }).appendTo( "#cloud3" );
			  
			$( "<div/>", {
				"id": "geoforecastedHumid2",
				"text": "Humidity: " + humidity2 + "%",
				"class": "forecasted day2"
			  }).appendTo( "#cloud3" );
			  
			$( "<div/>", {
				"id": "geoforecastedSkyDescription2",
				"text": "" + description2,
				"class": "forecasted day2"
			  }).appendTo( "#cloud3" );
			  
			  $('#cloud3').children().hide();	
			  		  
				  $('#cloud2').children().fadeIn(500, function() {	
					$('#cloud3').children().fadeIn(700);
				  
			  });		  
		}
	});	
}

