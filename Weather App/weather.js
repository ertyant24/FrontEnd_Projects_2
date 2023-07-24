// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d52957a3c809c7d588d8438951e12dca

// https://api.openweathermap.org/data/2.5/weather?q=London&appid=d52957a3c809c7d588d8438951e12dca

const main = document.querySelector(".location");
const weatherBox = document.querySelector(".weather-box ");
const details = document.querySelector(".details");
const error404 = document.querySelector(".not-found");

$("#search_button").click(function () {
    let cityName = $("#txtCity").val();
    let apiKey = "d52957a3c809c7d588d8438951e12dca";

    if (cityName == "") {
        return;
    }


    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey
        }`, function (data, status) {
            // console.log(status);
            console.log(data);
            // console.log(status);
            // console.log(data.cod);
            // if(status != "success"){
            //     main.style.height = "400px";
            //     weatherBox.css("display", "none");
            //     details.css("display", "none");
            //     error404.css("dsiplay", "block");
            //     error404.addClass("fade-in");
            //     return;
            // }

            error404.style.display = "none";
            error404.classList.remove("fade-in");

            const image = document.getElementById("weather_id");
            const temperature = document.querySelector(".temperature");
            const description = document.querySelector(".description");
            const humidity = document.getElementById("humidity_id");
            const windSpeed = document.getElementById("wind_id");

            switch (data.weather[0].main) {
                case "Clear":
                    image.src = "Images/clear_weather.jpg";
                    break;
                case "Rain":
                    image.src = "Images/rain_weather.jpg";
                    break;
                case "Snow":
                    image.src = "Images/snow_weather.jpg";
                    break;
                case "Clouds":
                    image.src = "Images/clouds_weather.jpg";
                    break;
                case "Haze":
                    image.src = "Images/haze_weather.jpg";
                    break;
                default :
                    image.src = "";
                    break;
            }

            temperature.innerHTML = `${Number((data.main.temp) - 273.15).toFixed(2)}<span> ℃</span>`;
            description.innerHTML = `${data.weather[0].description
            }`;
            humidity.innerHTML = `${parseInt(data.main.humidity)}<span>%</span>`
            windSpeed.innerHTML = `${data.wind.speed}<span>m/s</span>`

            weatherBox.style.display = "";
            details.style.display = "";
            weatherBox.classList.add("fade-in");
            details.classList.add("fade-in");
            main.style.height = "625px";


        }).catch((e) => {
            if(e.statusText == "Not Found"){
                main.style.height = "450px";    
                weatherBox.style.display = "none";
                details.style.display = "none";
                error404.style.display = "block";
                error404.classList.add("fade-in");
                return;
            }
        })
})


// const searchButton = document.getElementById("search_button");

// searchButton.addEventListener("click", function(){
//     const apiKey = "d52957a3c809c7d588d8438951e12dca";
//     const cityName = document.getElementById("txtCity").value;

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API key}`)

// })