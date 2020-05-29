export default class Points {
  constructor() {
    this._data = [];

    this._dataChangeHandlers = [];
  }

  getTasks() {
    return this._data;
  }

  setTasks(tasks) {
    this._data = Array.from(tasks);
    this._callHandlers(this._dataChangeHandlers);
  }

  updateTask(id, task) {
    const index = this._data.findIndex((it) => it.id === id);

    if (index === -1) {
      return false;
    }

    this._data = [].concat(this._data.slice(0, index), task, this._data.slice(index + 1));

    this._callHandlers(this._dataChangeHandlers);

    return true;
  }

  setDataChangeHandler(handler) {
    this._dataChangeHandlers.push(handler);
  }

  _callHandlers(handlers) {
    handlers.forEach((handler) => handler());
  }
}
