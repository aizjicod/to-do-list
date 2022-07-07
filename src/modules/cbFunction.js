// --------------------------functions--------------------------------//

const checkfunction = (li, index) => {
  li.classList.toggle('completed');
  li.classList.remove('incorrect');
  if (index.completed === false) {
    index.completed = true;
  } else {
    index.completed = false;
  }
};

export default checkfunction;