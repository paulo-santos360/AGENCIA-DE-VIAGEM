let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
// Selecionar o objeto

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