import {createElement} from "../utils.js";

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

export default class Menu {
  constructor(items) {
    this._data = items;

    this._element = null;
  }

  getTemplate() {
    return createSiteMenuTemplate(this._data);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
