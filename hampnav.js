const hampburger= document.getElementsByClassName('toggle-btn')[0]
const navitem= document.getElementsByClassName('navlist')[0]

hampburger.addEventListener('click', () => {
    navitem.classList.toggle('active')
})