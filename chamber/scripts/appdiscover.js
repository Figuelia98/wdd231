const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified
const container = document.querySelector(".second-contenair");
let datas ;
function openModal(id) { document.getElementById(id).style.display = 'block'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }
function displaybusiness(business){
  business.forEach((busi)=>{
      container.innerHTML = container.innerHTML + ` <div class="card">

       <figure class="body">
       <img src="${busi.image}" alt="${busi.name}">
       <h2>${busi.name}</h2>
       </figure>
       <div class="foot">
       <address>${busi.adresse}</address>
       <p>${busi.description}</p>
        <a href="${busi.website}" target ="_blank"><button>Learn more</button></a>
       </div>
   </div>`
    });
}


const mode = document.querySelector(".mode")
mode.addEventListener("click", ()=>{
//alert( document.querySelector("body").style.backgroundColor);
if(document.querySelector("body").style.backgroundColor == "" ||document.querySelector("body").style.backgroundColor == "white"){
document.querySelector("body").style.backgroundColor = "#373F51";
}
else{
document.querySelector("body").style.backgroundColor = "white";
}


});
fetch('data/interestes.json')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json(); // Parse the JSON content
})
.then(data => {
  datas = Array.isArray(data) ? data : [data]; 
  displaybusiness(datas)
})
.catch(error => {
  console.error('Error loading the JSON file:', error);
});
    

document.addEventListener("DOMContentLoaded", () => {
  const visitorMessage = document.getElementById("visitor-message");
  const lastVisit = localStorage.getItem("lastVisit")
  const nmodal = document.querySelector("#nmodal")
  const now = Date.now();

  if (!lastVisit) {
      visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
      const daysDifference = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
      if (daysDifference < 1) {
          visitorMessage.textContent = "Back so soon! Awesome!";
      } else {
          visitorMessage.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
      }
  }
  nmodal.style.display = "block"

  localStorage.setItem("lastVisit", now);

});