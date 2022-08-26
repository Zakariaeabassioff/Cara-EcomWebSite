/* Responsive navbar */
const burgerMenu = document.getElementById('bars');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', function(){
    //navLinks.firstElementChild.style.right = '0px';
    navLinks.firstElementChild.classList.add('active');
});

const closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', function(){
    navLinks.firstElementChild.classList.remove('active');
});


