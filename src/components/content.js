import AbstractComponent from "./abstract-component.js";

const createAllDaysTemplate = () => {
  return (
    `<ul class="trip-days">
      </ul>`
  );
};

export default class Content extends AbstractComponent {
  getTemplate() {
    return createAllDaysTemplate();
  }
}
