import AbstractComponent from "./abstract-component.js";

const createGroupDaysTemplate = () => {
  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">1</span>
        <time class="day__date" datetime="2019-03-18">MAR 18</time>
      </div>
    </li>`
  );
};

export default class GroupDays extends AbstractComponent {
  constructor(filters) {
    super();

    this._filters = filters;
  }
  getTemplate() {
    return createGroupDaysTemplate();
  }
}
