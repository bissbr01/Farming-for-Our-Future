//Geo based features
var currPos;

function setup_geo_services(positionObj){
   if(positionObj) {   
		currPos = positionObj; //Set class level variable
		get_weather();
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
			var temp = data.main.temp;
			var humidity = data.main.humidity;
			var description = data.weather[0].description;
			
			$( "<div/>", {
				"id": "geoTemp",
				"text": "Temperature: " + temp + " F",
				"class": "currently"
			  }).insertAfter( "#geo" );
			  
			$( "<div/>", {
				"id": "geoHumid",
				"text": "Humidity: " + humidity + "%",
				"class": "currently"
			  }).insertAfter( "#geo" );
			  
			$( "<div/>", {
				"id": "geoSkyDescription",
				"text": "" + description + ".",
				"class": "currently"
			  }).insertAfter( "#geo" );
		}
	});
}

