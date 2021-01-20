const showMenu = (toggleId, navaId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navaId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/* const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr..reveal('.home_home__img', { delay: 100 })
sr.reveal('.home__social-icon', { delay: 200 })
sr.reveal('.home__title', { 300})
sr.reveal('.button', { delay: 400 })


sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', { delay: 200 })
sr.reveal('.about__text', { delay: 400 })

sr.reveal('.contact__input', { interval: 200 }) */