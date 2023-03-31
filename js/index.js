let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
// Selecionar o objeto
//Formulario
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
//Menu-Hamburguer
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');



window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    //Vai Remover o Menu Hamburguer
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active')

}
//Vai Remover menu de busca quanto mover para baixo
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})

//Menu Hamburguer
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

//Vai Ativar menu de Busca

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
})

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
})