const slideWrapper = document.querySelector('.slides');
const allSlide = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');

function initalizeSlider() {
    let index = 0;
    allSlide.forEach((event, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        dot.classList = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));

        dotsContainer.append(dot);
    });

    const updateDots = () => {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    const goToSlide = i => {
        index = i;
        slideWrapper.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    };

    const nextSlide = () => {
        index = (index + 1) % allSlide.length;
        goToSlide(index);
    };

    const prevSlide = () => {
        index = (index - 1 + allSlide.length) % allSlide.length;
        goToSlide(index);
    };

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // auto play interval
    let autoPlayInterbal = setInterval(nextSlide, 3000);

    // pause auto play on hover
    slideWrapper.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterbal);
    });

    slideWrapper.addEventListener('mouseleave', () => {
        autoPlayInterbal = setInterval(nextSlide, 3000);
    });
};

document.addEventListener('DOMContentLoaded', initalizeSlider);

/*
1.  DOM Select করা
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const dotsContainer = document.querySelector('.dots');

    ✔  কি হচ্ছে এখানে?
        1.  slides → পুরো slides wrapper (যেটা move হবে)
        2.  slide → সব slide এর NodeList
        3.  nextBtn → next button
        4.  prevBtn → previous button
        5.  dotsContainer → যেখানে dot গুলো তৈরি হবে

    ✔  মনে রাখবে: আমরা slide গুলো সরাচ্ছি না — আমরা wrapper (.slides) সরাচ্ছি।

2.  State Variable
    let index = 0;
    let interval;

    ✔  এখানে কি হচ্ছে?
        1.  index → এখন কোন slide active আছে
        2.  interval → auto slide এর setInterval store করার জন্য

    ✔  Slider-এ সবকিছু control করে এই index।

3.  Dynamic Dot তৈরি করা
    slide.forEach((_, i)=>{
        const dot = document.createElement('div');
        dot.classList.add('dot');

        if(i === 0) dot.classList.add('active');

        dot.addEventListener('click', ()=> goToSlide(i));

        dotsContainer.appendChild(dot);
    });

    ✔  ব্যাখ্যা:
        1.  forEach দিয়ে প্রতিটি slide এর জন্য dot তৈরি
        2.  i = slide index
        3.  প্রথম dot-এ active class দেওয়া
        4.  dot click করলে goToSlide(i) চালু

    ✔  মানে dot গুলো hard-coded না, dynamically তৈরি।

4.  সব Dot select করা
    const dots = document.querySelectorAll('.dot');

    ✔  পরে active class change করার জন্য লাগবে।

5.  updateDots Function
    function updateDots(){
        dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
    }
    
    ✔  কি হচ্ছে?
        1.  সব dot থেকে active remove
        2.  current index অনুযায়ী active add

    ✔  এটা UI sync রাখে।

6.  goToSlide Function (Main Engine)
    function goToSlide(i){
        index = i;
        slides.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
        resetAutoSlide();
    }
        
    ✔  এইটাই আসল ম্যাজিক
        ধরো index = 2
        তাহলে:
        translateX(-200%)

    ✔  মানে:
            index   move
        1.  0	    0%
        2.  1   	-100%
        3.  2	    -200%

    ✔  Slide width 100% হওয়ায় প্রতি index এ 100% shift হয়।

    তারপর: dot update
    auto slide reset

7.  nextSlide Function
    function nextSlide(){
        index = (index + 1) % slide.length;
        goToSlide(index);
    }

    ✔  এখানে কি হচ্ছে?

    ধরো ৩টা slide: 0 → 1 → 2 → ?

    % slide.length এর কারণে:
        2 + 1 = 3
        3 % 3 = 0

    ✔  মানে আবার শুরুতে চলে যাবে
    ✔  Infinite loop তৈরি হয়ে গেল।

8.  prevSlide Function
    function prevSlide(){
        index = (index - 1 + slide.length) % slide.length;
        goToSlide(index);
    }

    ✔  কেন + slide.length?
        কারণ: 0 - 1 = -1

    Negative হলে সমস্যা হবে।

    তাই: (-1 + 3) % 3 = 2

    ✔  একদম শেষ slide এ চলে যাবে।

9.  Button Event
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    ✔  Button চাপলে function run।

    1.  Auto Slide
        function autoSlide(){
            interval = setInterval(nextSlide, 4000);
        }

    ✔  প্রতি ৪ সেকেন্ডে nextSlide চালু।

10. resetAutoSlide
    function resetAutoSlide(){
        clearInterval(interval);
        autoSlide();
    }

    ✔  কেন এটা দরকার?
        যদি user manually slide change করে, তাহলে timer reset হবে। না হলে ১ সেকেন্ড পরই auto slide আবার চলে যেতো।

11. Auto Slide চালু করা
    autoSlide();
*/