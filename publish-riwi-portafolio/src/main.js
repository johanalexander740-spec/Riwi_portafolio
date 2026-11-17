import logoUrl from '../Images/Logo.png'
import heroUrl from '../Images/Presentacion_potada_Alex_Salseo-100.jpg'
import portraitUrl from '../Images/xd.png'

document.querySelectorAll('[data-logo]').forEach((image) => {
  image.src = logoUrl
})

const hero = document.querySelector('[data-hero-image]')
if (hero) {
  hero.src = heroUrl
}

const portrait = document.querySelector('[data-portrait]')
if (portrait) {
  portrait.src = portraitUrl
}

const menuToggle = document.querySelector('#menu-toggle')
const navigation = document.querySelector('#primary-navigation')

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true'
    menuToggle.setAttribute('aria-expanded', String(!expanded))
    navigation.classList.toggle('hidden', expanded)
    navigation.classList.toggle('flex', !expanded)
  })

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false')
      navigation.classList.add('hidden')
      navigation.classList.remove('flex')
    })
  })
}
