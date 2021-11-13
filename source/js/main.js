const anchors = document.querySelectorAll('a[href*="#"]');
const siteNavigation = document.querySelector('.main-nav');
const promo = document.querySelector('.promo__wrapper');
const siteNavigationToggle = document.querySelector('.main-nav__toggle');
const inputName = document.getElementById('name-id');
const inputTel = document.getElementById('tel-id');

const showNav = (() => {
  if (siteNavigation && siteNavigationToggle) {
    siteNavigationToggle.addEventListener('click', (evt) => {
      evt.preventDefault()
      siteNavigation.classList.toggle('main-nav--opened')
      siteNavigation.classList.toggle('main-nav--closed')
    })
  }
  siteNavigation.classList.add('main-nav--nojs')
  promo.classList.add('promo__wrapper--nojs')
})();

const scrollToAnchor = (() => {
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
})();

const validateName = (() => {
  inputName.addEventListener('invalid', () => {
    if (inputName.validity.tooShort) {
      inputName.setCustomValidity('Введите пожалуйста минимум 2 символа');
    } else if (inputName.validity.tooLong) {
      inputName.setCustomValidity('Значение не должно превышать 25-ти символов');
    } else if (inputName.validity.valueMissing) {
      inputName.setCustomValidity('Введите пожалуйста Ваше имя');
    } else if (inputName.validity.patternMismatch) {
      inputName.setCustomValidity('Имя должно состоять из букв русского или английского алфавита');
    } else {
      inputName.setCustomValidity('');
    }
  })
})();

const validateTel = (() => {
  inputTel.addEventListener('invalid', () => {
    if (inputTel.validity.patternMismatch) {
      inputTel.setCustomValidity('Номер телефона должен быть в формате: +7-ххх-ххх-хх-хх');
    } else if (inputTel.validity.valueMissing) {
      inputTel.setCustomValidity('Введите пожалуйста номер телефона');
    } else {
      inputTel.setCustomValidity('');
    }
  })
})();
