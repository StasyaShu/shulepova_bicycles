import {scrollToAnchor} from './scroll.js';
import {showNav} from './mobile-menu.js';
import {INPUT_NAME, INPUT_TEL} from './data.js';

scrollToAnchor();
showNav();

INPUT_NAME.addEventListener('input', () => {
  if (INPUT_NAME.validity.tooShort) {
    INPUT_NAME.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (INPUT_NAME.validity.tooLong) {
    INPUT_NAME.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (INPUT_NAME.validity.valueMissing) {
    INPUT_NAME.setCustomValidity('Введите пожалуйста Ваше имя');
  } else {
    INPUT_NAME.setCustomValidity('');
  }
});

INPUT_TEL.addEventListener('input', () => {
  if (INPUT_TEL.validity.valueMissing) {
    INPUT_TEL.setCustomValidity('Введите пожалуйста Ваш номер телефона');
  } else if (INPUT_TEL.patternMismatch) {
    INPUT_TEL.setCustomValidity('Номер телефона должен быть формата: +7-ххх-ххх-хх-хх')
  } else {
    INPUT_TEL.setCustomValidity('');
  }
});

