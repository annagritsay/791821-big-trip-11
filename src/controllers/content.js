import SortComponent, {SortType} from '../components/sort.js';
import EventEditComponent from '../components/event-edit.js';
import ContentComponent from '../components/content.js';
import GroupDaysComponent from '../components/group-days.js';
import DayComponent from '../components/day.js';
import NoPointsComponent from '../components/nopoints.js';
import PointsComponent from '../components/points.js';
import {render, replace, RenderPosition} from "../utils/render.js";

const POINTS_COUNT = 10;


const renderPoint = (list, point) => {
  const replaceTaskToEdit = () => {
    replace(EventEdit, Points);
  };

  const replaceEditToTask = () => {
    replace(Points, EventEdit);
  };

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      replaceEditToTask();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };
  const Points = new PointsComponent(point);
  Points.setEditButtonClickRollup(() => {
    replaceTaskToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const EventEdit = new EventEditComponent(point);
  EventEdit.setEditButtonClickSave((evt) => {
    evt.preventDefault();
    replaceEditToTask();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  render(list, Points, RenderPosition.BEFOREEND);
};

const getSortedTasks = (tasks, sortType, from, to) => {
  let sortedTasks = [];
  const showingTasks = tasks.slice();

  switch (sortType) {
    case SortType.TIME:
      sortedTasks = showingTasks.sort((a, b) => a.dueDate - b.dueDate);
      break;
    case SortType.PRICE:
      sortedTasks = showingTasks.sort((a, b) => b.dueDate - a.dueDate);
      break;
    case SortType.EVENT:
      sortedTasks = showingTasks;
      break;
  }

  return sortedTasks.slice(from, to);
};

export default class ContentController {
  constructor(container) {
    this._container = container;

    this._Sort = new SortComponent();
    this._Content = new ContentComponent();
    this._GroupDays = new GroupDaysComponent();
    this._Day = new DayComponent();
    this._NoPoints = new NoPointsComponent();
  }

  render(data) {

    const container = this._container;
    if (data.length === 0) {
      render(container, this._NoPoints, RenderPosition.AFTERBEGIN);

      return;
    }
    render(container, this._Sort, RenderPosition.AFTERBEGIN);
    render(container, this._Content, RenderPosition.BEFOREEND);

    const tripDays = document.querySelector(`.trip-days`);
    render(tripDays, this._GroupDays, RenderPosition.BEFOREEND);

    const day = document.querySelector(`.day`);
    render(day, this._Day, RenderPosition.BEFOREEND);

    const siteListElement = document.querySelector(`.trip-events__list`);
    for (let i = 0; i < POINTS_COUNT; i++) {
      renderPoint(siteListElement, data[i]);
    }

    this._Sort.setSortTypeChangeHandler((sortType) => {
      const sortedTasks = getSortedTasks(data, sortType, 0, POINTS_COUNT);
      siteListElement.innerHTML = ``;
      sortedTasks.slice(0, POINTS_COUNT);
      for (let i = 0; i < POINTS_COUNT; i++) {
        renderPoint(siteListElement, data[i]);
      }
    });
  }

}
