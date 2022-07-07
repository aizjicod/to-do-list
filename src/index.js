// -------------------------imports -----------------------------------//

import './style.css';
import addList from './modules/addFunction.js';
import listData from './modules/list-data.js';
import storage from './modules/storage.js';
import createLi from './modules/createLi.js';
import removeLi from './modules/removeFunction';

// --------------------------variables--------------------------------//
const input = document.querySelector('.input-form');
const clearInput = document.querySelector('.undo-btn')
const clearbtn = document.querySelector('.clear-btn');
const reset = document.querySelector('.reset-icon')

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

clearInput.addEventListener('click', ()=> {
  input.value = '';
})

clearbtn.addEventListener('click', () => { 
  const completedItems = listData.filter(item =>  item.completed === true );
  completedItems.forEach(element => {
    removeLi(element)
  });
})

reset.addEventListener('click', () => {
  listData.forEach(element => {
    element.completed = true;
  });
  const completedItems = listData.filter(item =>  item.completed === true );
  completedItems.forEach(element => {
    removeLi(element)
  });
})


window.addEventListener('load', () => {
  storage.getStorage(listData);
  listData.forEach((child) => {
    createLi(child);
  });
});
