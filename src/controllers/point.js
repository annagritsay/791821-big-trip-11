import PointComponent from '../components/points.js';
import EventEditComponent from '../components/event-edit.js';
import {render, replace, RenderPosition} from "../utils/render.js";

export default class PointController {
  constructor(container, onDataChange) {
    this._container = container;

    this._pointComponent = null;
    this._pointEventEditComponent = null;
    this._onDataChange = onDataChange;

    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  render(point) {
    this._pointComponent = new PointComponent(point);
    this._pointEventEditComponent = new EventEditComponent(point);

    this._pointComponent.setEditButtonClickRollup(() => {
      this._replaceTaskToEdit();
      document.addEventListener(`keydown`, this._onEscKeyDown);
    });

    this._pointEventEditComponent.setEditButtonClickSave((evt) => {
      evt.preventDefault();
      this._replaceEditToTask();
    });

    // this._pointComponent.setArchiveButtonClickHandler(() => {
    //   this._onDataChange(this, point, Object.assign({}, point, {
    //     isArchive: !point.isArchive,
    //   }));
    // });

    // this._pointComponent.setFavoritesButtonClickHandler(() => {
    //   this._onDataChange(this, point, Object.assign({}, point, {
    //     isFavorite: !point.isFavorite,
    //   }));
    // });

    render(this._container, this._pointComponent, RenderPosition.BEFOREEND);
  }

  _replaceEditToTask() {
    document.removeEventListener(`keydown`, this._onEscKeyDown);
    replace(this._pointComponent, this._pointEventEditComponent);
  }

  _replaceTaskToEdit() {
    replace(this._pointEventEditComponent, this._pointComponent);
  }

  _onEscKeyDown(evt) {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      this._replaceEditToTask();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    }
  }
}
