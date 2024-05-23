const nameInput = document.getElementById('nameInput');
const passwordInput = document.getElementById('passwordInput');
const emailInput = document.getElementById('emailInput');
const signupButton = document.getElementById('signupButton');
const container = document.getElementById('container');

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');



const URL_BASE= "https://4592-200-3-193-228.ngrok-free.app";


//alert("AHHHHHHHHHHH")

let alfa = 10;
let beta = "Velociraptors";
let gamma = false;

console.log(beta);

//EVENTOS
signupButton.addEventListener('click', signup);
searchButton.addEventListener('click', search);

getUsers();

//FUNCIONES
async function search(){
    let search = searchInput.value;
    let response = await fetch(URL_BASE+'/user/searchByEmail/'+search);
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

    let response = await fetch(URL_BASE+'/user/create', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: json
    });

    console.log(response);    
    location.href = "index.html"; //Viajar a otra pagina
}

//FUNCIONES
async function getDoctors() {
    let response = await fetch(URL_BASE + '/user/listDoctor');
    let users = await response.json();

    users.forEach(user => {
        let userContainer = document.createElement('div'); //<div> //</div>
        let userTitle = document.createElement('h3'); //<h3> </h3>
        let userSubtitle = document.createElement('small'); //<email> </email>
        let userAction = document.createElement('button'); //<button> </button>

        userContainer.appendChild(userTitle); //<div> <h3> </h3> //</div> 
        userContainer.appendChild(userSubtitle); //<div> <h3> </h3> <email> </email> </div>
        userContainer.appendChild(userAction); //<div> <h3> </h3> <email> </email> <button> </button> </div>

        userTitle.innerHTML = user.username; // <h3> **** **** </h3>
        userSubtitle.innerHTML = user.email; // <small> ****@****.*** </small>
        userAction.innerHTML = 'Eliminar'; //<button> Eliminar </button>

        userAction.addEventListener('click', function() {
            deleteUserById(user.id);
        });

        container.appendChild(userContainer);
    });
    //for(let i=0; i<users.length; i++){ FOR LARGO Y ABURRIDO
        //console.log(users[i]);
    //}
}


async function deleteUserById(id){
    let response = await fetch(URL_BASE+'/user/delete' + id, {
        method: 'DELETE'
    });
    let message = await response.json();
    console.log(message);
}


async function getPokemon(){
    //Proceso que se demora 10 segundos 
    //Async hace que se ejecute en un segundo plano
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/150");
    let pokemon = await response.json();

    console.log(pokemon.sprites.front_default);
    coverImg.setAttribute('src',pokemon.sprites.front_default);
}

