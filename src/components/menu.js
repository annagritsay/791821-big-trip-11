import AbstractComponent from "./abstract-component.js";

const createSiteMenuTemplate = (it) => {
  const links = it.reduce((acc, element) => {
    return (
      `${acc}<a class="trip-tabs__btn${element.isActive ? ` trip-tabs__btn--active` : ``}" href="#">${element.name}</a>`
    );
  }, ``);
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">${links}
    </nav>`
  );
};

export default class Menu extends AbstractComponent {
  constructor(data) {
    super();

    this._data = data;
  }
  getTemplate() {
    return createSiteMenuTemplate(this._data);
  }
}
