const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
const container = document.querySelector("#figure-container")
const datas = [
    {
      Name: "Adventure",
      imageUrl:
      "https://www.grandeslatitudes.voyage/wp-content/uploads/2022/03/Madagascar-Diego-Suarez-Mer-dEmeraude-Adobe-1.jpg"
    },
    {
        Name: "Nature",
        imageUrl:
        "https://ucarecdn.com/429d8f33-b4ba-4972-ac64-7dac100f5c78~7/nth/2/-/stretch/off/-/resize/1110x/"
      },
    
      {
        Name: "Peace",
        imageUrl:
        "https://www.grandeslatitudes.voyage/wp-content/uploads/2018/07/Mer-dEmeraude-balanc%CC%A7oire-BD.jpg"
      }
  ];
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified
function displayFigure(figures){
    figures.forEach((figure)=>{
        container.innerHTML = container.innerHTML + `<figure> <img src="${figure.imageUrl}" loading='lazy' alt="${figure.Name}" > <figcaption>${figure.Name}</figcaption></figure>`
      })
 }
displayFigure(datas);