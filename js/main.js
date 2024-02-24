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


/* =================================================================================  */

let options = {
  root: null,
  rootMargin: '5px',
  threshold: 0.5
}

let callback = function(entries, observer){
  entries.forEach(entry => {
      if (entry.isIntersecting){
          console.log('find', entry)
          entry.target.classList.add('active')
          observer.unobserve(entry, target)
      }
  });
}

let observer = new IntersectionObserver(callback, options)

let targets = document.querySelectorAll('.header-body__content')
targets.forEach(target => {
  observer.observe(target)
})


/* ==========================================================================  */

const animItems = document.querySelectorAll('.header-body__images')

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}



/* ================================================================================== */

const animContent = document.querySelectorAll('.about-content')

if (animContent.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < animContent.length; index++){
            const animItem = animContent[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

/* ==============================================================================================  */

const animImages = document.querySelectorAll('.about-images')

if (animImages.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < animImages.length; index++){
            const animItem = animImages[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

/* ==============================================================================================  */

const animProducs = document.querySelectorAll('.products-items')

if (animProducs.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < animProducs.length; index++){
            const animItem = animProducs[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

/* ==============================================================================================  */

const animProducsContent = document.querySelectorAll('.products-content')

if (animProducsContent.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < animProducsContent.length; index++){
            const animItem = animProducsContent[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

/* ==========================================================================================  */

const stagesItem = document.querySelectorAll('.stages-item')

if (stagesItem.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < stagesItem.length; index++){
            const animItem = stagesItem[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

/* ==========================================================================================  */

const coursesItem = document.querySelectorAll('.courses-inner')

if (coursesItem.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < coursesItem.length; index++){
            const animItem = coursesItem[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

/* ==========================================================================================  */

const reviewsContent = document.querySelectorAll('.reviews-content')

if (reviewsContent.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < reviewsContent.length; index++){
            const animItem = reviewsContent[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

/* ==========================================================================================  */

const reviewsInner= document.querySelectorAll('.reviews-inner')

if (reviewsInner.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < reviewsInner.length; index++){
            const animItem = reviewsInner[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

/* ==========================================================================================  */

const reviewsSlider= document.querySelectorAll('.reviews-slider')

if (reviewsSlider.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < reviewsSlider.length; index++){
            const animItem = reviewsSlider[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

/* ==========================================================================================  */

const certificates= document.querySelectorAll('.certificates-inner')

if (certificates.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < certificates.length; index++){
            const animItem = certificates[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

/* ==========================================================================================  */

const accordionItem = document.querySelectorAll('.questions-accordion__item')

if (accordionItem.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < accordionItem.length; index++){
            const animItem = accordionItem[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

















