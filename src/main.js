import CostAndPriceComponent from './components/siteMain.js';
import MenuComponent from './components/menu.js';
import FilterComponent from './components/filter.js';
import SortComponent from './components/sort.js';
import EventEditComponent from './components/event-edit.js';
import ContentComponent from './components/content.js';
import PointsComponent from './components/points.js';
import {render, RenderPosition} from "./utils.js";
import {menuItems, points, filters} from './components/mocks.js';

const Menu = new MenuComponent(menuItems);
const CostAndPrice = new CostAndPriceComponent(menuItems);
const Filter = new FilterComponent(filters);
const Sort = new SortComponent(menuItems);
const EventEdit = new EventEditComponent(points[0]);
const Content = new ContentComponent(menuItems);

const siteMainElement = document.querySelector(`.trip-main`);
render(siteMainElement, CostAndPrice.getElement(), RenderPosition.AFTERBEGIN);

const tripControlsElement = document.querySelector(`.trip-controls`);
render(tripControlsElement, Filter.getElement(), RenderPosition.BEFOREEND);

const tripEventsElement = document.querySelector(`.trip-events`);
render(tripEventsElement, Sort.getElement(), RenderPosition.AFTERBEGIN);

const siteSortElement = document.querySelector(`.trip-sort`);
render(siteSortElement, EventEdit.getElement(), RenderPosition.AFTERBEGIN);

render(tripEventsElement, Content.getElement(), RenderPosition.BEFOREEND);

const siteListElement = document.querySelector(`.trip-events__list`);
const POINTS_COUNT = 10;
for (let i = 0; i < POINTS_COUNT; i++) {
  const Points = new PointsComponent(points[i]);
  render(siteListElement, Points.getElement(), RenderPosition.BEFOREEND);
}

const siteMenuElement = document.querySelector(`.trip-controls .visually-hidden`);
render(siteMenuElement, Menu.getElement(), RenderPosition.AFTERBEGIN);
