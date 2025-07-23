// ************** 1st Nav Bar *****************

const threeDotsButton = document.querySelector('.nav-bar-three-dots');
const threeDotsSidebar = document.querySelector('.nav-bar-three-dots-sidebar');
const threeDotsSidebarClose = document.querySelector('.nav-bar-three-dots-sidebar-close');

threeDotsButton.addEventListener('click', () => {
    threeDotsSidebar.classList.toggle('show');
});

threeDotsSidebarClose.addEventListener('click', () => {
    threeDotsSidebar.classList.remove('show');
});


// ************** Image Slider ********************

var slideIndex = 1;
var prevIndex = 0;

function nextSlide(n) {
    prevIndex = slideIndex;
    displaySlides(slideIndex += n, n);
}

function displaySlides(n, direction) {
    var i;
    var slides = document.getElementsByClassName("showSlide");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");
    }

    slides[prevIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.display = "block";

    if (direction === 1) {
        slides[slideIndex - 1].style.transform = "translateX(100%)";
        setTimeout(() => {
            slides[prevIndex - 1].style.transform = "translateX(-100%)";
            slides[slideIndex - 1].style.transform = "translateX(0)";
            slides[slideIndex - 1].classList.add("active");
        }, 50);
    } else if (direction === -1) {
        slides[slideIndex - 1].style.transform = "translateX(-100%)";
        setTimeout(() => {
            slides[prevIndex - 1].style.transform = "translateX(100%)";
            slides[slideIndex - 1].style.transform = "translateX(0)";
            slides[slideIndex - 1].classList.add("active");
        }, 50);
    }
}


var timer = setInterval(function () {
    nextSlide(1);
}, 5000);




// ***************** Carousel ***********************

// document.addEventListener("DOMContentLoaded", () => {
//     const carousel = document.querySelector('.carousel');
//     const nextBtn = document.querySelector('.next-btn');
//     const prevBtn = document.querySelector('.prev-btn');

//     let scrollAmount = 0;

//     nextBtn.addEventListener('click', () => {
//         carousel.scrollBy({ left: 330, behavior: 'smooth' });
//     });

//     prevBtn.addEventListener('click', () => {
//         carousel.scrollBy({ left: -330, behavior: 'smooth' });
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll('.carousel');
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');

    carousels.forEach((carousel, index) => {
        let scrollAmount = 0;

        nextBtns[index].addEventListener('click', () => {
            carousel.scrollBy({ left: 330, behavior: 'smooth' });
        });

        prevBtns[index].addEventListener('click', () => {
            carousel.scrollBy({ left: -330, behavior: 'smooth' });
        });
    });
});




// ************** Search Filter *******************

const searchInput = document.querySelector('.nav-bar-search');
const products = document.querySelectorAll('.box');
const carousel = document.querySelectorAll('.main-carousel-container');
const banner = document.querySelector(".carousel-banner");


searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    products.forEach((product) => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
            banner.style.display = 'none';
        } else {
            product.style.display = 'none';
        }
    });
    carousel.forEach((items) => {
        const itemName = items.getAttribute('data-name').toLowerCase();
        if (itemName.includes(searchTerm)) {
            items.style.display = 'flex';
            banner.style.display = 'none';
        } else {
            items.style.display = 'none';
        }
    });
});



// *********** Responsive Search filter *************

const searchInput2 = document.getElementById('nav-bar-search');
const filter_product = document.querySelectorAll('.box');

searchInput2.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filter_product.forEach((product) => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
            banner.style.display = 'none';
        } else {
            product.style.display = 'none';
        }
    });
    carousel.forEach((items) => {
        const itemName = items.getAttribute('data-name').toLowerCase();
        if (itemName.includes(searchTerm)) {
            items.style.display = 'flex';
            banner.style.display = 'none';
        } else {
            items.style.display = 'none';
        }
    });
});




// ************ For Change Theme *****************

let theme_icon = document.querySelector('#theme-icon');
let theme = document.querySelector('#theme');
theme.onclick = function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains("dark-theme")) {
        theme_icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        theme_icon.classList.replace('fa-sun', 'fa-moon');
    }
}
