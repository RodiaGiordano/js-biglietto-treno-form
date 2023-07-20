
const price = 0.21;

const userSubmit = document.getElementById("user_submit");

const userAge = document.getElementById("user_age");

const userKm = document.getElementById("user_km");
 



userSubmit.addEventListener("click", function(){


    



    
console.log(typeof userAge + " Tipo")
console.log(userAge + " Valore")
console.log(typeof userKm + "Tipo")
console.log(userKm + " Valore")   




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



})







