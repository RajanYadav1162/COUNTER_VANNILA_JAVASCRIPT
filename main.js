const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const res = document.querySelector('.res');
const counter = document.querySelector('h2');

const getCurrent = () => Number(counter.innerText);

const incHandler = () => {
  counter.textContent = getCurrent() + 1;
};

const decHandler = () => {
  counter.textContent = getCurrent() - 1;
};

const resHandler = () => {
  counter.textContent = 0;
};

inc.addEventListener('click', incHandler);
dec.addEventListener('click', decHandler);
res.addEventListener('click', resHandler);
