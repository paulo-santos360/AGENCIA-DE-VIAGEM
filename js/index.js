let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
// Selecionar o objeto
//Formulario
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
//Menu-Hamburguer
let formClose = document.querySelector('#form-close');



window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}
//Vai Remover menu de busca quanto mover para baixo

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})

//Vai Ativar menu de Busca

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
})

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
})