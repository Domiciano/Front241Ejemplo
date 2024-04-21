const nameInput = document.getElementById('nameInput');
const passInput = document.getElementById('passInput');
const emailInput = document.getElementById('emailInput');
const signupButton = document.getElementById('signupButton');
const coverImg = document.getElementById('coverImg');
const container = document.getElementById('container');

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

const URL_BASE = "https://9bf8-200-3-193-78.ngrok-free.app";


//alert("Hola mundo");

let alfa = 10;
let beta = "Juan Jose";
let gamma = false;

console.log(beta)

//EVENTOS
signupButton.addEventListener('click', signup);
searchButton.addEventListener('click', search);

//acciones iniciales 
getUsers();



async function search(){
    let search = searchInput.value;
    let response = await fetch(URL_BASE+'/user/searchByEmail/'+search);
    if(response.status === 200){

    }
    else if(response.status === 400){
        
    }
    let user = await response.json();
    console.log(user);
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
    postUser(user);
}

async function postUser(user){
    //Obj a JSON
    let json = JSON.stringify(user);
    console.log(json);

    let response = await fetch(URL_BASE+'/user/create',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: json
    });

    console.log(response);

}

async function getUsers(){
    let response = await fetch(URL_BASE+"/user/list"); //HTTP Requ
    let users = await response.json();

    users.forEach( user => {
       
       let userContainer =  document.createElement('div')
        let userTitle = document.createElement('h3');
        let userSubtittle = document.createElement('small');
        let userAction = document.createElement('button');

        userContainer.appendChild(userTitle);
        userContainer.appendChild(userSubtittle);
        userContainer.appendChild(userAction);

        userTitle.innerHTML = user.name;
        userSubtittle.innerHTML = user.email;
        userAction.innerHTML = "Eliminar";

        userAction.addEventListener('click', () => {
            deleteUserById(user.id);
        })

    })
    container.appendChild(userContainer);

    //console.log(users);

   // for(let i = 0; 1 < users.length; i++){
     //   console.log( users[i])

    //}
    //console.log(users);

}

async function deleteUserById(id){

}

async function getPokemon(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/150");
    console.log(response);

    let pokemon = await response.json();
    console.log(pokemon);

    console.log(pokemon.sprites.front_default);
    coverImg.setAttribute('src', pokemon.sprites.front_default);
}


