const scores = [
    {
        name: 'walid',
        score: 100,
    },
    {
        name: 'a',
        score: 100,
    },
    {
        name: 'b',
        score: 100,
    },
    {
        name: 'c',
        score: 100,
    },
    {
        name: 'd',
        score: 100,
    }
];

const createDynamic = () => {
    let scoreCount = '';
    scores.forEach((item) => {
        scoreCount += `
        <li class="single-score">
        <p class="name-p">${item.name}</p>
        <p>${item.score}</p>
        </li>
    `;
    });
    return scoreCount;
};

export default createDynamic;