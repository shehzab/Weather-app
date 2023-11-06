 
     const apikey = "95363adbecb697e8de97de5a95052e06";
     const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

     const searchBox = document.querySelector(".search input");
     const searchBtn = document.querySelector(".search button");
     const weatherIcon = document.querySelector(".weather-icon");

     async function checkWeather(city){
          const response = await fetch(apiUrl + city + `&appid=${apikey}`);



          if (response.status==404) {
              document.querySelector(".error").style.display = "block";
              document.querySelector(".weather").style.display = "none";
              return;
          }else{
               

                const data = await response.json();

          if (data.main && data.wind) {
              document.querySelector(".city").innerHTML = data.name;
              document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
              document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
              document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
          } else {
              console.error('Data format is not as expected');
          }



          if(data.weather[0].main == "Clouds"){
                  weatherIcon.src = "images/clouds.png";

          }
          else if(data.weather[0].main == "Clear"){
              weatherIcon.src = "images/clear.png"
          }
          else if(data.weather[0].main == "Rain"){
              weatherIcon.src = "images/rain.png"
          }
          else if(data.weather[0].main == "Drizzle"){
              weatherIcon.src = "images/Drizzle.png"
          }
          else if(data.weather[0].main == "Mist"){
              weatherIcon.src = "images/Mist.png"
          }

           document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

          }

        
     }

     searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value); 
     });