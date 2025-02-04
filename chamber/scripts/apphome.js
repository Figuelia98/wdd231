const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified
const apikey="2ba6bc17ae61fe3ec7a53f767a44d6c5"
const apiname="wdd231"
let datas ;

function formatTime(timestamp) {
  const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`; // Ensure two-digit minutes
}

const mode = document.querySelector(".mode")
mode.addEventListener("click", ()=>{
//alert( document.querySelector("body").style.backgroundColor);
if(document.querySelector("body").style.backgroundColor == "" ||document.querySelector("body").style.backgroundColor == "white"){
document.querySelector("body").style.backgroundColor = "#373F51";
document.querySelector(".h2").style.color = "#2C535A";
document.querySelector(".h22").style.color = "#2C535A";
}
else{
document.querySelector("body").style.backgroundColor = "white";
document.querySelector(".h2").style.color = "#373F51";
document.querySelector(".h22").style.color = "#373F51";
}


});
const city = "Antsiranana"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=imperial`;
const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apikey}`; 


async function getWeather() {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("Weather Data:", data);
    
const states = data["weather"][0].description
const temp = data["main"].temp
const humidity = data["main"].humidity;
const sunrise = formatTime(data["sys"].sunrise);
const sunset = formatTime(data["sys"].sunset);
console.log(sunrise)
console.log(sunset)

try {
  const response = await fetch(url1);
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  const datas = await response.json();
  console.log("Geo Data:", datas);

 
  const obj =[
    {
        "name": "Antsiranana",
        "local_names": {
            "ru": "Анциранана",
            "ko": "안치라나나",
            "zh": "安齐拉纳纳",
            "fr": "Antsiranana",
            "ja": "アンツィラナナ"
        },
        "lat": -12.2779134,
        "lon": 49.2913394,
        "country": "MG",
        "state": "Diana Region"
    }

]
const lat = obj[0]["lat"];
const lon = obj[0]["lon"];
  const url2 = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${apikey}`; 
  try {
    const response = await fetch(url2);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const datas1 = await response.json();
    console.log(" Data:", datas1);

  
  } catch (error) {
    console.error("Error fetching geo data:", error);
  }

} catch (error) {
  console.error("Error fetching geo data:", error);
}

  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeather();