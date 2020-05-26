import SortComponent from '../components/sort.js';
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
  }
}
