let login = document.querySelector('.login');
let register = document.querySelector('.sign__up');
height = window.screen.height;
position = height / 8;
login.style.top = position + 'px';
register.style.top = '-100%';


function displayLogin() {
    login.style.top = position + 'px';
    register.style.top = '-100%';
}   

function displayRegister() {
    login.style.top = '-100%';
    register.style.top = position + 'px';
}