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
      adresse: "17 avenue Lally-Tollendal, Antsiranana, Madagascar",
      email: "alain.monteau@gmail.com",
      phone:" +261 32 81 274 69",
      website: "#",
      type: "Accomodations",
      facebook:"https://www.facebook.com/DSMOTOmada",
      image: "https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/453156558_1282922592675409_9154989672265551409_n.jpg?stp=cp6_dst-jpg_s720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGXd59dcZ3BNxAJOyZ9hMV-xiNyMbgyaRfGI3IxuDJpF93kjOPVM9dZm1mdAY5uaq4PPzk7RY_hb6-rkIxGPvds&_nc_ohc=qGoROzwGmcAQ7kNvgHEzkoS&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_gid=AznGQznmGcNiV68jk0cLNwa&oh=00_AYBbII7TRF4I_BpFtFBpyuIqvJv9kScU0kK4NNPprf-XSA&oe=679AB9EE"
      
    }, 
    { name:"Agence Immobilière de Diego",
      adresse: "Antsiranana, Madagascar",
      email: "agenceimmobilierediego@gmail.com",
      phone:"+261 32 49 830 32",
      website: "https://www.diegosuarez-immobilier.com",
      type: "Real Estate",
      facebook:"https://www.facebook.com/AgenceImmobiliereDeDiego",
      image: "https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/468397018_1125166956278362_1362846202593607232_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEeZowhBSnYhueD9JS6gP67zjHXC_SbTbHOMdcL9JtNsSEeMfhL_oZNEZWxNGMF5ysp9XJ3DzrO6vT4qnlQh9QW&_nc_ohc=KI8uMeZc51kQ7kNvgGweOwB&_nc_zt=23&_nc_ht=scontent-fra5-1.xx&_nc_gid=AGz7VQKSh9O_OREVc6UXsdA&oh=00_AYBBiiWB4yWyNeA0s-P14dXGBEaDgrimc1kS1L65Ss3-Yw&oe=679A8E57"
        
    }, 
    { name:"Passion Gourmande Diego ",
      adresse: "5 Avenue lally tolandale, Antsiranana, Madagascar",
      email: "rodyjuliano2@gmail.com",
      phone:"+261 32 41 035 67",
      website: "#",
      type: "Restaurants",
      facebook:"https://www.facebook.com/profile.php?id=61555763854030",
      image: "https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/471819742_122208468560192128_2422911228055386692_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeH3OUhbvULhohnDEPIzex3bSb9aPIMu921Jv1o8gy73bbNGpkMHJCFng70bj-mYN-Elwx7DEAAKxjQWP6aI_N-4&_nc_ohc=ZBq3zl52mAAQ7kNvgE_wANu&_nc_zt=23&_nc_ht=scontent-fra5-1.xx&_nc_gid=AFljjaPA1x-1uaTRe1KY5lq&oh=00_AYA9K4s_k_lf6wX3bvW7qpsFNCshVrcNm46vQT-kRe0SCw&oe=679A8A66"    
    }, 
      { name:"Diégo/Suarez Mandoky",
        adresse: "Station JOVENA. Parcages d’Ambilobe, Antsiranana, Madagascar",
        email: "ktb_1804@hotmail.fr",
        phone:"+261 32 98 728 26",
        website: "#",
        type: "Restaurants",
        facebook:"https://www.facebook.com/marseillediego",
         image: "https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-6/470197158_1150331600213086_8724774479445537707_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF9ZbdYyqfeyR4_jYBLuFnLz2cd28QHOLfPZx3bxAc4tw0HY0XqqwzSu9H2vF0O6riwh6is0AwRE_4AxfRM3cEB&_nc_ohc=fwPjk-3c8coQ7kNvgFTOXru&_nc_zt=23&_nc_ht=scontent-fra3-2.xx&_nc_gid=AMZ0smsLKxbO3UTXeJ4r11o&oh=00_AYA47o0AwZbiqPHAp6U73KJ_dSu0Gx0F6j-h2pXd5bEIrQ&oe=679AAC97"
        
      }, 
      { name:"Excursions de Luxe",
        adresse: "Antsiranana, Madagascar",
        email: "excursionsdeluxe@gmail.com",
        phone:"+261 32 62 361 23",
        website: "#",
        type: "Accomodations",
        facebook:"https://www.facebook.com/excursionsdeluxe",
         image: "https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-6/472874929_122143126592389946_3108083626323261315_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFI5MPiaJuLXhO56dLEK8ChYm7N05Wt1rpibs3Tla3WutP6z2pbBBXLqqtYtijYzyKEOrfa_-JFqgTmWGz5tFpg&_nc_ohc=t7tg4uFNy40Q7kNvgFfjwOy&_nc_zt=23&_nc_ht=scontent-fra3-2.xx&_nc_gid=ANTK5PTVMwIiQfu4eoRsUKu&oh=00_AYA5jk4gpcc_XzEuQ_N_ShkUj4mzFkgt6SQB1xnXCnwuDQ&oe=679AA8B3"
        
      }, 
      { name:"IMMO DIEGO",
        adresse: "Antsiranana, Madagascar",
        email: "prisma.invest@live.fr",
        phone:"+261 34 02 000 14",
        website: "https://www.immobilierdiegosuarez.com",
        type: "Real Estate",
        facebook:"https://www.facebook.com/profile.php?id=100068180304260",
         image: "https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/359766422_584924170456921_5259429343041302174_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHchCYmsZOhWBktTpgwYMARXIE0FkNsc2tcgTQWQ2xza_qURQ4U1wKAmPgfcN0gYyjoL-mfR1g_C_3KO3Pi6wSS&_nc_ohc=-jr3MwLXxBMQ7kNvgHVWSNT&_nc_zt=23&_nc_ht=scontent-fra5-1.xx&_nc_gid=AIeKXOo_pMAZQ40A-roCshV&oh=00_AYBEbTB0y-LsyOO6rya1ZCDpNZBsGwHDzE_iZA7DV2K9xA&oe=679A992E"
        
      }, 
      { name:"Akash Hotel",
        adresse: "Rue Rigault , Diégo-Suarez, Madagascar",
        email: "akash.hotel7@gmail.com",
        phone:"+261 32 12 225 10",
        website: "#",
        type: "Hotels & Motels",
        facebook:"https://www.facebook.com/profile.php?id=100057146062698",
         image: "https://scontent-fra3-1.xx.fbcdn.net/v/t1.6435-9/107618068_741272733297204_5681519471699145312_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFJAd-liFzosNuYwDfPr2WBneCBzL8qAfGd4IHMvyoB8ctEeaKp9bZIRkIGpNjko0Rsvsz_tJYU4Tv4cxd2ZH8H&_nc_ohc=o4LZgAzFspIQ7kNvgEQxSuJ&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_gid=AKBvR4H46DAX6Ip1y2BBKP5&oh=00_AYAf03eK-_evwNXK8hZw3COVqeqRHWsVJBaOYBbE7ib7Xg&oe=67BC50DE"
        
      }, 
      { name:"Hôtel Firdoss",
        adresse: "11 rue LAVIGERIE, 201, Antsiranana, Madagascar",
        email: "reservation@hotelfirdoss-diegosuarez.com",
        phone:"+261 32 89 908 76",
        website: "hotelfirdoss-diegosuarez.com",
        type: "Hotels & Motels",
        facebook:"https://www.facebook.com/profile.php?id=100077519781101",
         image: "https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/279141180_142160788368754_2129138334723386987_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFn5t_kN5RjmMvMPlcK9brdVok27KK1mO5WiTbsorWY7msJHNRnKy8dClU6f55UmKpRaW04pAlC90dk_pjnJ7aC&_nc_ohc=2mtZrHzkb3MQ7kNvgHgy_bm&_nc_zt=23&_nc_ht=scontent-fra5-1.xx&_nc_gid=AUMkeZ2ycv5x6hhTldMeJMa&oh=00_AYDM5LeWen_Qlp3EtEGZOo0NhzeDcrFymdtPzPJGqoOr5w&oe=679AA7AD"
        
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