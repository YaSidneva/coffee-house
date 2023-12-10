function closeMenuOnClick() {
    const burgerLinksArr = document.getElementsByClassName('burger-link');
    const checkbox = document.getElementById('is-check');

    for (let i = 0; i <= burgerLinksArr.length - 1; i++) {
        let burgerLink = burgerLinksArr[i];
        console.log(burgerLink);
        burgerLink.addEventListener("click", () => {
            checkbox.checked = false;
        });
    }
}

closeMenuOnClick();

function sliderCoffee() {
    const listForSlider = [
        { "img": "img/coffee-slider-3.png", "title": "Ice coffee", "text": "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.", "price": "$4.50" },
        { "img": "img/coffee-slider-1.png", "title": "S’mores Frappuccino", "text": "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.", "price": "$5.50" },
        { "img": "img/coffee-slider-2.png", "title": "Caramel Macchiato", "text": "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.", "price": "$5.00" }
    ]

    let currentSlideIndex = 0;

    const showSlide = () => {
        const currentSlideData = listForSlider[currentSlideIndex];

        const slideLeft = document.querySelector('.left-slide');
        const slideCenter = document.querySelector('.central-slide');
        const slideRight = document.querySelector('.right-slide');

        slideLeft.querySelector('.slide-img').src = currentSlideData.img;
        slideLeft.querySelector('.slide-title').textContent = currentSlideData.title;
        slideLeft.querySelector('.slide-text').textContent = currentSlideData.text;
        slideLeft.querySelector('.slide-price').textContent = currentSlideData.price;

        currentSlideIndex = (currentSlideIndex + 1) % listForSlider.length;

        const nextSlideData = listForSlider[currentSlideIndex];

        slideCenter.querySelector('.slide-img').src = nextSlideData.img;
        slideCenter.querySelector('.slide-title').textContent = nextSlideData.title;
        slideCenter.querySelector('.slide-text').textContent = nextSlideData.text;
        slideCenter.querySelector('.slide-price').textContent = nextSlideData.price;

        currentSlideIndex = (currentSlideIndex + 1) % listForSlider.length;

        const nextNextSlideData = listForSlider[currentSlideIndex];

        slideRight.querySelector('.slide-img').src = nextNextSlideData.img;
        slideRight.querySelector('.slide-title').textContent = nextNextSlideData.title;
        slideRight.querySelector('.slide-text').textContent = nextNextSlideData.text;
        slideRight.querySelector('.slide-price').textContent = nextNextSlideData.price;

        currentSlideIndex = (currentSlideIndex + 1) % listForSlider.length;
    };

    // Вызываем showSlide для отображения первого слайда
    showSlide();
}

let rotateCardsRightToLeft = () => {
    const currentSlideLeft = document.querySelector('.left-slide');
    const currentSlideCenter = document.querySelector('.central-slide');
    const currentSlideRight = document.querySelector('.right-slide');
    console.log('rotating...');

    currentSlideLeft.classList.remove('left-slide');
    currentSlideLeft.classList.add('right-slide');
    currentSlideLeft.style.opacity = "0";

    currentSlideCenter.classList.remove('central-slide');
    currentSlideCenter.classList.add('left-slide');

    currentSlideRight.classList.remove('right-slide');
    currentSlideRight.classList.add('central-slide');
    currentSlideRight.style.opacity = "1";
};

let rotateCardsLeftToRight = () => {
    const currentSlideLeft = document.querySelector('.left-slide');
    const currentSlideCenter = document.querySelector('.central-slide');
    const currentSlideRight = document.querySelector('.right-slide');
    console.log('rotating...');

    currentSlideLeft.classList.remove('left-slide');
    currentSlideLeft.classList.add('central-slide');
    currentSlideLeft.style.opacity = "1";

    currentSlideCenter.classList.remove('central-slide');
    currentSlideCenter.classList.add('right-slide');

    currentSlideRight.classList.remove('right-slide');
    currentSlideRight.classList.add('left-slide');
    currentSlideRight.style.opacity = "0";

};

let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener("click", rotateCardsRightToLeft);
arrowRight.addEventListener("click", rotateCardsLeftToRight);

let intervalId = setInterval(rotateCardsRightToLeft, 5000);

document.querySelector('.slider').addEventListener('mouseenter', () => {
    clearInterval(intervalId);
});

document.querySelector('.slider').addEventListener('mouseleave', () => {
    clearInterval(intervalId);
    intervalId = setInterval(rotateCardsRightToLeft, 5000);
});

// Вызываем функцию после загрузки страницы
document.addEventListener("DOMContentLoaded", sliderCoffee);

