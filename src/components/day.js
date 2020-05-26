import {createElement} from "../utils.js";

const createDayTemplate = () => {
  return (
    `<ul class="trip-events__list">
    </ul>`
  );
};

export default class Day {
  constructor(items) {
    this._data = items;

    this._element = null;
  }

  getTemplate() {
    return createDayTemplate(this._data);
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
