const navMenu = document.getElementById('nav-menu');
const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');
const navItem = document.querySelectorAll('.nav_item');

/* open nav menu */

navOpen.addEventListener('click', () => {
    navMenu.classList.add('nav-menu--open')
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('nav-menu--open')
});

navItem.forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('nav-menu--open')
    })
});

// header scroll 

const header = document.getElementById('l-header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        header.classList.add('l-header--scroll')
    }else {
        header.classList.remove('l-header--scroll')
    }
})

//swiper 

const testimonialSwiper = new Swiper(".testimonial_wrapper", {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
})