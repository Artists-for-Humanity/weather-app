window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".temperature-description");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition
    (position=>{
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `http://api.weatherapi.com/v1/forecast.json?key=5863755acb594078956213139202910&q=${lat},${long}&days=1`;

      fetch(api)
           .then(response =>{
             return response.json();
           })
           .then(data =>{
             console.log(data)
             const {temp_f, condition, feelslike_f, humidity, vis_miles, wind_mph}= data.current;
             const {name,} = data.location
             const {maxtemp_f, mintemp_f} = data.forcast.forecastday
             //Set DOM Elements from the API
             //temperatureDegree.textContent = Temperature;
             //temperatureDescription.textContent = Condition;
             //locationTimezone.textContent = data.timezone;
             console.log("City", name);
             console.log("Day", "Mon");
             console.log("Time", "3:00 pm");
             console.log("Condition", condition);
             console.log("Temp", temp_f + "°F");
             console.log("Feels Like", feelslike_f + "°F")
             console.log("Humidity", humidity + "%")
             console.log("Visibility", vis_miles + " miles")
             console.log("Wind", wind_mph + " mph")
             console.log("Min_Temp", mintemp_f + "°F");
             console.log("Max_Temp", maxtemp_f + "°F");
             console.log(data)
       });
    });
  }

  //function setIcons(icon, iconid)
});
