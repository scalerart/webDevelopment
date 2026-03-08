const sliderImages = [
    "images/gym-1.png",
    "images/gym-2.png",
    "images/gym-3.png",
    "images/gym-4.png",
]

const sliderWraper = document.querySelector('.slider-wraper');
const sliderIndicators = document.querySelector('.slider-indicators');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// create slider function
function initalizeSlider() {
    let currentIndex = 0;

    // create slider images
    sliderImages.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Gym image ${index + 1}`
        sliderWraper.appendChild(img);

        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => goToSlide(index))

        sliderIndicators.appendChild(indicator);
    })
    // update slider function
    const updateSlider = () => {
        sliderWraper.style.transform = `translateX(-${currentIndex * 100}%)`

        // update indicators
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    };

    // go to the specific slide
    const goToSlide = (index) => {
        currentIndex = index;
        updateSlider()
    }

    // next btn click
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % sliderImages.length;
        updateSlider();
    }
    nextBtn.addEventListener('click', nextSlide)

    // previoust btn click
    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
        updateSlider();
    }
    prevBtn.addEventListener('click', prevSlide);

    // auto play using interval
    let autoPlayInterbal = setInterval(nextSlide, 3000);

    // pause autoplay on hover
    sliderWraper.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterbal);
    })
    sliderWraper.addEventListener('mouseleave', () => {
        autoPlayInterbal = setInterval(nextSlide, 3000);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    initalizeSlider()
})