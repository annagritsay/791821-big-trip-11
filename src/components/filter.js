import {createElement} from "../utils.js";

const createFilterTemplate = (items) => {
  const filter = items.reduce((acc, element) => {
    return (
      `${acc}
      <div class="trip-filters__filter">
        <input id="filter-${element.name.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${element.name.toLowerCase()}" checked>
        <label class="trip-filters__filter-label" for="filter-${element.name.toLowerCase()}">${element.name}</label>
      </div>`
    );
  }, ``);
  return (
    `<form class="trip-filters" action="#" method="get">
      ${filter}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

export default class Content {
  constructor(items) {
    this._data = items;

    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._data);
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

