const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
const container = document.querySelector("#figure")
const datas = [
    {
      Name: "Tsingy Rouge",
      location: "Antsiranana,DIANA",
      imageUrl:
      "https://www.ncl.com/sites/default/files/DIE_02_1920X1080%20LG.jpg"
    },
    {
        Name: "Baobab Morondava",
        location: "Morondava,Tulear",
        imageUrl:
        "https://madagascar-tourisme.com/wp-content/uploads/2017/05/34659880902_4347aa7312_k-e1496139290283.jpg"
      },
    
      {
        Name: "3 Baies",
        location: "Antsiranana,DIANA",
        imageUrl:
        "https://www.madabestour.com/wp-content/uploads/2022/06/baie-de-dune-1-3-baies-600x600.jpg"
      },
      {
        Name: "Nosy Hara",
        location: "Antsiranana,DIANA",
        imageUrl:
        "https://www.madabestour.com/wp-content/uploads/2022/06/DJI_0705-600x600.jpg"
      },
      {
        Name: "Parc national d'Ankarana",
        location: "Antsiranana,DIANA",
        imageUrl:
        "https://www.madabestour.com/wp-content/uploads/2022/06/Ankarana-nature-place-600x600.jpg"
      },
      {
        Name: "Nosy Iranja",
        location: "Antsiranana,DIANA",
        imageUrl:
        "https://ucarecdn.com/429d8f33-b4ba-4972-ac64-7dac100f5c78~7/nth/2/-/stretch/off/-/resize/1110x/"
      },
  ];
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified
function displayFigure(figures){
    figures.forEach((figure)=>{
        container.innerHTML = container.innerHTML + `<figure> <div><figcaption>${figure.Name}</figcaption> <ul> <li>Location: ${figure.location}</li></ul> </div><img src="${figure.imageUrl}" loading='lazy' alt="${figure.Name}" > </figure>`
      })
 }
displayFigure(datas);