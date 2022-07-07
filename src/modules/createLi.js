// --------------------------imports--------------------------------//

import checkfunction from './cbFunction.js';
import edit from './editFunction.js';
import removeLi from './removeFunction.js';

// --------------------------functions--------------------------------//

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
  const input = document.createElement('input');
  input.classList.add('input');
  input.setAttribute('readonly', true);
  input.value = `${index.description}`;
  // create icon
  const thrashIcon = document.createElement('img');
  thrashIcon.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL9JREFUSEvtlc0NwjAMhV8mYQRgE07OGjABrBOfOgpsUCYxqtRKoU3tkDTi0tyi/Hzv2UqeQ+PhGt8PFRBCuDjn7gBOK0J6Ebl577s1oSqAmXsAB8Plk4jOpQAZDhJRUggzq+vDWcvBtoBJUW3jY8dfDpoDJuU5tY1davuLm7cpYK7QmsfwLAfWhdUl2gGLd/VrSfYemF9TdYksQgkgJ2jm3BcRLZIv+ZLHqHwAOFrqx/W3iFxT0fnf0M9Ur277APlk1BlhQ27RAAAAAElFTkSuQmCC');
  thrashIcon.setAttribute('alt', 'thrash icon');
  thrashIcon.className = 'thrash-icon';

  // append childs
  li.appendChild(checkBox);
  li.appendChild(input);
  li.appendChild(thrashIcon);
  ul.appendChild(li);

  // functions

  thrashIcon.addEventListener('click', () => {
    removeLi(index);
  });

  input.addEventListener('click', () => {
    edit(input, index);
  });

  checkBox.addEventListener('click', () => {
    checkfunction(li, index);
  });
};

export default createLi;