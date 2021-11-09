import {SITE_NAVIGATION, SITE_NAVIGATION_TOGGLE} from './data.js';

const showNav = () => {
  SITE_NAVIGATION_TOGGLE.addEventListener('click', function () {
    evt.preventDefault();
    if(SITE_NAVIGATION.contains('main-nav--closed')) {
      SITE_NAVIGATION.classList.toggle('main-nav--opened');
    }
  });
};

export {showNav};
