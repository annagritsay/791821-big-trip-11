import PointComponent from '../components/points.js';
import EventEditComponent from '../components/event-edit.js';
import {render, replace, RenderPosition} from "../utils/render.js";
const Mode = {
  DEFAULT: `default`,
  EDIT: `edit`,
};
export default class PointController {
  constructor(container, onDataChange, onViewChange) {
    this._container = container;
    this._onViewChange = onViewChange;
    this._mode = Mode.DEFAULT;
    this._pointComponent = null;
    this._pointEventEditComponent = null;
    this._onDataChange = onDataChange;

    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  render(point) {
    const oldPointComponent = this._pointComponent;
    const oldPointEditComponent = this._pointEventEditComponent;
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
    if (oldPointEditComponent && oldPointComponent) {
      replace(this._pointComponent, oldPointComponent);
      replace(this._pointEventEditComponent, oldPointEditComponent);
    } else {
      render(this._container, this._pointComponent, RenderPosition.BEFOREEND);
    }
  }

  setDefaultView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceEditToTask();
    }
  }

  _replaceEditToTask() {
    document.removeEventListener(`keydown`, this._onEscKeyDown);
    this._pointEventEditComponent.reset();
    replace(this._pointComponent, this._pointEventEditComponent);
    this._mode = Mode.DEFAULT;
  }

  _replaceTaskToEdit() {
    this._onViewChange();
    replace(this._pointEventEditComponent, this._pointComponent);
    this._mode = Mode.EDIT;
  }

  _onEscKeyDown(evt) {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      this._replaceEditToTask();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    }
  }
}
