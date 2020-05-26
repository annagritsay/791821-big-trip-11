import CostAndPriceComponent from './components/site-main.js';
import MenuComponent from './components/menu.js';
import FilterComponent from './components/filter.js';
import {render, RenderPosition} from "./utils/render.js";
import {points, menuItems, filters} from './components/mocks.js';
import ContentController from "./controllers/content.js";

const tripEventsElement = document.querySelector(`.trip-events`);
const Menu = new MenuComponent(menuItems);
const CostAndPrice = new CostAndPriceComponent();
const Filter = new FilterComponent(filters);
const Content = new ContentController(tripEventsElement);


const siteMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = document.querySelector(`.trip-controls`);
const siteMenuElement = document.querySelector(`.trip-controls .visually-hidden`);

render(siteMainElement, CostAndPrice, RenderPosition.AFTERBEGIN);
render(tripControlsElement, Filter, RenderPosition.BEFOREEND);
render(siteMenuElement, Menu, RenderPosition.AFTERBEGIN);
Content.render(points);
