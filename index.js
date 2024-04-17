<<<<<<< HEAD
//alert("hola mundo")
const nameInput = document.getElementById('nameInput')
const passInput = document.getElementById('passInput')
const emailInput = document.getElementById('emailInput')
const signupButton = document.getElementById('signupButton')
const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')


=======
const nameInput = document.getElementById('nameInput');
const dateInput = document.getElementById('dateInput');
const emailInput = document.getElementById('emailInput');
const signupButton = document.getElementById('signupButton');
const coverImg = document.getElementById('coverImg');


//alert("Hola mundo");

>>>>>>> 1588c8dced7a5f670903173d115d6d99d11816f6
let alfa = 10;
let beta = "Juan Jose";
let gamma = false;

<<<<<<< HEAD
console.log(beta);

//Eventos
signupButton.addEventListener('click',signup);
searchButton.addEventListener('click',search);


async function search(){

    let search =searchInput.value;

    console.log('https://46ad-200-3-193-78.ngrok-free.app/user/searchByEmail/'+search)
    let response = await fetch('https://46ad-200-3-193-78.ngrok-free.app/user/searchByEmail/'+search);
    let user = await response.json();
    console.log(user)


}


function signup(){
    let name = nameInput.value;
    let password = passInput.value;
    let email = emailInput.value;
    
    let user = {
        name: name,
        password: password,
        email: email

    };
   // console.log(user);
   postUser(user);
   
}

async function postUser(user){

    let json = JSON.stringify(user);
    console.log(json);
   let response=  await fetch('https://46ad-200-3-193-78.ngrok-free.app/user/create',{
        method: 'POST',
        headers:{
            'Content-type':'application/json'

        },
        body: json
    });
    console.log(response);
}
async function getUsers(){
    let response = await fetch("https://babc-200-3-193-78.ngrok-free.app/user/list");
    let users = await response.json();
    console.log(users);
    
}

async function getPokemon(){

    // porceso de 10 seg
  let response = await fetch("https://pokeapi.co/api/v2/pokemon/150");
  let pokemon = await response.json()
  console.log(pokemon);



}
=======
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


>>>>>>> 1588c8dced7a5f670903173d115d6d99d11816f6
