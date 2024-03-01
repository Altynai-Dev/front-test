const slider = document.querySelector('.products__slider');
const slideTrack = document.querySelector('.products__items');
const sliderContainer = document.querySelector('.products__sliderContainer');

const navMenuBtn = document.querySelector('.nav__menu');
const navMenu = document.querySelector('.nav__mobile-items');
const navMenuClose = document.querySelector('.nav__menu-close');

//Partners slider
const slides = document.querySelectorAll('.partners__right-imgBlock');

slides.forEach(slide => {
    slide.addEventListener('mouseover', () => {
        slide.querySelector('.hover-image').style.display = 'block';
        slide.querySelector('.slide-image').style.display = 'none';
    });

    slide.addEventListener('mouseout', () => {
        slide.querySelector('.hover-image').style.display = 'none';
        slide.querySelector('.slide-image').style.display = 'block';
    });
});

navMenuBtn.addEventListener('click', ()=>{
    navMenu.style.display = 'block';
});
navMenuClose.addEventListener('click', ()=>{
    navMenu.style.display = 'none';
})
