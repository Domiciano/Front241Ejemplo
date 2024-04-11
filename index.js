const nameInput = document.getElementById('nameInput');
const dateInput = document.getElementById('dateInput');
const emailInput = document.getElementById('emailInput');
const signupButton = document.getElementById('signupButton');
const coverImg = document.getElementById('coverImg');


//alert("Hola mundo");

let alfa = 10;
let beta = "Juan Jose";
let gamma = false;

console.log(beta)

//EVENTOS
signupButton.addEventListener('click', signup);

function signup(){
    //alert("Click!");
    getUsers(); 
    console.log("Hola mundo");
}

async function getUsers(){
    let response = await fetch("https://babc-200-3-193-78.ngrok-free.app/user/list"); //HTTP Requ
    let users = await response.json();
    console.log(users);
}

async function getPokemon(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/150");
    console.log(response);

    let pokemon = await response.json();
    console.log(pokemon);

    console.log(pokemon.sprites.front_default);
    coverImg.setAttribute('src', pokemon.sprites.front_default);
}


