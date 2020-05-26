import {createElement} from "../utils.js";

const createAllDaysTemplate = () => {
  return (
    `<ul class="trip-days">
      </ul>`
  );
};

export default class AllDays {
  constructor(items) {
    this._data = items;

    this._element = null;
  }

  getTemplate() {
    return createAllDaysTemplate(this._data);
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
