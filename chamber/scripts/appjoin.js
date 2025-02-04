const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified
const container = document.querySelector(".business");

const businesstype = ["Restaurants", "Hotels & Motels","Real Estate", "Accomodations"];
const lineList = document.querySelector("#Linelist")
const selectList = document.querySelector("#category")
const makesearch = document.querySelector("#makesearch")
const search = document.querySelector("#search")
let datas ;

function displaybusiness(business){
  business.forEach((busi)=>{
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
                  <a href="mailto:${busi.email}"><i class="fa-solid fa-envelope"></i> <span class="text"> Email</span></a>
              </li>
              <li>
                  <a href="${busi.website}"><i class="fa-solid fa-globe"></i><span class="text"> Website</span></a>
              </li>
              <li>
                  <a href="${busi.facebook}"><i class="fa-brands fa-facebook"></i><span class="text"> Facebook</span></a>
              </li>
              <li>
                  <a href="tel:${busi.phone}"><span class="text"><i class="fa-solid fa-phone"></i> Phone</span></a>
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



const mode = document.querySelector(".mode")
document.querySelector(".h2").style.color = "black";
document.querySelector(".h22").style.color = "black";
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
fetch('scripts/members.json')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json(); // Parse the JSON content
})
.then(data => {
  function displaybusinesspertype(types){

    container.innerHTML = ""
    const newbusiness = datas.filter((busi)=>{
    return busi.type == types
    })
    displaybusiness(newbusiness);
    }
    
  datas = Array.isArray(data) ? data : [data]; 
 
 displaybusiness(datas)
 selectList.addEventListener("change",(event)=>{

  displaybusinesspertype(event.target.value);
  
  }) 
  const resto = document.querySelector("#Restaurants")
  resto.addEventListener("click",()=>{
  displaybusinesspertype("Restaurants");
  })
  const hotels = document.querySelector("#Hotels")
  hotels.addEventListener("click",()=>{
  displaybusinesspertype("Hotels & Motels");
  })
  const estate = document.querySelector("#Estate")
  estate.addEventListener("click",()=>{
  displaybusinesspertype("Real Estate");
  })
  const accomodation = document.querySelector("#Accomodation")
  accomodation.addEventListener("click",()=>{
  displaybusinesspertype("Accomodations");
  })
  makesearch.addEventListener("click",()=>{
  const tobesearh = search.value;
  tobesearh.length
  
  const newbizn = datas.filter((biz)=>{
  return tobesearh.toLowerCase() == biz.name.toLowerCase().substring(0,tobesearh.length)
  })
  container.innerHTML =""
  
  displaybusiness(newbizn)
  
  })
})
.catch(error => {
  console.error('Error loading the JSON file:', error);
});
    