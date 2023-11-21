const navbar = document.querySelector('#nav');

window.addEventListener('scroll', function(){
    if(window.scrollY > 70){
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
})


const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close-btn');
const navbarButton = document.querySelector('#nav-btn');

navbarButton.addEventListener('click', function(){
    sidebar.classList.add('show-sidebar');
})

closeButton.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
})
