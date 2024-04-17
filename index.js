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


//ACCIONES INICIALES
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
    location.href = "index.html"; //Viajar a otra página
}

async function getUsers(){
    let response = await fetch(URL_BASE+"/user/list"); //HTTP Requ
    let users = await response.json();

    users.forEach( user => {
        
        let userContainer = document.createElement('div'); //<div></div>
        let userTitle = document.createElement('h3'); //<h3></h3>
        let userSubtitle = document.createElement('small'); //<small></small>
        let userAction = document.createElement('button'); //<button></button>

        userContainer.appendChild(userTitle); //<div><h3></h3></div>
        userContainer.appendChild(userSubtitle); //<div><h3></h3><small></small></div>
        userContainer.appendChild(userAction); //<div><h3></h3><small></small><button></button></div>

        userTitle.innerHTML = user.name; //<h3>***</h3>
        userSubtitle.innerHTML = user.email; //<small>***</small>
        userAction.innerHTML = 'Eliminar'; //<button>Eliminar</button>

        userAction.addEventListener('click', function(){
            //alert("user to delete #" + user.id);
            deleteUserById(user.id);
        });


        container.appendChild(userContainer);
        
    }); 
}

async function deleteUserById(id){
    let response = await fetch(URL_BASE+'/user/delete/'+id, {
        method: 'DELETE'
    });
    let message = await response.json();
    console.log(message);
    location.href = "index.html";
}

async function getPokemon(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/150");
    console.log(response);

    let pokemon = await response.json();
    console.log(pokemon);

    console.log(pokemon.sprites.front_default);
    coverImg.setAttribute('src', pokemon.sprites.front_default);
}


