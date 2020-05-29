import CostAndPriceComponent from './components/site-main.js';
import MenuComponent from './components/menu.js';
import FilterComponent from './components/filter.js';
import {render, RenderPosition} from "./utils/render.js";
import {points, menuItems, FilterType} from './components/mocks.js';
import ContentController from "./controllers/content.js";
import TasksModel from "./models/task.js";

const tasksModel = new TasksModel();
tasksModel.setTasks(points);
const tripEventsElement = document.querySelector(`.trip-events`);
const Menu = new MenuComponent(menuItems);
const CostAndPrice = new CostAndPriceComponent();
const Filter = new FilterComponent(FilterType);
const Content = new ContentController(tripEventsElement, tasksModel);

const siteMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = document.querySelector(`.trip-controls`);
const siteMenuElement = document.querySelector(`.trip-controls .visually-hidden`);

render(siteMainElement, CostAndPrice, RenderPosition.AFTERBEGIN);
render(tripControlsElement, Filter, RenderPosition.BEFOREEND);
render(siteMenuElement, Menu, RenderPosition.AFTERBEGIN);

Content.render(points);
