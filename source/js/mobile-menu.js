import {SITE_NAVIGATION, SITE_NAVIGATION_TOGGLE} from './data.js';

const showNav = () => {
  SITE_NAVIGATION_TOGGLE.addEventListener('click', (evt) => {
    evt.preventDefault();
      SITE_NAVIGATION.classList.toggle('main-nav--opened');
      SITE_NAVIGATION.classList.toggle('main-nav--closed');
  });
};

export {showNav};
