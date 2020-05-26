import SortComponent from '../components/sort.js';
import EventEditComponent from '../components/event-edit.js';
import ContentComponent from '../components/content.js';
import GroupDaysComponent from '../components/group-days.js';
import DayComponent from '../components/day.js';
import NoPointsComponent from '../components/nopoints.js';
import PointsComponent from '../components/points.js';
import {render, replace, RenderPosition} from "../utils/render.js";

const POINTS_COUNT = 10;
const Sort = new SortComponent();
const Content = new ContentComponent();
const GroupDays = new GroupDaysComponent();
const Day = new DayComponent();
const NoPoints = new NoPointsComponent();

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

const renderContainer = (contener, data) => {
  if (data.length === 0) {
    render(contener, NoPoints, RenderPosition.AFTERBEGIN);

    return;
  }

  render(contener, Sort, RenderPosition.AFTERBEGIN);
  render(contener, Content, RenderPosition.BEFOREEND);

  const tripDays = document.querySelector(`.trip-days`);
  render(tripDays, GroupDays, RenderPosition.BEFOREEND);

  const day = document.querySelector(`.day`);
  render(day, Day, RenderPosition.BEFOREEND);

  const siteListElement = document.querySelector(`.trip-events__list`);
  for (let i = 0; i < POINTS_COUNT; i++) {
    renderPoint(siteListElement, data[i]);
  }
};

export default class ContentController {
  constructor(container) {

    this._container = container;
  }

  render(data) {

    renderContainer(this._container, data);
  }
}
