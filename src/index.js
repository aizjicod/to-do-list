// -------------------------imports -----------------------------------//

import './style.css';
import addList from './modules/addFunction.js';
import listData from './modules/list-data.js';
import storage from './modules/storage.js';
import createLi from './modules/createLi.js';

// --------------------------variables--------------------------------//
const input = document.querySelector('.input-form');

input.addEventListener('keypress', (e) => {
  if (input.value.trim() === '') {
    return null;
  } if (e.key === 'Enter') {
    e.preventDefault();
    addList(e);
    input.value = '';
  }
  return null;
});

window.addEventListener('load', () => {
  storage.getStorage(listData);
  listData.forEach((child) => {
    createLi(child);
  });
});
