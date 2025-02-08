const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified

const params = new URLSearchParams(window.location.search);
document.getElementById('first_name').textContent = params.get('firstName');
document.getElementById('last_name').textContent = params.get('lastName');
document.getElementById('email').textContent = params.get('email');
document.getElementById('mobile').textContent = params.get('phone');
document.getElementById('organization').textContent = params.get('name');
document.getElementById('timestamp').textContent = params.get('timestamp');

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
