let loginForm = document.getElementById('loginForm');
let regForm = document.getElementById('regForm');
let indicator = document.getElementById('indicator');
let close_menu = document.getElementById('close');
let menuBtn = document.getElementById('menu_btn');
let open_menu = document.getElementById('open');
let navlinks = document.querySelector('.navlinks');

let navbar = document.getElementById('navbar');
const itemsBox = document.querySelector('.items-box');

// function filter(){
//   itemsBox.classList.add('show');
// }


window.onscroll = function(){
  if(window.scrollY > 0){
    navbar.style.background = 'white';
    navbar.style.display = 'fixed';
  }else{
    navbar.style.background = 'transparent';
    navbar.style.display = 'flex';
  }
};
function login(){
  regForm.style.display = 'none';
  loginForm.style.display = 'flex';
  indicator.style.transform = 'translateX(0)';
}
function Register(){
  indicator.style.transform = 'translateX(150px)';
  regForm.style.display = 'flex';
  loginForm.style.display = 'none';
}
menuBtn.onclick = function(){
  navlinks.classList.toggle ('active');
  menuBtn.classList.toggle ('active');
};

