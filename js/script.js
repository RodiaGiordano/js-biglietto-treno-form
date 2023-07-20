
const price = 0.21;

const userAge = parseInt(prompt ("inserisci la tua età"));

const userKm = parseFloat(prompt ("inserisci il nuemro chilometri che vuoi percorrere"));

if (isNaN (userAge) || isNaN(userKm)){
    alert("Accetta solo caratteri numerici - premere F5")
} 

else {

    ticketPrice = price * userKm;



if (userAge >65){

    ticketPrice *= 0.8;       
}

else if (userAge <18){
    ticketPrice *= 0.6;
}


    


document.getElementById("ticket").innerHTML = "il prezzo del biglietto è: " + ticketPrice.toFixed(2) + "€";


}



