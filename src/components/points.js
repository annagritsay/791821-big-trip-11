import AbstractComponent from "./abstract-component.js";

export const createPointsTemplate = (item) => {
  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="img/icons/sightseeing.png" alt="Event type icon">
                    </div>
            <h3 class="event__title">Sightseeing in ${item.town}</h3>
            <div class="event__schedule">
            <p class="event__time">
                <time class="event__start-time" datetime="${item.time}">${item.time}</time>
                &mdash;
                        <time class="event__end-time" datetime="${item.time}">${item.time}</time>
            </p>
            <p class="event__duration">1H 20M</p>
            </div>
            <p class="event__price">
            &euro;&nbsp;<span class="event__price-value">${item.price}</span>
            </p>
            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
            <li class="event__offer">
                <span class="event__offer-title">${item.offer.name}</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">${item.offer.price}</span>
            </li>
            <li class="event__offer">
                <span class="event__offer-title">${item.offer.name}</span>
                &plus;
                            &euro;&nbsp;<span class="event__offer-price">${item.offer.price}</span>
            </li>
            </ul>
            <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
            </button>
        </div>
    </li>`
  );
};
export default class Content extends AbstractComponent {
  constructor(data) {
    super();

    this._data = data;
  }
  getTemplate() {
    return createPointsTemplate(this._data);
  }
}
