//alert("hola mundo")
const nameInput = document.getElementById('nameInput')
const dateInput = document.getElementById('dateInput')
const emailInput = document.getElementById('emailInput')
const signupButton = document.getElementById('signupButton')


let alfa = 10;
let beta = "Juan Jose";
let gamma = false;

console.log(beta);

//Eventos
signupButton.addEventListener('click',signup);

function signup(){
    alert("CLICK!");
}