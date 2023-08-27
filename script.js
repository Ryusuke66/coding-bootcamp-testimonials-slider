let prev = document.querySelectorAll(".prev");
let next = document.querySelectorAll(".next");
let firstSlide = document.getElementById("first");
let secondSlide = document.getElementById("second");

prev.forEach(a => a.addEventListener('click', () => {
        if(secondSlide.classList.contains("hidden")) {
            secondSlide.classList.remove('hidden');
            firstSlide.classList.add("hidden");
        } else {
            secondSlide.classList.add("hidden");
            firstSlide.classList.remove('hidden');
        }
    })
)

next.forEach(a => a.addEventListener('click', () => {
    if(secondSlide.classList.contains("hidden")) {
        secondSlide.classList.remove('hidden');
        firstSlide.classList.add("hidden");
    } else {
        secondSlide.classList.add("hidden");
        firstSlide.classList.remove('hidden');
    }
})
)

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        if(secondSlide.classList.contains("hidden")) {
            secondSlide.classList.remove('hidden');
            firstSlide.classList.add("hidden");
        } else {
            secondSlide.classList.add("hidden");
            firstSlide.classList.remove('hidden');
        }
    }
})