// -------------------------imports -----------------------------------//

import './style.css';
import addList from './modules/addFunction';
import listData from "./modules/list-data";
import storage from "./modules/storage";
import createLi from './modules/createLi';

// --------------------------variables--------------------------------//
const input = document.querySelector('.input-form')

input.addEventListener('keypress', e => {
  if(input.value.trim() === ''){
    return
  }else if(e.key == 'Enter') {
    e.preventDefault();
    addList(e)
    input.value = '';
  }
});

window.addEventListener('load', () => {
  storage.getStorage(listData);
  listData.forEach(child => {
    createLi(child);
  });
})
