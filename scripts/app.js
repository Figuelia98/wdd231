const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified
const container = document.querySelector(".courses");

const classCertifcation = [
    
    { name:"CSE 110",
      status: "done",
    }, 
    { name:"CSE 111",
        status: "done",
     }, 
      { name:"CSE 210",
        status: "inprogress",
      }, 
      { name:"WDD 130",
        status: "done",
      }, 
      { name:"WDD 131",
        status: "done",
      }, 
      { name:"WDD 231",
        status: "inprogress",
      }, 
    ];

function displayCourse(classCertifcation){
    classCertifcation.forEach((course)=>{
        container.innerHTML = container.innerHTML + `<div class="status ${course.status}">${course.name}</div>`
      })
 }
 displayCourse(classCertifcation)

 const all = document.querySelector("#all");
 const cse = document.querySelector("#cse");
 const wdd = document.querySelector("#wdd");

 all.addEventListener("click",() => {
    container.innerHTML = ""
     displayCourse(classCertifcation);
 });
 cse.addEventListener("click", () =>{
container.innerHTML = ""
 const newclass = classCertifcation.filter((classe) =>{
    
    return classe.name.substring(0,3) == "CSE";
 })
 displayCourse(newclass);
 });
 wdd.addEventListener("click", () =>{
    container.innerHTML = ""
    const newclass = classCertifcation.filter((classe) =>{
       return classe.name.substring(0,3) == "WDD";
    })
    displayCourse(newclass);
});