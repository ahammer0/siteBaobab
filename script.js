const btnSuivant=document.getElementById("gallerie-btnSuivant");
const btnPrecedant=document.getElementById("gallerie-btnPrecedant");

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
