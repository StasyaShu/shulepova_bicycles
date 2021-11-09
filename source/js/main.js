import {scrollToAnchor} from './scroll.js';
import {showNav} from './mobile-menu.js';
import {DATA_FORM_INPUTS} from './data.js';

scrollToAnchor();
showNav();

DATA_FORM_INPUTS.addEventListener('invalid', function () {
  if (DATA_FORM_INPUTS.validity.tooShort) {
    DATA_FORM_INPUTS.setCustomValidity('Введите пожалуйста минимум 2 символа');
  } else if (DATA_FORM_INPUTS.validity.tooLong) {
    DATA_FORM_INPUTS.setCustomValidity('Значение не должно превышать 25-ти символов');
  } else if (DATA_FORM_INPUTS.validity.valueMissing) {
    DATA_FORM_INPUTS.setCustomValidity('Введите пожалуйста данные');
  } else if (DATA_FORM_INPUTS.patternMismatch) {
    DATA_FORM_INPUTS.setCustomValidity('Номер телефона должен быть формата: +7-ххх-ххх-хх-хх');
  } else {
    DATA_FORM_INPUTS.setCustomValidity('');
  }
});
