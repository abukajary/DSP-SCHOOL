'use strict'

let modal = document.getElementById("pop-up"),
    btn = document.getElementById("open_pop-up"),
    span = document.getElementsByClassName("close")[0];

btn.addEventListener('click', ()=> {
    modal.style.display = "flex";
    document.body.style.overflow = 'hidden'
})

span.addEventListener('click', ()=> {
    modal.style.display = "none";
    document.body.style.overflow = 'visible'
})

window.addEventListener('click', (event)=> {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'visible'
    }
})


const slide = document.querySelector('.images__slider__content__img'),
    slide_images = document.querySelectorAll('.images__slider__content__img img'),
    prevBtn = document.querySelector('.btn-prev'),
    nextBtn = document.querySelector('.btn-next'),
    bulletin = document.querySelectorAll('.bullet-in'),
    size = slide_images[0].clientWidth;
let img_counter = 1,
    bulletin_counter = 0;

bulletin[bulletin_counter].classList.add('bullet-active')
slide.style.transform = 'translateX(' + (-size * img_counter) + 'px)';

nextBtn.addEventListener('click', ()=> {
    if (img_counter >= slide_images.length - 1) return
    slide.style.transition = 'transform 0.4s ease-in-out';
    bulletin[bulletin_counter].classList.remove('bullet-active')
    img_counter++;
    bulletin_counter++;
    if (bulletin_counter > 3) bulletin_counter = 0
    console.log(bulletin_counter)
    bulletin[bulletin_counter].classList.add('bullet-active')
    slide.style.transform = 'translateX(' + (-size * img_counter) + 'px)';
})

prevBtn.addEventListener('click', ()=> {
    if (img_counter <= 0) return
    slide.style.transition = 'transform 0.4s ease-in-out';
    bulletin[bulletin_counter].classList.remove('bullet-active')
    img_counter--;
    bulletin_counter--;
    if (bulletin_counter < 0) bulletin_counter = 3
    bulletin[bulletin_counter].classList.add('bullet-active')
    slide.style.transform = 'translateX(' + (-size * img_counter) + 'px)';
})

slide.addEventListener('transitionend', ()=> {
    if (slide_images[img_counter].id === 'lastImg') {
        slide.style.transition = 'none';
        img_counter = slide_images.length - 2;
        bulletin_counter = 0;
        slide.style.transform = 'translateX(' + (-size * img_counter) + 'px)';
    }
    if (slide_images[img_counter].id === 'firstImg') {
        slide.style.transition = 'none';
        img_counter = slide_images.length - img_counter;
        bulletin_counter = 4;
        slide.style.transform = 'translateX(' + (-size * img_counter) + 'px)';
    }
})