const nameInput = document.getElementById('nameInput');
const passwordInput = document.getElementById('passwordInput');
const emailInput = document.getElementById('emailInput');
const signupButton = document.getElementById('signupButton');

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');


//alert("AHHHHHHHHHHH")

let alfa = 10;
let beta = "Velociraptors";
let gamma = false;

console.log(beta);

//EVENTOS
signupButton.addEventListener('click', signup);
searchButton.addEventListener('click', search);

//FUNCIONES
async function search(){
    let search = searchInput.value;
    let response = await fetch('https://46ad-200-3-193-78.ngrok-free.app/user/searchByEmail/'+search);
    let user = await response.json();
    console.log(user);
}

async function signup(){
    let name = nameInput.value;
    let password = passwordInput.value;
    let email = emailInput.value;

    let user = {
        name: name,  //etiqueta: valor
        password: password,
        email: email
    };

    console.log(user);
    postUser(user);
}

async  function postUser(user){
  //obj a JSON
  let json = JSON.stringify(user);
  console.log(json)

  let response = await fetch('https://46ad-200-3-193-78.ngrok-free.app/user/create', {
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: json
  });

  console.log(response)
}

async function getUsers(){
    let response= await fetch("https://babc-200-3-193-78.ngrok-free.app/user/list");
    let users = await response.json();
    console.log(users);
}

async function getPokemon(){
    //Proceso que se demora 10 segundos 
    //Async hace que se ejecute en un segundo plano
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/150");
    let pokemon = await response.json();
    console.log(pokemon.sprites.front_default);
    coverImg.setAttribute('src',pokemon.sprites.front_default);
}

