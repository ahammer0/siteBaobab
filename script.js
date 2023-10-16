const btnSuivant=document.querySelector(".gallerie-btnSuivant");
const btnPrecedant=document.querySelector(".gallerie-btnPrecedant");


const photos=document.querySelectorAll(".imageGallerie");
let elementAffiche=0;
function actualiserAffichage(noElement, photos){
    const divPuces=document.querySelector(".gallerie-puces");
    divPuces.innerHTML="";

    for (let i=0; i<photos.length;i++){
        if (i===noElement){
            photos[i].classList.remove("gallerie-hidden");
            const span=document.createElement("span");
            span.innerText="\u2022";
            span.classList.add("gallerie-puceActive");
            divPuces.appendChild(span);
        }
        else{
            photos[i].classList.add("gallerie-hidden");
            const span=document.createElement("span");
            span.innerText="\u2022";
            span.classList.add("gallerie-puceNotActive");
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
