

//Esta pagina solo la puede ver un usuario loggeado

let userJSON = window.localStorage.getItem('user')
console.log(userJSON);

if(userJSON == null){
    location.href = 'login.html';
}
