const projectsSection = document.querySelector(".previous-work-content");

const projectsArray = [{
  link:"https://kelvinsada.github.io/Calculator/",
  src:"./picture/Functional-calculator.png",
  text:"An aesthetic Calculator",
  alt:"Calculator",
},
{
  link:"https://kelvinsada.github.io/NKSstore/",
  src:"./picture/Shopping-website.png",
  text:"A responsive E-commerce website",
  alt:"Shopping website",
},
{
  link:"https://kelvinsada.github.io/Dynamic-Notes/",
  src:"./picture/Dynamic-notes.png",
  text:"A Dynamic Note that does the function of your notes and calculator",
  alt:"Dynamic Note",
}]

function addingPreviousProjects(){
  projectsSection.innerHTML += projectsArray.map(x => `<div class="previous-work-item">
    <a href=${x.link} target="_blank"><img class="project-image-link" src=${x.src} alt=${x.alt}/></a>
    <p>${x.text}</p>
  </div>`)
}
addingPreviousProjects()

const imagesSection = document.querySelector(".related-pictures");
const images = ["./picture/convocation.jpg","./picture/Looking-good.jpg","./picture/sign-out.jpg","./picture/With-friend(1).jpg","./picture/with-siblings.jpg"];
var i = 0;

function imageSlides(){

    imagesSection.innerHTML = `<img src=${images[i]} class="image-slides"/>`

    if (i< images.length -1){
      i++;
    } else {
      i = 0;
    }

  setTimeout("imageSlides()",2500)
}
imageSlides()

const imageToggle = document.querySelector(".toggle-button");
const listToggle = document.querySelector(".links");

function menuInfo (){
  imageToggle.addEventListener("click",function (){
    listToggle.classList.toggle("add");
    console.log(listToggle)
  })
}
menuInfo ()