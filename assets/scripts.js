let slideIndex = 1;
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
nextButton.addEventListener('click', function () {
    nextSlide();
});
function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}
prevButton.addEventListener('click', () => {
    slideIndex--;
    showSlides(slideIndex);
});

function currentSlide(n) {
    showSlides((slideIndex = n));
}
const dotOne = document.getElementById('dotOne');
const dotTwo = document.getElementById('dotTwo');
const dotThree = document.getElementById('dotThree');

function showSlides(n) {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('cib-active');
    }

    slides[slideIndex - 1].classList.add('active');

    dots[slideIndex - 1].classList.add('cib-active');
}
dotOne.addEventListener('click', function () {
    currentSlide(1);
});
dotTwo.addEventListener('click', function () {
    currentSlide(2);
});
dotThree.addEventListener('click', function () {
    currentSlide(3);
});

const filters = document.querySelectorAll('.filter-spe');
const images = document.querySelectorAll('.gallery img');

const imagesFilter = (e) => {
    document.querySelector('.f-active').classList.remove('f-active');
    e.target.classList.add('f-active');
    images.forEach((image) => {
        image.classList.add('image-inactive');
        if (
            image.dataset.name === e.target.dataset.name ||
            e.target.dataset.name === 'Tous'
        ) {
            image.classList.remove('image-inactive');
        }
    });
};

filters.forEach((button) => button.addEventListener('click', imagesFilter));
