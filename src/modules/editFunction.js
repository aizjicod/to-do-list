import listData from "./list-data";
import storage from "./storage";


const edit = (input, index) =>{
  input.classList.toggle('active')
  input.removeAttribute('readonly')
  input.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter') {
      input.value = e.target.value;
      input.setAttribute('readonly',true);
      input.classList.toggle('active')
      listData[index.index - 1].description = input.value
      storage.setStorage(listData)
    }
  })
}

export default edit;