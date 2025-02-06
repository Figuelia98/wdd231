const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified