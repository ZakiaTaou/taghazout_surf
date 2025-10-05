let temp = document.getElementById("temp");
let speed = document.getElementById("speed");
let height = document.getElementById("height");

async function getWeather() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Taghazout&appid=25630b928508461462077f55c0095942&units=metric&lang=fr"
    );
    if (!response.ok) {
      throw new Error(`Error : ${response.status}`);
    }
    const data = await response.json();
    temp.textContent = data.main.temp + " °C";
    speed.textContent = data.wind.speed + " m/s";
    height.textContent = (data.wind.speed * 0.5).toFixed(2) + " m";
  } catch(error) {
    console.error(`Error : ${error}`);
    temp.textContent = "...";
    speed.textContent = "...";
    height.textContent = "...";
  
  }

}

getWeather();

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message envoyé ! Merci de nous contacter ");
  form.reset();
});



const bar = document.getElementById("bar");
const navMenu = document.querySelector(".nav-menu");
bar.addEventListener("click", (e) => {
  navMenu.classList.toggle("active");
});


document.addEventListener("click",(e)=>{
  if(!bar.contains(e.target) && !navMenu.contains(e.target)){
    navMenu.classList.remove("active")
  }
});


navMenu.querySelectorAll("a").forEach((link) =>{
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  });

})