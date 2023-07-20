
const price = 0.21;

const userSubmit = document.getElementById("user_submit");

const userReset = document.getElementById("user_reset");

const userName = document.getElementById("user_name");

const userAge = document.getElementById("user_age");

const userKm = document.getElementById("user_km");
 


userReset.addEventListener("click", function(){

    userName.value = "";
    userAge.value = "Seleziona Età"
    userKm.value = "";

})


userSubmit.addEventListener("click", function(){

    
let name = (userName.value);
let age = parseInt(userAge.value);
let km = parseFloat(userKm.value);  


if (isNaN (age) || isNaN(km)){
        alert("Compila tutti i campi - premere F5")
} 

else {

    ticketPrice = price * km;

    if (age == 3){

        ticketPrice *= 0.6;       
    }

    else if (age == 1){
        ticketPrice *= 0.8;
    }

    userName.value = "";
    userAge.value = "Seleziona Età";
    userKm.value = "";

    document.getElementById("ticket").innerHTML = name + " il prezzo del biglietto è: " + ticketPrice.toFixed(2) + "€";
    
   
}

})
    











