import './style.css';

import sendApi from './modules/sendScore.js';
import getScore from './modules/getScore.js';

window.addEventListener('DOMContentLoaded', () => getScore());
const refreshBtn = document.querySelector('.refresh-btn');
refreshBtn.addEventListener('click', () => {
  document.querySelector('.scores').innerHTML = '';
  getScore();
});

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendApi();
  form.reset();
});
