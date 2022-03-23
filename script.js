function imageSlider(anything) {
    document.querySelector('.slider').src = anything;
}

function changeBgColor(color) {
    const backgColor = document.querySelector('.circle')
    backgColor.style.background = color;
}

const menu = document.getElementsByClassName('menu-icon')[0]
const navbar = document.getElementsByClassName('navbar')[0]

menu.addEventListener('click', ()=> {
    menu.classList.toggle('menu-icon-active')
    navbar.classList.toggle('navbar-active')
})