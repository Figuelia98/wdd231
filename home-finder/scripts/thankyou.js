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
document.getElementById('city').textContent = params.get('city');
document.getElementById('timestamp').textContent = params.get('timestamp');
