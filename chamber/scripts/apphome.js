const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified
const apikey="2ba6bc17ae61fe3ec7a53f767a44d6c5"
const apiname="wdd231"
let datas ;
const sunset = document.querySelector("#sunset");
const sunrise = document.querySelector("#sunrise");
const temp = document.querySelector("#temp");
const currtemp = document.querySelector("#currtemp");
const icon = document.querySelector("#icon");
const humidity = document.querySelector("#humidity");
const forecast = document.querySelector("#forcast");
const container = document.querySelector(".extrait")
function displaybusiness(business){
    business.forEach((busi)=>{
      let web =  ` <li><a href="${busi.website}"><i class="fa-solid fa-globe"></i><span class="text"> ${busi.website}</span></a></li>`
      if(busi.website == "#"){
          web = ""
      }    
        container.innerHTML = container.innerHTML + ` <div class="buss">
        <div class="head">
          <h3>${busi.name}</h3>
          <h4>${busi.adresse}</h4>
        </div>
         <div class="body">
          <img src="${busi.image}" alt="${busi.name}">
         </div>
         <div class="foot">
            <ul>
                <li>
                    <a href="mailto:${busi.email}"><i class="fa-solid fa-envelope"></i> <span class="text"> ${busi.email}</span></a>
                </li>
                `
                +
                web
                +
                `
                <li>
                    <a href="${busi.facebook}"><i class="fa-brands fa-facebook"></i><span class="text"> ${busi.facebook}</span></a>
                </li>
                <li>
                    <a href="tel:${busi.phone}"><span class="text"><i class="fa-solid fa-phone"></i> ${busi.phone}</span></a>

                </li>
                 <li>
                    <a href="tel:${busi.status}"><span class="text">Member level: ${busi.status}</span></a>
                </li>
            </ul>
         </div>
     </div>`
        
      });
  }
  fetch('data/members.json')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json(); // Parse the JSON content
})
.then(data => {
  datas = Array.isArray(data) ? data : [data];
  function getRandomSilverOrGold(objects, count = 3) {
    // Filter only objects with status "silver" or "gold"
    const filtered = objects.filter(obj => obj.status === "Silver" || obj.status === "Gold");

    // Shuffle the filtered array randomly
    const shuffled = filtered.sort(() => 0.5 - Math.random());

    // Return the first `count` elements (or fewer if not enough items)
    return shuffled.slice(0, Math.min(count, filtered.length));
} 
console.log(getRandomSilverOrGold(datas))
  displaybusiness(getRandomSilverOrGold(datas));

 
})
.catch(error => {
  console.error('Error loading the JSON file:', error);
});
const getWeekday = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
};





function formatTime(timestamp) {
  const date = new Date(timestamp * 1000); 
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

const mode = document.querySelector(".mode")
mode.addEventListener("click", ()=>{
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
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apikey}`; 


async function getWeather() {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("Weather Data:", data);
    
temp.innerText = data["main"].temp
humidity.innerText = data["main"].humidity;
sunrise.innerText = formatTime(data["sys"].sunrise)
sunset.innerText = formatTime(data["sys"].sunset)
currtemp.innerText = data["weather"][0].description
icon.src = `http://openweathermap.org/img/wn/${data["weather"][0].icon}@2x.png`


try {
  const response = await fetch(url1);
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  const datas = await response.json();
 
const lat = datas[0]["lat"];
const lon = datas[0]["lon"];
  const url2 = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`; 
  try {
    const response = await fetch(url2);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const datas1 = await response.json();
    console.log(" Data:", datas1);

const uniqueDays = {};
datas1.list.forEach(entry => {
const date = entry.dt_txt.split(" ")[0];
    if (!uniqueDays[date]) {
        uniqueDays[date] = {
            date: getWeekday(entry.dt_txt),
            temp: entry.main.temp
        };
    }
});

const tableData = Object.values(uniqueDays).slice(0, 3);
 forecast.innerHTML = ""
tableData.forEach(row => {
    forecast.innerHTML = forecast.innerHTML + `<li>${row.date.padEnd(18)} | <span class="cont"> ${row.temp}°C </span> </li> `
});
  
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