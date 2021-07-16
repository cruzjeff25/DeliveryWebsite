function toggleMenu(){
    const menu = document.querySelector('.nav_bar')
    menu.classList.toggle('active')
}

function nightMode(){
    const mode = document.querySelector('.container')
    mode.classList.toggle('nightmode')
}

function signUp(){
    const sign = document.querySelector('.modal_container')
    sign.classList.toggle('show')
}

function standard(){
    let book = document.querySelector('.standard_container')
    book.classList.toggle('show')
}

function premium(){
    const book = document.querySelector('.premium_container')
    book.classList.toggle('show')
}