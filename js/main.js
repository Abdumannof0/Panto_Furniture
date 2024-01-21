const infoBtns = document.querySelectorAll('.info_dot')
const infoHints = document.querySelectorAll('.info_hint')

for (let btn of infoBtns) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        this.parentNode
            .querySelector('.info_hint')
            .classList.toggle('none')
    }
    )
}

document.addEventListener('click',
    function () {
        for (let hint of infoHints) {
            hint.classList.add('none')

        }
    })


for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation())
}
// SWIPER
const swiper = new Swiper('.swiper', {
    loop: true,
    freeMode: true,

    slidesPerView: 4,
    spaceBetween: 42,

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {

            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {

            slidesPerView: 4,
            spaceBetween: 40,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },
});