window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".weather");
  let temperatureDegree = document.querySelector(".temperature");
  let maxtemp = document.querySelector(".maxtemp");
  let mintemp = document.querySelector(".mintemp");
  let iconImage = document.querySelector(".images img");
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
             const {temp_f, feelslike_f, humidity, vis_miles, wind_mph}= data.current;
             const {name,} = data.location
             const {text, icon} = data.current.condition
             const {maxtemp_f, mintemp_f} = data.forecast.forecastday[0].day
             //Set DOM Elements from the API
             temperatureDegree.textContent = temp_f + "°F";
             temperatureDescription.textContent = text;
             maxtemp.textContent = maxtemp_f + "°F";
             mintemp.textContent = mintemp_f + "°F";
             iconImage.src = icon;

             console.log("City", name);
             console.log("Day", "Mon");
             console.log("Time", "3:00 pm");
             console.log("Condition", text);
             console.log("Temp", temp_f + "°F");
             console.log("Feels Like", feelslike_f + "°F")
             console.log("Humidity", humidity + "%")
             console.log("Visibility", vis_miles + " miles")
             console.log("Wind", wind_mph + " mph")
             console.log("Min_Temp", mintemp_f + "°F");
             console.log("Max_Temp", maxtemp_f + "°F");
       });
    });
  }
});
