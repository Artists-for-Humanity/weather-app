window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".weather");
  let temperatureDegree = document.querySelector(".temperature");
  let maxtemp = document.querySelector(".max");
  let mintemp = document.querySelector(".min");
  let iconImage = document.querySelector(".images img");
  let midrowImg = document.querySelector("mid-row img");
  let tempformat = "F";
  function settemp(data) {
    let temp, max, min, hoursAndImages;
    if (tempformat == "C") {
      hoursAndImages = data.forecast.forecastday[0].hour.map((hourData) => {
        return { temp: hourData.temp_c, image: hourData.condition.icon };
      });
      temp = data.current.temp_c;
      min = data.forecast.forecastday[0].day.mintemp_c;
      max = data.forecast.forecastday[0].day.maxtemp_c;
    } else if (tempformat == "F") {
      hoursAndImages = data.forecast.forecastday[0].hour.map((hourData) => {
        return { temp: hourData.temp_f, image: hourData.condition.icon };
      });
      temp = data.current.temp_f;
      min = data.forecast.forecastday[0].day.mintemp_f;
      max = data.forecast.forecastday[0].day.maxtemp_f;
    }
    let clone;
    let midRow = document.querySelector(".mid-row");
    let masterClone = document.querySelector(".mid-column").cloneNode(true);
    midRow.innerHTML = "";
    hoursAndImages.forEach(({ temp, image }) => {
      clone = masterClone.cloneNode(true);
      clone.querySelector(".degree-text h2").textContent =
        Math.round(temp) + "°";
      clone.querySelector(".mid-image img").src = image;
      midRow.appendChild(clone);
    });
    temperatureDegree.textContent = Math.round(temp) + "°";
    maxtemp.textContent = Math.round(max) + "°" + tempformat;
    mintemp.textContent = Math.round(min) + "°" + tempformat;
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
          const hour_0_temp_f = data.forecast.forecastday[0].hour[0].temp_f;
          const hour_1_temp_f = data.forecast.forecastday[0].hour[1].temp_f;

          //Set DOM Elements from the API

          temperatureDescription.textContent = text;
          iconImage.src = icon;
          settemp(data);
          document.addEventListener("click", () => {
            if (tempformat === "F") {
              tempformat = "C";
              settemp(data);
            } else {
              tempformat = "F";
              settemp(data);
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
