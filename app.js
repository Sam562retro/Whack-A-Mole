const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');

let lastHole,
    timeUp = false,
    score = 0;

function startGame() {
    scoreBoard.textContent = '0';
    timeUp = false;
    score = 0;
    upDown();
    setTimeout(() => timeUp = true, 20000);
}

function randomHole(h) {
    const index = Math.floor(Math.random() * h.length);
    const hole = h[index];
    if (hole === lastHole) {
        return randomHole(h);
    }
    lastHole = hole
    return hole;
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function upDown() {
    const time = randomTime(500, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) {
            upDown();
        }
    }, time);
}

moles.forEach(mole => mole.addEventListener('onclick', hit))

function hit(e) {
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}