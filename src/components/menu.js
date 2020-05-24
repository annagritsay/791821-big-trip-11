import {render} from './render.js';
import {menuItems} from './mocks.js';

const createSiteMenuTemplate = (items) => {
  const links = items.reduce((acc, element) => {
    return (
      `${acc}<a class="trip-tabs__btn${element.isActive ? ` trip-tabs__btn--active` : ``}" href="#">${element.name}</a>`
    );
  }, ``);
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">${links}
    </nav>`
  );
};

const renderSiteMenuTemplate = () => {
  const siteMenuElement = document.querySelector(`.trip-controls .visually-hidden`);
  render(siteMenuElement, createSiteMenuTemplate(menuItems), `afterend`);
};

export {renderSiteMenuTemplate};
