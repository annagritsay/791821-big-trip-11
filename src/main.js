import {renderCostAndPriceTemplate} from './components/siteMain.js';
import MenuComponent from './components/menu.js';
import {renderFilterTemplate} from './components/filter.js';
import {renderSortTemplate} from './components/sort.js';
import {renderEventEditTemplate} from './components/event-edit.js';
import {renderContentTemplate} from './components/content.js';
import {renderPointsTemplate} from './components/points.js';
import {render, RenderPosition} from "./utils.js";
import {menuItems} from './components/mocks.js';

renderCostAndPriceTemplate();
renderFilterTemplate();
renderSortTemplate();
renderEventEditTemplate();
renderContentTemplate();
renderPointsTemplate();

const Menu = new MenuComponent(menuItems);
const siteMenuElement = document.querySelector(`.trip-controls .visually-hidden`);
render(siteMenuElement, Menu.getElement(), RenderPosition.AFTERBEGIN);

