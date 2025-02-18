const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified
const container = document.querySelector(".houses");

const businesstype = ["Antsiranana", "Mahajanga","Toamasina", "Antananarivo","Fianarantsoa","Toliara"];
const lineList = document.querySelector("#Linelist")
const selectList = document.querySelector("#category")
const makesearch = document.querySelector("#makesearch")
const search = document.querySelector("#search")
let datas ;

function displaybusiness(houses){
  houses.forEach((house)=>{
      container.innerHTML = container.innerHTML + ` <div class="house">
       <div class="body">
        <figure>
         <img src="${house.image}" alt="${house.type}">
        <figcaption>${house.type}: ${house.tarif} $ / month</figcaption>
        </figure>
       
       </div>
       <div class="foot">
          <ul>
              <li>
                  <a href="mailto:${house.email}"><i class="fa-solid fa-envelope"></i> <span class="text"> Email</span></a>
              </li>
              <li>
                  <a href="tel:${house.phone}"><span class="text"><i class="fa-solid fa-phone"></i> Phone</span></a>
              </li>
          </ul>
       </div>
   </div>`
    });
}

function displaybusinesstype(types){

  types.forEach((type)=>{
      selectList.innerHTML = selectList.innerHTML + `<option value="${type}">${type}</option>`
    });
}
displaybusinesstype(businesstype);

fetch('data/houses.json')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json(); // Parse the JSON content
})
.then(data => {
  function displaybusinesspertype(city){

    container.innerHTML = ""
    const newhouses = datas.filter((house)=>{
    return house.city == city
    })
    displaybusiness(newhouses);
    }
    
  datas = Array.isArray(data) ? data : [data]; 
 
 displaybusiness(datas)
 selectList.addEventListener("change",(event)=>{

  displaybusinesspertype(event.target.value);
  
  }) 
  const antsi = document.querySelector("#Antsiranana")
  antsi.addEventListener("click",()=>{
  displaybusinesspertype("Antsiranana");
  })
  const maha = document.querySelector("#Mahajanga")
  maha.addEventListener("click",()=>{
  displaybusinesspertype("Mahajanga");
  })
  const toama = document.querySelector("#Toamasina")
  toama.addEventListener("click",()=>{
  displaybusinesspertype("Toamasina");
  })
  const tana = document.querySelector("#Antananarivo")
  tana.addEventListener("click",()=>{
  displaybusinesspertype("Antananarivo");
  })
  const fina = document.querySelector("#Fianarantsoa")
  fina.addEventListener("click",()=>{
  displaybusinesspertype("Fianarantsoa");
  })
  const toli = document.querySelector("#Toliara")
  toli.addEventListener("click",()=>{
  displaybusinesspertype("Toliara");
  })
  makesearch.addEventListener("click",()=>{
  const tobesearh = search.value;
  tobesearh.length
  
  const newhouses = datas.filter((house)=>{
  return tobesearh.toLowerCase() == house.type.toLowerCase().substring(0,tobesearh.length)
  })
  container.innerHTML =""
  
  displaybusiness(newhouses)
  
  })
})
.catch(error => {
  console.error('Error loading the JSON file:', error);
});
    