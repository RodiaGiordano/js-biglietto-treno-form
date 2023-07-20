
const price = 0.21;

const userSubmit = document.getElementById("user_submit");

const userAge = document.getElementById("user_age");

const userKm = document.getElementById("user_km");
 



userSubmit.addEventListener("click", function(){

    

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

    
    userAge.value = "";
    userKm.value = "";

    document.getElementById("ticket").innerHTML = "il prezzo del biglietto è: " + ticketPrice.toFixed(2) + "€";
    
   
}

})
    











