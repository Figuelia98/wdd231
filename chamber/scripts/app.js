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
const business = [
    
    { name:"DS MOTO",
      adresse: "Antsiranana, Madagascar",
      email: "dsmoto@gmail.com",
      phone:"+261 32 89 908 76",
      website: "",
      type: "Accomodations",
      facebook:"",
      image: "images/dsmoto.jpg"
      
    }, 
    { name:"DS MOTO",
        adresse: "Antsiranana, Madagascar",
        email: "dsmoto@gmail.com",
        phone:"+261 32 89 908 76",
        website: "",
        type: "Real Estate",
        facebook:"images/dsmoto.jpg",
         image: "images/dsmoto.jpg"
        
      }, 
      { name:"DS MOTO",
        adresse: "Antsiranana, Madagascar",
        email: "dsmoto@gmail.com",
        phone:"+261 32 89 908 76",
        website: "",
        type: "Real Estate",
        facebook:"images/dsmoto.jpg",
         image: "images/dsmoto.jpg"
        
      }, 
      { name:"DS MOTO",
        adresse: "Antsiranana, Madagascar",
        email: "dsmoto@gmail.com",
        phone:"+261 32 89 908 76",
        website: "",
        type: "Restaurants",
        facebook:"images/dsmoto.jpg",
         image: "images/dsmoto.jpg"
        
      }, 
      { name:"DS MOTO",
        adresse: "Antsiranana, Madagascar",
        email: "dsmoto@gmail.com",
        phone:"+261 32 89 908 76",
        website: "",
        type: "Restaurants",
        facebook:"images/dsmoto.jpg",
         image: "images/dsmoto.jpg"
        
      }, 
      { name:"DS MOTO",
        adresse: "Antsiranana, Madagascar",
        email: "dsmoto@gmail.com",
        phone:"+261 32 89 908 76",
        website: "",
        type: "Restaurants",
        facebook:"images/dsmoto.jpg",
         image: "images/dsmoto.jpg"
        
      }, 
      { name:"DS MOTO",
        adresse: "Antsiranana, Madagascar",
        email: "dsmoto@gmail.com",
        phone:"+261 32 89 908 76",
        website: "",
        type: "Accomodations",
        facebook:"images/dsmoto.jpg",
         image: "images/dsmoto.jpg"
        
      }, 
      { name:"DS MOTO",
        adresse: "Antsiranana, Madagascar",
        email: "dsmoto@gmail.com",
        phone:"+261 32 89 908 76",
        website: "",
        type: "Hotels & Motels",
        facebook:"images/dsmoto.jpg",
         image: "images/dsmoto.jpg"
        
      }, 
    ];

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
     displaybusiness(business)
     
     function displaybusinesstype(types){

        types.forEach((type)=>{
            selectList.innerHTML = selectList.innerHTML + `<option value="${type}">${type}</option>`
          });
     }
     displaybusinesstype(businesstype);


   function displaybusinesspertype(types){
   
    container.innerHTML = ""
    const newbusiness = business.filter((busi)=>{
      return busi.type == types
    })
    displaybusiness(newbusiness);
 }

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

    const newbizn = business.filter((biz)=>{
      return tobesearh.toLowerCase() == biz.name.toLowerCase().substring(0,tobesearh.length)
    })
    container.innerHTML =""

    displaybusiness(newbizn)

   })
   const mode = document.querySelector(".mode")
   document.querySelector(".h2").style.color = "#373F51";
   document.querySelector(".h22").style.color = "#373F51";
   mode.addEventListener("click", ()=>{
    //alert( document.querySelector("body").style.backgroundColor);
     if(document.querySelector("body").style.backgroundColor == "" ||document.querySelector("body").style.backgroundColor == "white"){
      document.querySelector("body").style.backgroundColor = "#373F51";
      document.querySelector(".h2").style.color = "#58A4B0";
      document.querySelector(".h22").style.color = "#58A4B0";
     }
     else{
      document.querySelector("body").style.backgroundColor = "white";
      document.querySelector(".h2").style.color = "#373F51";
      document.querySelector(".h22").style.color = "#373F51";
     }
    
     
   });