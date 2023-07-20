
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

    ticketType = "Biglietto Regolare"
    ticketPrice = price * km;

    if (age == 3){

        ticketPrice *= 0.6;
        ticketType = "Biglietto Over 65"        
    }

    else if (age == 1){
        ticketPrice *= 0.8;
        ticketType = "Biglietto Bambino"  
    }


    userName.value = "";
    userAge.value = "Seleziona Età";
    userKm.value = "";  
    
    
    
    document.getElementById("userName").innerHTML = name;
    document.getElementById("ticket_price").innerHTML = ticketPrice.toFixed(2) + "€";
    document.getElementById("ticket_type").innerHTML = ticketType
   
   
}

})
    











