/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/content.js":
/*!***********************************!*\
  !*** ./src/components/content.js ***!
  \***********************************/
/*! exports provided: renderContentTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderContentTemplate", function() { return renderContentTemplate; });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/components/render.js");


const createContentTemplate = () => {
  return (
    `<ul class="trip-days">
        <li class="trip-days__item  day">
          <div class="day__info">
            <span class="day__counter">1</span>
            <time class="day__date" datetime="2019-03-18">MAR 18</time>
          </div>
          <ul class="trip-events__list">
          </ul>
        </li>
      </ul>`
  );
};

const renderContentTemplate = () => {
  const tripEventsElement = document.querySelector(`.trip-events`);
  Object(_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(tripEventsElement, createContentTemplate(), `beforeend`);
};




/***/ }),

/***/ "./src/components/event-edit.js":
/*!**************************************!*\
  !*** ./src/components/event-edit.js ***!
  \**************************************/
/*! exports provided: createEventEditTemplate, renderEventEditTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventEditTemplate", function() { return createEventEditTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderEventEditTemplate", function() { return renderEventEditTemplate; });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/components/render.js");
/* harmony import */ var _mocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mocks.js */ "./src/components/mocks.js");



const createEventEditTemplate = (item) => {
  return (
    `<form class="trip-events__item  event  event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Transfer</legend>
              <div class="event__type-item">
                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">
                <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
              </div>
            </fieldset>
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Activity</legend>
              <div class="event__type-item">
                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
              </div>
            </fieldset>
          </div>
        </div>
        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            Flight to
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
          <datalist id="destination-list-1">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="Chamonix"></option>
            <option value="Saint Petersburg"></option>
          </datalist>
        </div>
        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">
            From
          </label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 00:00">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">
            To
          </label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 00:00">
        </div>
        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
        </div>
        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          <div class="event__available-offers">
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
              <label class="event__offer-label" for="event-offer-luggage-1">
                <span class="event__offer-title">Add luggage</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">30</span>
              </label>
            </div>
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>
              <label class="event__offer-label" for="event-offer-comfort-1">
                <span class="event__offer-title">Switch to comfort class</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">100</span>
              </label>
            </div>
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">
              <label class="event__offer-label" for="event-offer-meal-1">
                <span class="event__offer-title">Add meal</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">15</span>
              </label>
            </div>
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">
              <label class="event__offer-label" for="event-offer-seats-1">
                <span class="event__offer-title">Choose seats</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">5</span>
              </label>
            </div>
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
              <label class="event__offer-label" for="event-offer-train-1">
                <span class="event__offer-title">Travel by train</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">${item.price}</span>
              </label>
            </div>
          </div>
        </section>
        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>
          <div class="event__photos-container">
            <div class="event__photos-tape">
              <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">
              <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">
              <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">
              <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">
              <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">
            </div>
          </div>
        </section>
      </section>
    </form>`
  );
};

const renderEventEditTemplate = () => {
  const siteMainElement = document.querySelector(`.trip-main`);
  Object(_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, createEventEditTemplate(_mocks_js__WEBPACK_IMPORTED_MODULE_1__["points"][0]), `afterbegin`);
};




/***/ }),

/***/ "./src/components/filter.js":
/*!**********************************!*\
  !*** ./src/components/filter.js ***!
  \**********************************/
/*! exports provided: renderFilterTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFilterTemplate", function() { return renderFilterTemplate; });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/components/render.js");
/* harmony import */ var _mocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mocks.js */ "./src/components/mocks.js");



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

const renderFilterTemplate = () => {
  const tripControlsElement = document.querySelector(`.trip-controls`);
  Object(_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(tripControlsElement, createFilterTemplate(_mocks_js__WEBPACK_IMPORTED_MODULE_1__["filters"]), `beforeend`);
};




/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


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

class Menu {
  constructor(items) {
    this._data = items;

    this._element = null;
  }

  getTemplate() {
    return createSiteMenuTemplate(this._data);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/mocks.js":
/*!*********************************!*\
  !*** ./src/components/mocks.js ***!
  \*********************************/
/*! exports provided: points, menuItems, filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "points", function() { return points; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItems", function() { return menuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const months = [
  `Jan`,
  `Feb`,
  `Mar`,
  `Apr`,
  `May`,
  `Jun`,
  `Jul`,
  `Aug`,
  `Sep`,
  `Oct`,
  `Nov`,
  `Dec`
];
const getDate = () => {
  const day = getRandomNumber(1, 30);
  const year = getRandomNumber(2020, 2021);
  const month = months[getRandomNumber(1, 12)];
  return `${year}-${month}-${day}`;
};
const getTime = () => {
  const hours = getRandomNumber(1, 24);
  const minutes = getRandomNumber(1, 60);
  return `${hours}:${minutes}`;
};
let pictures = [];
const getPictures = () => {
  for (let i = 1; i < getRandomNumber(1, 5); i++) {
    pictures.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
};
const descriptionsVariables = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`
];
let descriptions = [];
const getDescriptions = () => {
  for (let i = 1; i < getRandomNumber(1, 5); i++) {
    descriptions.push(descriptionsVariables[getRandomNumber(0, 9)]);
  }
};

const MAX_PRICE = 500;
const types = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`];
const offers = [
  {
    name: `Add luggage`,
    price: 10,
    checked: true
  },
  {
    name: `Switch to comfort class`,
    price: 150,
    checked: true
  },
  {
    name: `Add meal`,
    price: 2,
    checked: true
  },
  {
    name: `Choose seats`,
    price: 9,
    checked: true
  },
  {
    name: `Order Uber`,
    price: 30,
    checked: true
  },
  {
    name: `Book tickets`,
    price: 40,
    checked: true
  }
];
const citys = [`Москва`, `Питер`, `Сочи`];
const generatePoint = () => {
  return {
    type: types[getRandomNumber(0, types.length - 1)],
    town: citys[getRandomNumber(0, citys.length - 1)],
    offer: offers[getRandomNumber(0, offers.length - 1)],
    description: getDescriptions(),
    pictures: getPictures(),
    price: getRandomNumber(0, MAX_PRICE),
    day: getDate(),
    time: getTime(),
  };
};
const generatePoints = (count) => {
  let pointsElements = [];
  for (let i = 0; i < count; i++) {
    pointsElements.push(generatePoint());
  }

  return pointsElements;
};
const CARDS_COUNT = 12;
const points = generatePoints(CARDS_COUNT);
const menuItems = [
  {
    name: `Table`,
    isActive: true
  },
  {
    name: `Stats`,
    isActive: false
  }
];
const filters = [
  {
    name: `Everything`,
  },
  {
    name: `Future`,
  },
  {
    name: `Past`,
  },
];



/***/ }),

/***/ "./src/components/points.js":
/*!**********************************!*\
  !*** ./src/components/points.js ***!
  \**********************************/
/*! exports provided: createPointsTemplate, renderPointsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPointsTemplate", function() { return createPointsTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPointsTemplate", function() { return renderPointsTemplate; });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/components/render.js");
/* harmony import */ var _mocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mocks.js */ "./src/components/mocks.js");



const createPointsTemplate = (item) => {
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
const POINTS_COUNT = 10;
const renderPointsTemplate = () => {
  const siteListElement = document.querySelector(`.trip-events__list`);
  for (let i = 0; i < POINTS_COUNT; i++) {
    Object(_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteListElement, createPointsTemplate(_mocks_js__WEBPACK_IMPORTED_MODULE_1__["points"][i]), `beforeend`);
  }
};






/***/ }),

/***/ "./src/components/render.js":
/*!**********************************!*\
  !*** ./src/components/render.js ***!
  \**********************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};




/***/ }),

/***/ "./src/components/siteMain.js":
/*!************************************!*\
  !*** ./src/components/siteMain.js ***!
  \************************************/
/*! exports provided: renderCostAndPriceTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCostAndPriceTemplate", function() { return renderCostAndPriceTemplate; });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/components/render.js");


const createCostAndPriceTemplate = () => {
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

        <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
      </div>

      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    </section>`
  );
};

const renderCostAndPriceTemplate = () => {
  const siteMainElement = document.querySelector(`.trip-main`);
  Object(_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, createCostAndPriceTemplate(), `afterbegin`);
};




/***/ }),

/***/ "./src/components/sort.js":
/*!********************************!*\
  !*** ./src/components/sort.js ***!
  \********************************/
/*! exports provided: renderSortTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSortTemplate", function() { return renderSortTemplate; });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/components/render.js");


const createSortTemplate = () => {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <span class="trip-sort__item  trip-sort__item--day">Day</span>

      <div class="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" checked>
        <label class="trip-sort__btn" for="sort-event">Event</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--time">
        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
        <label class="trip-sort__btn" for="sort-time">
          Time
          <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
            <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
          </svg>
        </label>
      </div>

      <div class="trip-sort__item  trip-sort__item--price">
        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
        <label class="trip-sort__btn" for="sort-price">
          Price
          <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
            <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
          </svg>
        </label>
      </div>

      <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
    </form>`
  );
};

const renderSortTemplate = () => {
  const tripEventsElement = document.querySelector(`.trip-events`);
  Object(_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(tripEventsElement, createSortTemplate(), `beforeend`);
};




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_siteMain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/siteMain.js */ "./src/components/siteMain.js");
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu.js */ "./src/components/menu.js");
/* harmony import */ var _components_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filter.js */ "./src/components/filter.js");
/* harmony import */ var _components_sort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sort.js */ "./src/components/sort.js");
/* harmony import */ var _components_event_edit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/event-edit.js */ "./src/components/event-edit.js");
/* harmony import */ var _components_content_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/content.js */ "./src/components/content.js");
/* harmony import */ var _components_points_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/points.js */ "./src/components/points.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _components_mocks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mocks.js */ "./src/components/mocks.js");










Object(_components_siteMain_js__WEBPACK_IMPORTED_MODULE_0__["renderCostAndPriceTemplate"])();
Object(_components_filter_js__WEBPACK_IMPORTED_MODULE_2__["renderFilterTemplate"])();
Object(_components_sort_js__WEBPACK_IMPORTED_MODULE_3__["renderSortTemplate"])();
Object(_components_event_edit_js__WEBPACK_IMPORTED_MODULE_4__["renderEventEditTemplate"])();
Object(_components_content_js__WEBPACK_IMPORTED_MODULE_5__["renderContentTemplate"])();
Object(_components_points_js__WEBPACK_IMPORTED_MODULE_6__["renderPointsTemplate"])();

const Menu = new _components_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"](_components_mocks_js__WEBPACK_IMPORTED_MODULE_8__["menuItems"]);
const siteMenuElement = document.querySelector(`.trip-controls .visually-hidden`);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["render"])(siteMenuElement, Menu.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].AFTERBEGIN);



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: createElement, RenderPosition, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};
const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};
const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map