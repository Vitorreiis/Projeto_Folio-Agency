const buttonMenu = document.querySelector('.cabecalho-navbar')
const buttonExit = document.querySelector('.exit_menu-lateral')


const menu = document.querySelector('.menu-lateral')
const homeSection = document.querySelector('.home-container')
const rodapeSection = document.querySelector('.rodape')
const designSelect = document.querySelector('.design-container')

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral_ativo')
    homeSection.classList.toggle('home-container_desativado')
    rodapeSection.classList.toggle('rodape_desativado')
})

buttonExit.addEventListener('click', () => {
    menu.classList.remove('menu-lateral_ativo')
    homeSection.classList.remove('home-container_desativado')
    rodapeSection.classList.remove('rodape_desativado')
})