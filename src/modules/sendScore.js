const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ba38c590-0e87-11ed-b748-57040fdc3dfa/scores/';

const sendApi = () => {
  const firstInput = document.querySelector('.nameInput').value;
  const secondInput = document.querySelector('.scoreInput').value;

  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: firstInput,
      score: secondInput,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default sendApi;
