const menuBar = document.querySelector(".header #menu-bar");
const navBar = document.querySelector(".header .navbar");
const searchBtn = document.querySelector(".header #search-btn");
const searchForm = document.querySelector(".header .search-form");
const loginBtn = document.querySelector(".header #login-btn");
const loginForm = document.querySelector("#login-form");
const formClose = document.querySelector("#form-close");
const videoBtn = document.querySelectorAll(".hero .video-btn");
const videoSlider = document.querySelector(".hero-video #video-slider");


/* On Scroll */
window.onscroll = () => {
    menuBar.classList.remove("fa-times");
    navBar.classList.remove("active");
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
}

/* Mobile Nav Toggle */
menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("fa-times");
    navBar.classList.toggle("active");
});

/* Search Icon Toggle */
searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
});

/* Login Form Toggle */
loginBtn.addEventListener("click", () => {
    loginForm.classList.add("active");
});

formClose.addEventListener("click", () => {
    loginForm.classList.remove("active");
});

/* Video Slider Toggle */
videoBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector('.hero-control .active').classList.remove('active');
        btn.classList.add('active');

        let src = btn.getAttribute('data-src');
        videoSlider.src = src;
    });    
});

/* Review Slider */
const reviewSlider = new Swiper('.review-slider', {
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

/* Brand Slider */
const brandSlider = new Swiper('.brand-slider', {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
    },
});
