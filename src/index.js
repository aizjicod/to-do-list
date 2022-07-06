import './style.css';

const listData = [
  {
    description: 'make the bed',
    completed: false,
    index: 0,
  },
  {
    description: 'do the shores',
    completed: false,
    index: 1,
  },
  {
    description: 'do the dishes',
    completed: false,
    index: 2,
  },
  {
    description: 'take out thrash',
    completed: false,
    index: 3,
  },
  {
    description: 'study for 4 hours',
    completed: false,
    index: 4,
  },
];

const createLi = (index) => {
  // select ul
  const ul = document.querySelector('.list-container');
  // create li
  const li = document.createElement('li');
  li.classList.add('task-container');
  // create input
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  // create span
  const span = document.createElement('span');
  span.classList.add('span');
  span.textContent = `${index.description}`;
  // create icon
  const thrashIcon = document.createElement('img');
  thrashIcon.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL9JREFUSEvtlc0NwjAMhV8mYQRgE07OGjABrBOfOgpsUCYxqtRKoU3tkDTi0tyi/Hzv2UqeQ+PhGt8PFRBCuDjn7gBOK0J6Ebl577s1oSqAmXsAB8Plk4jOpQAZDhJRUggzq+vDWcvBtoBJUW3jY8dfDpoDJuU5tY1davuLm7cpYK7QmsfwLAfWhdUl2gGLd/VrSfYemF9TdYksQgkgJ2jm3BcRLZIv+ZLHqHwAOFrqx/W3iFxT0fnf0M9Ur277APlk1BlhQ27RAAAAAElFTkSuQmCC');
  thrashIcon.setAttribute('alt', 'thrash icon');
  thrashIcon.className = 'thrash-icon';

  // append
  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(thrashIcon);

  ul.appendChild(li);
};

listData.forEach((child) => {
  createLi(child);
});
