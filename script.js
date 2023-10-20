const btnSuivant=document.querySelector(".gallerie__btn--Suivant");
const btnPrecedant=document.querySelector(".gallerie__btn--Precedant");


const photos=document.querySelectorAll(".gallerie__images");
let elementAffiche=0;
function actualiserAffichage(noElement, photos){
    const divPuces=document.querySelector(".gallerie__puces");
    divPuces.innerHTML="";

    for (let i=0; i<photos.length;i++){
        if (i===noElement){
            photos[i].classList.remove("gallerie__images--hidden");
            const span=document.createElement("span");
            span.innerText="\u2022";
            span.classList.add("gallerie__puces--Active");
            divPuces.appendChild(span);
        }
        else{
            photos[i].classList.add("gallerie__images--hidden");
            const span=document.createElement("span");
            span.innerText="\u2022";
            span.classList.add("gallerie__puces--NotActive");
            divPuces.appendChild(span);
        }
    }
}
actualiserAffichage(elementAffiche,photos);
//gestion du bouton suivant
btnSuivant.addEventListener("click",()=>{
    if (elementAffiche<photos.length-1){
        elementAffiche++;
    }
    actualiserAffichage(elementAffiche,photos);
});
//gestion du bouton précédent
btnPrecedant.addEventListener("click",()=>{
    if(elementAffiche>0){
        elementAffiche--;
    }
    actualiserAffichage(elementAffiche,photos);
});

//precedant en appuyant sur n
//
const gallerie=document.querySelector(".gallerie");
gallerie.addEventListener("keydown",(e)=>{
    if(e.key==="n"){
        if (elementAffiche<photos.length-1){
            elementAffiche++;
        }
        actualiserAffichage(elementAffiche,photos);
    }
});
//precedant en appuyant sur p
gallerie.addEventListener("keydown",(e)=>{
    if(e.key==="p"){
        if(elementAffiche>0){
            elementAffiche--;
        }
        actualiserAffichage(elementAffiche,photos);
    }
});
