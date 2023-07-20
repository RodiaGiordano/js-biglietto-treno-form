
const price = 0.21;

const userSubmit = document.getElementById("user_submit");

const userReset = document.getElementById("user_reset")

const userName = document.getElementById("user_name");

const userAge = document.getElementById("user_age");

const userKm = document.getElementById("user_km");
 


userReset.addEventListener("click", function(){

    userName.value = "";
    userAge.value = "";
    userKm.value = "";

})



userSubmit.addEventListener("click", function(){

    
let name = (userName.value);
let age = parseInt(userAge.value);
let km = parseFloat(userKm.value);  


console.log(typeof age)
console.log(age)



if (isNaN (age) || isNaN(km)){
        alert("Accetta solo caratteri numerici - premere F5")
} 

else {

    ticketPrice = price * km;

    if (age >65){

        ticketPrice *= 0.6;       
    }

    else if (age <18){
        ticketPrice *= 0.8;
    }

    userName.value = "";
    userAge.value = "";
    userKm.value = "";

    document.getElementById("ticket").innerHTML = name + " il prezzo del biglietto è: " + ticketPrice.toFixed(2) + "€";
    
   
}

})
    











