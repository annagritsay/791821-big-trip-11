import CostAndPriceComponent from './components/siteMain.js';
import MenuComponent from './components/menu.js';
import FilterComponent from './components/filter.js';
import SortComponent from './components/sort.js';
import EventEditComponent from './components/event-edit.js';
import ContentComponent from './components/content.js';
import GroupDaysComponent from './components/groupDays.js';
import DayComponent from './components/day.js';
import NoPointsComponent from './components/nopoints.js';
import PointsComponent from './components/points.js';
import {render, RenderPosition} from "./utils.js";
import {menuItems, points, filters} from './components/mocks.js';

const POINTS_COUNT = 10;

const Menu = new MenuComponent(menuItems);
const CostAndPrice = new CostAndPriceComponent();
const Filter = new FilterComponent(filters);
const Sort = new SortComponent();
const Content = new ContentComponent();
const GroupDays = new GroupDaysComponent();
const Day = new DayComponent();
const NoPoints = new NoPointsComponent();

const siteMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = document.querySelector(`.trip-controls`);
const siteMenuElement = document.querySelector(`.trip-controls .visually-hidden`);

render(siteMainElement, CostAndPrice.getElement(), RenderPosition.AFTERBEGIN);
render(tripControlsElement, Filter.getElement(), RenderPosition.BEFOREEND);
render(siteMenuElement, Menu.getElement(), RenderPosition.AFTERBEGIN);

const renderPoint = (list, point) => {
  const replaceTaskToEdit = () => {
    list.replaceChild(EventEdit.getElement(), Points.getElement());
  };

  const replaceEditToTask = () => {
    list.replaceChild(Points.getElement(), EventEdit.getElement());
  };

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      replaceEditToTask();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const Points = new PointsComponent(point);
  const editButton = Points.getElement().querySelector(`.event__rollup-btn`);
  editButton.addEventListener(`click`, () => {
    replaceTaskToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const EventEdit = new EventEditComponent(point);
  const editForm = EventEdit.getElement().querySelector(`.event__save-btn`);
  editForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceEditToTask();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  render(list, Points.getElement(), RenderPosition.BEFOREEND);
};

const tripEventsElement = document.querySelector(`.trip-events`);

const renderContainer = () => {

  if (points.length === 0) {
    render(tripEventsElement, NoPoints.getElement(), RenderPosition.AFTERBEGIN);

    return;
  }

  render(tripEventsElement, Sort.getElement(), RenderPosition.AFTERBEGIN);
  render(tripEventsElement, Content.getElement(), RenderPosition.BEFOREEND);

  const tripDays = document.querySelector(`.trip-days`);
  render(tripDays, GroupDays.getElement(), RenderPosition.BEFOREEND);

  const day = document.querySelector(`.day`);
  render(day, Day.getElement(), RenderPosition.BEFOREEND);

  const siteListElement = document.querySelector(`.trip-events__list`);
  for (let i = 0; i < POINTS_COUNT; i++) {
    renderPoint(siteListElement, points[i]);
  }
};
renderContainer();
