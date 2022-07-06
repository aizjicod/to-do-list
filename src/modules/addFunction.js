import createLi from "./createLi.js";
import listData from "./list-data.js";
import storage from "./storage.js"; 


const addList = (event) => {
    const data = {
      description: event.target.value,
      completed: false,
      index: listData.length + 1
    }
    createLi(data);
    listData.push(data);
    storage.setStorage(listData)
}

export default addList