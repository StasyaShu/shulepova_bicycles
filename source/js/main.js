const ANCHORS = document.querySelectorAll('a[href*="#"]');
const SITE_NAVIGATION = document.querySelector('.main-nav');
const SITE_NAVIGATION_TOGGLE = document.querySelector('.main-nav__toggle');
const INPUT_NAME = document.getElementById('name-id');
const INPUT_TEL = document.getElementById('tel-id');


const showNav = () => {
  SITE_NAVIGATION_TOGGLE.addEventListener('click', (evt) => {
    evt.preventDefault();
    SITE_NAVIGATION.classList.toggle('main-nav--opened');
    SITE_NAVIGATION.classList.toggle('main-nav--closed');
  });
};

showNav();

const scrollToAnchor = () => {
  for (let anchor of ANCHORS) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
};

scrollToAnchor();


INPUT_NAME.addEventListener('invalid', () => {
  if (INPUT_NAME.validity.tooShort) {
    INPUT_NAME.setCustomValidity('Введите пожалуйста минимум 2 символа');
  } else if (INPUT_NAME.validity.tooLong) {
    INPUT_NAME.setCustomValidity('Значение не должно превышать 25-ти символов');
  } else if (INPUT_NAME.validity.valueMissing) {
    INPUT_NAME.setCustomValidity('Введите пожалуйста Ваше имя');
  } else {
    INPUT_NAME.setCustomValidity('');
  }
});

INPUT_TEL.addEventListener('invalid', () => {
  if (INPUT_TEL.validity.patternMismatch) {
    INPUT_TEL.setCustomValidity('Номер телефона должен быть в формате: +7-ххх-ххх-хх-хх');
  } else if (INPUT_TEL.validity.valueMissing) {
    INPUT_TEL.setCustomValidity('Введите пожалуйста номер телефона');
  } else {
    INPUT_TEL.setCustomValidity('');
  }
});
