const openBtnModals = document.querySelectorAll('.btn-grad')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeBtnModals = document.querySelector('.close')

const toggle = function () {
    overlay.classList.toggle('hidden')
    modal.classList.toggle('hidden')

}
for (let i = 0; i < openBtnModals.length; i++) {
    openBtnModals[i].addEventListener('click', toggle)

}

closeBtnModals.addEventListener('click', toggle)
overlay.addEventListener('click', toggle)

document.addEventListener('keydown', function (e) {
    console.log(e.key)
    if (e.key === "Escape") {
        if (!modal.classList.contains('hidden')) {
            toggle()
        }
    }
})