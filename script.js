const btnSuivant=document.getElementById("gallerie-btnSuivant");
const btnPrecedant=document.getElementById("gallerie-btnPrecedant");

const photos=document.querySelectorAll(".gallerie img");
let elementAffiche=0;
function actualiserAffichage(noElement, photos){
    for (let i=0; i<photos.length;i++){
        if (i===noElement){
            photos[i].classList.remove("gallerie-hidden");
        }
        else{
            photos[i].classList.add("gallerie-hidden");
        }
    }
}
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
