let temp = document.getElementById("temp");
let speed = document.getElementById("speed");
let height = document.getElementById("height");

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Taghazout&appid=25630b928508461462077f55c0095942&units=metric&lang=fr`)
  .then(response => response.json())
  .then(data => {
    temp.textContent = data.main.temp + " °C";
    speed.textContent =  data.wind.speed + " m/s";
    height.textContent = (data.wind.speed*0.5).toFixed(2) + " m" ;
  });
