let Store_input_value = document.querySelector("#input-box");
let btn = document.querySelector(".search-btn");
let weather_box = document.querySelector(".weather-box");
let city = document.querySelector(".city"); // done
let date = document.querySelector(".date"); //done
let temp = document.querySelector(".temp"); // DONE
let min_max = document.querySelector(".min-max"); // done
let weather = document.querySelector(".weather"); // done
let humidity = document.querySelector(".humidity"); // done
// let date = document.querySelector(".date");
btn.addEventListener("click", function () {
  let Input_city = Store_input_value.value;
  //   console.log(city);

  // api
  async function Weather_api() {
    let api = await fetch(
      "http://api.weatherstack.com/current?access_key=aca0c085f732e14327076ee666d5ff99&query=" +
        Input_city
    );
    let Stored_Data = await api.json();
    console.log(Stored_Data);
    city.innerHTML = Stored_Data.request.query;
    temp.innerHTML = Stored_Data.current.temperature + " &degC";
    date.innerHTML = Stored_Data.location.localtime;
    weather.innerHTML = Stored_Data.current.weather_descriptions[0];
    min_max.innerHTML = "Wind Speed: " + Stored_Data.current.wind_speed;
    humidity.innerHTML =
      "Humidity: " +
      Stored_Data.current.humidity +
      " Precip: " +
      Stored_Data.current.precip;
  }
  Weather_api();
  weather_box.classList.add("active");
});
