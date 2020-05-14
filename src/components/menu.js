import {render} from './render.js';

const createSiteMenuTemplate = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>`
  );
};

const renderSiteMenuTemplate = () => {
  const siteMenuElement = document.querySelector(`.trip-controls .visually-hidden`);
  render(siteMenuElement, createSiteMenuTemplate(), `afterend`);
};

export {renderSiteMenuTemplate};
