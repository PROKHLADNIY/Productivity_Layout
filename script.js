'use sctict'

/* HEADER MENU*/

function mobileMenu ({
    mobile, 
    svg_open, 
    svg_close, 
    navigation
}) {
    mobile.addEventListener('click', () => {
        svg_open.classList.toggle('header__button-hidden');
            svg_open.classList.contains('header__button-hidden')

            ? navigation.classList.add('header__navigation-open') 
            : navigation.classList.remove('header__navigation-open')

            navigation.classList.contains('header__navigation-open')
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'visible'
            
        svg_close.classList.toggle('header__button-hidden');
    });
}

mobileMenu(
    {
        mobile: document.querySelector('.header__mobile'),
        svg_open: document.querySelector('.header__button-open'),
        svg_close: document.querySelector('.header__button-close'),
        navigation: document.querySelector('.header__navigation'),
    }
);

/* PLAN SLIDER */

function planSlider () {
    const buttons = document.querySelectorAll('.main-plan-slider-btn');
    const slider = document.querySelector('.main__slider');
    const slide = document.querySelector('.main__slide');
    const slideWidth = slide.getBoundingClientRect().width;

    let currentIndex = 0;
    let totalSlides = buttons.length;

    function goToSlide(index) {
        slider.style.transform = `translateX(-${slideWidth * index}px)`;
        currentIndex = index;
    }

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            goToSlide(index);
            resetInterval();
        });
    });

    let intervalId = setInterval(() => {
        let nextIndex = (currentIndex + 1) % totalSlides;
        
        goToSlide(nextIndex);
    }, 3000);

    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            let nextIndex = (currentIndex + 1) % totalSlides;
            
            goToSlide(nextIndex);
        }, 3000);
    }
}

planSlider();

/* TESTIMONIALS SLIDER */

function testimonialsSlider () {
    const slider = document.querySelector('.main_testimonials-slider');
    const slides = document.querySelectorAll('.main_testimonials-slide');
    const buttons = document.querySelectorAll('.main_testimonials-slider--buttons button');

    let currentIndex = 0;
    const slideCount = slides.length;
    const gap = 64;
    let intervalId;

    function updateSlider(index) {
        const slideWidth = slides[0].offsetWidth;
        const translateX = -index * (slideWidth + gap);
        slider.style.transform = `translateX(${translateX}px)`;

        buttons.forEach(btn => btn.classList.remove('active'));
        if (buttons[index]) buttons[index].classList.add('active');
    }

    function startAutoSlide() {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlider(currentIndex);
        }, 3000);
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            clearInterval(intervalId);
            currentIndex = index;
            updateSlider(currentIndex);
            startAutoSlide();
        });
    });

    updateSlider(currentIndex);
    startAutoSlide();
}

testimonialsSlider();

/* FAQ ACCORDION */

function faqAccordion({ 
    accordButtons, 
    accordOpen, 
    accordionArrow 
}) {

    for (let i = 0; i < accordButtons.length; i++) {
        accordButtons[i].addEventListener('click', () => {
            accordOpen[i].classList.toggle('accordion-hidden');
            accordionArrow[i].classList.toggle('faq-accordion-open-svg');
        });
    }
}

faqAccordion(
    {
        accordButtons: document.querySelectorAll('.main__faq-accordion--btn'),
        accordOpen: document.querySelectorAll('.main__faq-accordion--open'),
        accordionArrow: document.querySelectorAll('.faq-accordion-svg'),
    }
);

/* FORM */

const formSubmit = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
    });
}

formSubmit();

/* FOOTER DATE */

const footerDate = () => {
    document.getElementById('footer-date').textContent = new Date().getFullYear();
}

footerDate();
