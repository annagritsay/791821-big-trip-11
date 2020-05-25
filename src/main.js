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
const CostAndPrice = new CostAndPriceComponent();
const Filter = new FilterComponent(filters);
const Sort = new SortComponent();
const Content = new ContentComponent();

const siteMainElement = document.querySelector(`.trip-main`);
render(siteMainElement, CostAndPrice.getElement(), RenderPosition.AFTERBEGIN);

const tripControlsElement = document.querySelector(`.trip-controls`);
render(tripControlsElement, Filter.getElement(), RenderPosition.BEFOREEND);

const tripEventsElement = document.querySelector(`.trip-events`);
render(tripEventsElement, Sort.getElement(), RenderPosition.AFTERBEGIN);

render(tripEventsElement, Content.getElement(), RenderPosition.BEFOREEND);

const siteMenuElement = document.querySelector(`.trip-controls .visually-hidden`);
render(siteMenuElement, Menu.getElement(), RenderPosition.AFTERBEGIN);

const renderPoint = (list, point) => {
  const onEditButtonClick = () => {
    list.replaceChild(EventEdit.getElement(), Points.getElement());
  };

  const onEditFormSubmit = (evt) => {
    evt.preventDefault();
    list.replaceChild(Points.getElement(), EventEdit.getElement());
  };

  const Points = new PointsComponent(point);
  const editButton = Points.getElement().querySelector(`.event__rollup-btn`);
  editButton.addEventListener(`click`, onEditButtonClick);

  const EventEdit = new EventEditComponent(point);
  const editForm = EventEdit.getElement().querySelector(`.event__save-btn`);
  editForm.addEventListener(`click`, onEditFormSubmit);

  render(list, Points.getElement(), RenderPosition.BEFOREEND);
};
const siteListElement = document.querySelector(`.trip-events__list`);
const POINTS_COUNT = 10;
for (let i = 0; i < POINTS_COUNT; i++) {
  renderPoint(siteListElement, points[i]);
}
