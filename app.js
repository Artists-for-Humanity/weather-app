window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".weather");
  let temperatureDegree = document.querySelector(".temperature");
  let maxtemp = document.querySelector(".max");
  let mintemp = document.querySelector(".min");
  let iconImage = document.querySelector(".images img");
  let tempformat = "C";
  function settemp(temp, max, min) {
    temperatureDegree.textContent = temp + "°" + tempformat;
    maxtemp.textContent = max + "°" + tempformat;
    mintemp.textContent = min + "°" + tempformat;
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `http://api.weatherapi.com/v1/forecast.json?key=5863755acb594078956213139202910&q=${lat},${long}&days=1`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const {
            temp_f,
            feelslike_f,
            humidity,
            vis_miles,
            wind_mph,
            temp_c,
          } = data.current;
          const { name } = data.location;
          const { text, icon } = data.current.condition;
          const {
            maxtemp_f,
            mintemp_f,
            maxtemp_c,
            mintemp_c,
          } = data.forecast.forecastday[0].day;
          //Set DOM Elements from the API

          temperatureDescription.textContent = text;
          iconImage.src = icon;

          settemp(temp_f, maxtemp_f, mintemp_f);
          document.addEventListener("click", () => {
            if (tempformat === "F") {
              tempformat = "C";
              settemp(temp_c, maxtemp_c, mintemp_c);
            } else {
              tempformat = "F";
              settemp(temp_f, maxtemp_f, mintemp_f);
            }
          });

          console.log("City", name);
          console.log("Day", "Mon");
          console.log("Time", "3:00 pm");
          console.log("Condition", text);
          console.log("Temp", temp_f + "°F");
          console.log("Feels Like", feelslike_f + "°F");
          console.log("Humidity", humidity + "%");
          console.log("Visibility", vis_miles + " miles");
          console.log("Wind", wind_mph + " mph");
          console.log("Min_Temp", mintemp_f + "°F");
          console.log("Max_Temp", maxtemp_f + "°F");
        });
    });
  }
});
