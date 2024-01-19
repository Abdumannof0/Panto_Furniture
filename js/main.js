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