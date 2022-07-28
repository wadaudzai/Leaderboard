const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ba38c590-0e87-11ed-b748-57040fdc3dfa/scores/';

const ul = document.querySelector('.scores');

const getScore = () => {
  fetch(url).then(async (response) => {
    const score = await response.json();
    const jawab = score.result;
    return jawab;
  })
    .then((jawab) => {
      if (jawab.length < 10) {
        jawab.length = 10;
      }
      for (let i = 0; i < jawab.length; i += 1) {
        const newResult = document.createElement('li');
        newResult.textContent = `${i + 1} - ${jawab[i].user} : ${jawab[i].score}`;
        ul.appendChild(newResult);
      }
    });
};

export default getScore;