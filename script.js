"use strict";
const propNb = document.querySelector('.rep input');
console.log(propNb);
const btnP = document.querySelector('.rep button');
console.log(btnP);
const restart = document.querySelector('.back button');
console.log(restart);
const result = document.querySelector('.back span');
console.log(result);
const indice = document.querySelector('.indice span');
console.log(indice);
const card = document.querySelector('.card-container')
//  nombre random + nouveau nombre quand appuie sur recommencer
let randomInt
let nbMax = 8
let nbTry = 0

restart.addEventListener('click', start);

function start(){
    randomInt = Math.floor(Math.random()*100);
    result.textContent = `${randomInt}`
    card.style.animation =""
    nbTry = 0
    indice.textContent = "Proposez un nombre entre 1 et 100, vous avez 7 essais"
    indice.style.color = "black"
};

btnP.addEventListener('click', adi);
document.addEventListener("keypress",function(e){
    if (e.key === 'Enter') {
        adi()
    }
});
console.log(nbTry);

function prop() {
    if(randomInt > propNb.value && propNb.value > 0){
        indice.textContent = `C'est plus grand que ${propNb.value}`
        indice.style.color = "blue"
        indice.style.fontSize = "1.5rem"
        propNb.value =""
    }
    else if(randomInt < propNb.value && propNb.value < 100){
        indice.textContent = `C'est plus petit que ${propNb.value}`
        indice.style.color = "blue"
        indice.style.fontSize = "1.5rem"
        propNb.value =""
    }
    else if(propNb.value < 0 || propNb.value > 100){
        indice.textContent = `${propNb.value} n'est pas un nombre compris entre 0 et 100 Attention !`
        indice.style.color = "red"
        indice.style.fontSize = "2rem"
        propNb.value =""
    }
    else{
        indice.textContent = `Bravo ${propNb.value} était bien le nombre recherché`
        indice.style.color = "green"
        indice.style.fontSize = "2rem"
        propNb.value =""
        card.style.animation ="turn 1s linear forwards"
    }
}


function adi (){
   
        if (nbTry < nbMax){
            nbTry++
            prop()
            console.log(nbTry);
        }else{
            indice.textContent = `Vous avez perdu ! le chiffre à trouver était ${randomInt}`
            indice.style.color = "red"
            card.style.animation ="turn 1s linear forwards"
            propNb.value =""
        }
    
}
start();