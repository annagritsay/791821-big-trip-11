const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};
const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 8);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};
const DefaultRepeatingDays = {
  "mo": false,
  "tu": false,
  "we": false,
  "th": false,
  "fr": false,
  "sa": false,
  "su": false,
};
const months = [
  `Jan`,
  `Feb`,
  `Mar`,
  `Apr`,
  `May`,
  `Jun`,
  `Jul`,
  `Aug`,
  `Sep`,
  `Oct`,
  `Nov`,
  `Dec`
];
const getDate = () => {
  const day = getRandomNumber(1, 30);
  const year = getRandomNumber(2020, 2021);
  const month = months[getRandomNumber(1, 12)];
  return `${year}-${month}-${day}`;
};
const getTime = () => {
  const hours = getRandomNumber(1, 24);
  const minutes = getRandomNumber(1, 60);
  return `${hours}:${minutes}`;
};
let pictures = [];
const getPictures = () => {
  for (let i = 1; i < getRandomNumber(1, 5); i++) {
    pictures.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
};
const descriptionsVariables = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`
];
let descriptions = [];
const getDescriptions = () => {
  for (let i = 1; i < getRandomNumber(1, 5); i++) {
    descriptions.push(descriptionsVariables[getRandomNumber(0, 9)]);
  }
};

const MAX_PRICE = 500;
const types = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`];
const offers = [
  {
    name: `Add luggage`,
    price: 10,
    checked: true
  },
  {
    name: `Switch to comfort class`,
    price: 150,
    checked: true
  },
  {
    name: `Add meal`,
    price: 2,
    checked: true
  },
  {
    name: `Choose seats`,
    price: 9,
    checked: true
  },
  {
    name: `Order Uber`,
    price: 30,
    checked: true
  },
  {
    name: `Book tickets`,
    price: 40,
    checked: true
  }
];
const generateRepeatingDays = () => {
  return Object.assign({}, DefaultRepeatingDays, {
    "mo": Math.random() > 0.5,
  });
};
const citys = [`Москва`, `Питер`, `Сочи`];
const generatePoint = () => {
  const dueDate = Math.random() > 0.5 ? null : getRandomDate();

  return {
    type: types[getRandomNumber(0, types.length - 1)],
    town: citys[getRandomNumber(0, citys.length - 1)],
    offer: offers[getRandomNumber(0, offers.length - 1)],
    description: getDescriptions(),
    pictures: getPictures(),
    price: getRandomNumber(0, MAX_PRICE),
    dueDate,
    repeatingDays: dueDate ? DefaultRepeatingDays : generateRepeatingDays(),
    day: getDate(),
    time: getTime(),
  };
};

const generatePoints = (count) => {
  return new Array(count).fill(``).map(generatePoint);
};
const CARDS_COUNT = 12;
const points = generatePoints(CARDS_COUNT);
const menuItems = [
  {
    name: `Table`,
    isActive: true
  },
  {
    name: `Stats`,
    isActive: false
  }
];
const FilterType = [
  {
    name: `Everything`,
  },
  {
    name: `Future`,
  },
  {
    name: `Past`,
  },
];
export {generatePoint, generatePoints};
export {points, menuItems, FilterType};
