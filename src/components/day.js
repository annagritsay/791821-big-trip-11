import AbstractComponent from "./abstract-component.js";

const createDayTemplate = () => {
  return (
    `<ul class="trip-events__list">
    </ul>`
  );
};

export default class Day extends AbstractComponent {
  getTemplate() {
    return createDayTemplate();
  }
}
