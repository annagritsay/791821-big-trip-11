import SortComponent, {SortType} from '../components/sort.js';
import ContentComponent from '../components/content.js';
import GroupDaysComponent from '../components/group-days.js';
import DayComponent from '../components/day.js';
import NoPointsComponent from '../components/nopoints.js';
import PointController from "./point.js";
import {render, RenderPosition} from "../utils/render.js";

const SHOWING_TASKS_COUNT_ON_START = 8;

// const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderPoints = (taskListElement, data, onDataChange, onViewChange) => {
  return data.map((item) => {
    const taskController = new PointController(taskListElement, onDataChange, onViewChange);
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
  constructor(container, tasksModel) {
    this._container = container;
    this._tasksModel = tasksModel;

    this._showedTaskControllers = [];
    this._showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
    this._noPointsComponent = new NoPointsComponent();
    this._sortComponent = new SortComponent();
    this._Content = new ContentComponent();
    this._GroupDays = new GroupDaysComponent();
    this._Day = new DayComponent();
    this._NoPoints = new NoPointsComponent();
    this._onViewChange = this._onViewChange.bind(this);
    this._onFilterChange = this._onFilterChange.bind(this);

    this._onDataChange = this._onDataChange.bind(this);
    this._onSortTypeChange = this._onSortTypeChange.bind(this);
    this._sortComponent.setSortTypeChangeHandler(this._onSortTypeChange);
    //this._tasksModel.setFilterChangeHandler(this._onFilterChange);
  }

  render() {
    const data = this._tasksModel.getTasks();
    // const isAllTasksArchived = data.every((item) => item.isArchive);
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
    this._renderPoints(data.slice(0, this._showingTasksCount));
  }

  _removeTasks() {
    this._showedTaskControllers.forEach((taskController) => taskController.destroy());
    this._showedTaskControllers = [];
  }

  _renderPoints(data) {
    const siteListElement = document.querySelector(`.trip-events__list`);

    const newTasks = renderPoints(siteListElement, data, this._onDataChange, this._onViewChange);
    this._showedTaskControllers = this._showedTaskControllers.concat(newTasks);
    this._showingTasksCount = this._showedTaskControllers.length;
  }

  _updateTasks(count) {
    this._removeTasks();
    this._renderPoints(this._tasksModel.getTasks().slice(0, count));
  }
  _onDataChange(taskController, oldData, newData) {
    const isSuccess = this._tasksModel.updateTask(oldData.id, newData);

    if (isSuccess) {
      taskController.render(newData);
    }
  }

  _onViewChange() {
    this._showedTaskControllers.forEach((it) => it.setDefaultView());
  }

  _onFilterChange() {
    this._updateTasks(SHOWING_TASKS_COUNT_ON_START);
  }

  _onSortTypeChange(sortType) {
    this._showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
    const sortedTasks = getSortedPoints(this._tasksModel.getTasks(), sortType, 0, this._showingTasksCount);

    const siteListElement = document.querySelector(`.trip-events__list`);
    siteListElement.innerHTML = ``;

    const newTasks = renderPoints(siteListElement, sortedTasks, this._onDataChange, this._onViewChange);
    this._showedTaskControllers = newTasks;
  }
}
