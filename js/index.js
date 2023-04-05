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
//Video BTN
let videoBtn = document.querySelectorAll('.vid-btn');



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

//VIDEO Btn
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
});
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        640:{
            sliderPerView: 1,
        },
        768:{
            sliderPerView: 2,
        },
        1024:{
            sliderPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        450:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        991:{
            slidesPerView: 4,
        },
        1200:{
            slidesPerView: 5,
        },
    },
});

