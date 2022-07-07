import listData from './list-data.js';
import storage from './storage.js';

const removeLi = (index) => { 
  const thrashIcon = document.querySelectorAll('.thrash-icon');
  const thrashLi = Array.from(thrashIcon);
  if(index.completed === true) {
    thrashLi[index.index -1].parentElement.remove()

    listData.splice(index.index - 1, 1);
    for (let i = 0; i < listData.length; i += 1) {
      listData[i].index = i + 1;
    }
    storage.setStorage(listData);
  }else {
    thrashLi[index.index -1].parentElement.classList.add('incorrect')
  }
};

export default removeLi;
