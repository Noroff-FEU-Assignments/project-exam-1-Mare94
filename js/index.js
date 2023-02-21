const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__btn--right');
const prevButton = document.querySelector('.carousel__btn--left');
const dotNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// function to arrange the slides next to eachother

const setSlidePos = (slide, index) => {
    slide.style.left = slideWidth * index + '5px';
};

slides.forEach(setSlidePos);


const moveToSlide = (track, currentSlide, targetSlide) => {
    
    track.style.transform = 'translateX(-' + targetSlide.style.left;')';

    //add or remove class
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// moves dot indicator

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// function to hide or show arrow

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}



// when clicked, slide moves to the left

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    const currentDot = dotNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// when clicked slide moves to the right

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    
    const currentDot = dotNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// when nav dots clicked, move to that slide

dotNav.addEventListener('click', e =>{
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
});