const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified

document.getElementById('timestamp').value = new Date().toISOString();
function openModal(id) { document.getElementById(id).style.display = 'block'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }


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
