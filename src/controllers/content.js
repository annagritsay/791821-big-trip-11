import SortComponent, {SortType} from '../components/sort.js';
import ContentComponent from '../components/content.js';
import GroupDaysComponent from '../components/group-days.js';
import DayComponent from '../components/day.js';
import NoPointsComponent from '../components/nopoints.js';
import PointController from "./point.js";
import {render, RenderPosition} from "../utils/render.js";

const SHOWING_TASKS_COUNT_ON_START = 8;
//const SHOWING_TASKS_COUNT_BY_BUTTON = 8;


const renderPoints = (taskListElement, data, onDataChange) => {
  return data.map((item) => {
    const taskController = new PointController(taskListElement, onDataChange);
    taskController.render(item);

    return taskController;
  });
};

const getSortedPoints = (data, sortType, from, to) => {
  let sortedPoints = [];

  const showingPoints = data.slice();

  switch (sortType) {
    case SortType.TIME:
      sortedPoints = showingPoints.sort((a, b) => a.dueDate - b.dueDate);
      break;
    case SortType.PRICE:
      sortedPoints = showingPoints.sort((a, b) => a.price - b.price);
      break;
    case SortType.EVENT:
      sortedPoints = showingPoints;
      break;
  }
  return sortedPoints.slice(from, to);
};

export default class ContentController {
  constructor(container) {
    this._container = container;
    this._data = [];
    this._showedTaskControllers = [];
    this._showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
    this._noPointsComponent = new NoPointsComponent();
    this._sortComponent = new SortComponent();
    this._Content = new ContentComponent();
    this._GroupDays = new GroupDaysComponent();
    this._Day = new DayComponent();
    this._NoPoints = new NoPointsComponent();

    this._onDataChange = this._onDataChange.bind(this);
    this._onSortTypeChange = this._onSortTypeChange.bind(this);
    this._sortComponent.setSortTypeChangeHandler(this._onSortTypeChange);
  }

  render(data) {

    this._data = data;
    const container = this._container;
    if (data.length === 0) {
      render(container, this._NoPoints, RenderPosition.AFTERBEGIN);

      return;
    }
    render(container, this._sortComponent, RenderPosition.AFTERBEGIN);
    render(container, this._Content, RenderPosition.BEFOREEND);

    const tripDays = document.querySelector(`.trip-days`);
    render(tripDays, this._GroupDays, RenderPosition.BEFOREEND);

    const day = document.querySelector(`.day`);
    render(day, this._Day, RenderPosition.BEFOREEND);
    const siteListElement = document.querySelector(`.trip-events__list`);

    const newTasks = renderPoints(siteListElement, this._data.slice(0, this._showingTasksCount), this._onDataChange);
    this._showedTaskControllers = this._showedTaskControllers.concat(newTasks);
  }
  _onDataChange(taskController, oldData, newData) {
    const index = this._data.findIndex((it) => it === oldData);

    if (index === -1) {
      return;
    }

    this._data = [].concat(this._data.slice(0, index), newData, this._data.slice(index + 1));

    taskController.render(this._data[index]);
  }

  _onSortTypeChange(sortType) {
    this._showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

    const sortedTasks = getSortedPoints(this._data, sortType, 0, this._showingTasksCount);
    const siteListElement = document.querySelector(`.trip-events__list`);
    siteListElement.innerHTML = ``;

    const newTasks = renderPoints(siteListElement, sortedTasks, this._onDataChange);
    this._showedTaskControllers = newTasks;
  }
}
