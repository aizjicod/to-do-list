import listData from './list-data.js';
import storage from './storage.js';

const removeLi = (btn, index) => {
  listData.splice(index.index - 1, 1);
  btn.parentElement.remove();
  for (let i = 0; i < listData.length; i += 1) {
    listData[i].index = i + 1;
  }
  storage.setStorage(listData);
};

export default removeLi;
