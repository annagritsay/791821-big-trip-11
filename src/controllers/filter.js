import FilterComponent from "../components/filter.js";
import {FilterType} from "../components/mocks.js";
import {render, replace, RenderPosition} from "../utils/render.js";
import {getTasksByFilter} from "../utils/filter.js";

export default class FilterController {
  constructor(container, tasksModel) {
    this._container = container;
    this._tasksModel = tasksModel;

    this._activeFilterType = FilterType.ALL;
    this._filterComponent = null;

    this._onDataChange = this._onDataChange.bind(this);
    this._onFilterChange = this._onFilterChange.bind(this);

    this._tasksModel.setDataChangeHandler(this._onDataChange);
  }

  render() {
    const container = this._container;
    const allTasks = this._tasksModel.getTasks();
    const filter = Object.values(FilterType).map((item) => {
      return {
        name: item,
        count: getTasksByFilter(allTasks, item).length,
        checked: item === this._activeFilterType,
      };
    });
    const oldComponent = this._filterComponent;

    this._filterComponent = new FilterComponent(filter);
    this._filterComponent.setFilterChangeHandler(this._onFilterChange);

    if (oldComponent) {
      replace(this._filterComponent, oldComponent);
    } else {
      render(container, this._filterComponent, RenderPosition.BEFOREEND);
    }
  }

  _onFilterChange(filterType) {
    this._tasksModel.setFilter(filterType);
    this._activeFilterType = filterType;
  }

  _onDataChange() {
    this.render();
  }
}
