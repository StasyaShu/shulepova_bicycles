import {ANCHORS} from './data.js';

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

export {scrollToAnchor};
