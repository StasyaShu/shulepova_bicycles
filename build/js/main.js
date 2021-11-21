const loadWindow = (() => {
  const mainNav = document.querySelector('.main-nav');
  const promo = document.querySelector('.promo__wrapper');
  return {
    removeNojs: () => {
      mainNav.classList.remove('main-nav--nojs');
      promo.classList.remove('promo__wrapper--nojs');
    }
  }
})()
window.addEventListener('load', loadWindow.removeNojs());

const handleMobileMenu = (() => {
  const siteNavigation = document.querySelector('.main-nav');
  const siteNavigationToggle = document.querySelector('.main-nav__toggle');
  const body = document.querySelector('body');

  return {
    showNav: () => {
      if (siteNavigationToggle) {
        siteNavigationToggle.classList.remove('main-nav__toggle--hidden');
        siteNavigation.classList.add('main-nav--closed');

        siteNavigationToggle.addEventListener('click', (evt) => {
          evt.preventDefault();
          siteNavigation.classList.toggle('main-nav--opened');
          body.style.overflow = 'hidden';
          siteNavigation.classList.toggle('main-nav--closed');
          body.style.overflow = 'scroll';
        })
      }
    },
    clickNavLink: () => {
      const siteNavigation = document.querySelector('.main-nav');
      const siteNavigationList = siteNavigation.querySelector('ul');
      const siteNavigationItems = siteNavigationList.children;


      for (const item of siteNavigationItems) {
        item.addEventListener('click', () => {
          siteNavigation.classList.remove('main-nav--opened');
          siteNavigation.classList.add('main-nav--closed');
          body.style.overflow = 'scroll';
        })
      }
    }
  }
})()

handleMobileMenu.showNav();
handleMobileMenu.clickNavLink();



(function scrollToAnchor() {
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1);

      if (document.getElementById(blockID)) {
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  }
})();

(function validateName() {
  const inputName = document.getElementById('name-id');
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

(function validateTel() {
  const inputTel = document.getElementById('tel-id');
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
