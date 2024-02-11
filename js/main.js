const headerBurger = document.querySelector('.header-burger')
const headerNav = document.querySelector('.header-nav')

headerBurger.addEventListener('click', openBurger)

function openBurger(){
    headerNav.classList.toggle('open-active')
}




