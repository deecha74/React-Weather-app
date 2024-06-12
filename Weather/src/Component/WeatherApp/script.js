// document.addEventListener("DOMContentLoaded", function () {
//   const apiKey = "f9a8bc67db857feafdab6e9583cf3016";
//   const apiUrl =
//     "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//   const searchBox = document.querySelector(" .searchbox input");
//   const searcBtn = document.querySelector(" .searchbox button");

//   async function checkweather(city) {
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//     let data = await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML =
//       Math.round(data.main.temp) + "°C";
//     document.querySelector(".humadity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".speed").innerHTML = data.wind.speed + "k/hr";
//   }
//   searcBtn.addEventListener("click", () => {
//     checkweather(searchBox.value);
//   });
// });
