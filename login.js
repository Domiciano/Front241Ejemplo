const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const signupButton = document.getElementById('signupButton');

const URL_BASE= "https://4592-200-3-193-228.ngrok-free.app";

//EVENTOS
signupButton.addEventListener('click', async function(){

    let loginCred = {
        email: emailInput.value,
        password: passwordInput.value,
    };

    console.log(loginCred)
    let response =  await fetch(URL_BASE + '/login',{
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(loginCred)
    });

    let data = await response.json();
    console.log(data);

    if(response.status === 200){
        //Almacenar el dato en el cache
        //Cache solo soporta datos primitivos

        let user = JSON.stringify(data);
        window.localStorage.setItem('user', user);
        location.href='profile.html';
    }else{
        alert(data.description);
    }

});


