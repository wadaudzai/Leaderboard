import createDynamic from "./scores.js";

const showScores = () => {
    const ul = document.querySelector('.scores');
    ul.innerHTML = createDynamic();
}

export default showScores;