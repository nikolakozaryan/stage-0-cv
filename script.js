const burgerMenu = document.querySelector('.burger')
const burgerSpan = document.querySelector('.burger-menu')
const nav = document.querySelector('nav');
const navItem = document.querySelectorAll('.nav_a')

burgerMenu.addEventListener('click', () => {
    burgerSpan.classList.toggle('active');
    burgerMenu.classList.toggle('close');
    nav.classList.toggle('active-nav');
})

navItem.forEach(item => item.addEventListener('click', () => {
    burgerSpan.classList.toggle('active');
    burgerMenu.classList.toggle('close');
    nav.classList.toggle('active-nav');
}))