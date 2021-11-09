import {siteNavigation, siteNavigationToggle} from './data.js';

const showNav = () => {
  siteNavigationToggle.addEventListener('click', function () {
    evt.preventDefault();
    if(siteNavigation.contains('main-nav--closed')) {
      siteNavigation.classList.toggle('main-nav--opened');
    }
  });
};

export {showNav};
