const headerBurger = document.querySelector('.header-burger')
const headerNav = document.querySelector('.header-nav')

headerBurger.addEventListener('click', openBurger)

function openBurger(){
    headerNav.classList.toggle('open-active')
}




/* =========================================================================== */

const swiper = new Swiper('.swiper', {
    loop: true,
    
    spaceBetween: 50,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});


/* ============================================================================ */

const swiper2 = new Swiper('.certificates-swiper', {
  loop: true,
  
  slidesPerView: 1,
  spaceBetween: 20,
  
  pagination: {
    el: '.certificates-pagination',
    clickable: true,
  },
});


/* ============================================================================ */

const accordeon = document.querySelector('.questions-accordion')
const accordeonTitles = accordeon.querySelectorAll('.questions-accordion__button')

accordeonTitles.forEach((accordeonTitle) => {
    accordeonTitle.addEventListener('click', function(){
        const currentText = accordeonTitle.parentElement.querySelector('.questions-accordion__text')
        accordeonTitle.classList.toggle('active')
        currentText.classList.toggle('visible')

        if (currentText.classList.contains('visible')){
            currentText.style.maxHeight = currentText.scrollHeight + 'px'
        }else{
            currentText.style.maxHeight = null
        }
    })
})












