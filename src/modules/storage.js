const setStorage = (data) => {
  localStorage.setItem('task', JSON.stringify(data));
};

const getStorage = (data) => {
  data.push(...JSON.parse(localStorage.getItem('task')));
};

export default {
  setStorage,
  getStorage,
};