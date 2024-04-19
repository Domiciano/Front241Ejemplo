const nameInput= document.getElementById("nameInput");
const dateInput= document.getElementById("dateInput");
const passInput= document.getElementById("passInput");
const signupInput= document.getElementById("signupInput");
const coverimg=document.getElementById("coverimg");
const URL_BASE="";



let alfa = 10;
let beta = "Juan Jose";
let gamma = false;
console.log(beta);
//EVENTOS 
signupInput.addEventListener('click', signup);
function signup(){
    //VALIDACIONES DE DATOS
   let name=nameInput.value;
   let password=passInput.value;
   let email=emailInput.value;
   let user={
    name:name,
    password:password,
    email:email
   };
   console.log(user);
}
async function postUser(user){
    //objeto a JSON
    let json=JSON.stringify(user);
    console.log(json);
    let response= await fetch('https://46ad-200-3-193-78.ngrok-free.app/user/create',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }
        ,body:json
    });
    console.log(response);
}
async function getPokemon(){
    let response= await fetch("https://pokeapi.co/api/v2/pokemon/150");
    console.log(response);
}