const gameboard = document.querySelector('.gameboard'),
    rulesBtn = document.querySelector('#rules'),
    rules = document.querySelector('#mobileRules'),
    reset = document.getElementById('reset'),
    players = document.querySelector('.players');

let message = document.querySelector('h2'),
    seconds = document.getElementById('seconds'),
    minutes = document.getElementById('minutes'),
    currentPlayer = document.querySelectorAll('.checkmark');

const board = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
];
let player = 'red',
    num = 1,
    currentColor = 'red',
    turns = 0,
    sec = 0,
    timer,
    inc = (val) => {
        return val > 9 ? val : '0' + val;
    };
rulesBtn.addEventListener('click', function () {
    mobileRules.classList.toggle('hide');
    let ariaValue = rules.getAttribute('aria-expanded');
    ariaValue =
        ariaValue === 'true'
            ? rules.setAttribute('aria-expanded', 'false')
            : rules.setAttribute('aria-expanded', 'true');
});

const timing = () => {
    timer = setInterval(() => {
        minutes.innerHTML = inc(parseInt(sec / 60, 10));
        seconds.innerHTML = inc(++sec % 60);
    }, 1000);
};

board.forEach((rows, rowIndex) => {
    const row = document.createElement('div');
    row.classList.add('row');
    board.forEach((cols, colIndex) => {
        const puck = document.createElement('button');
        puck.setAttribute('id', `row: ${rowIndex} -- col: ${colIndex}`);
        puck.setAttribute('name', 'empty');
        puck.setAttribute('aria-label', `row: ${rowIndex} -- col: ${colIndex}`);
        puck.classList.add('puck');
        puck.addEventListener('click', () => handlePuck(puck));
        row.appendChild(puck);
    });
    gameboard.appendChild(row);
});

const resetGame = () => {
    resetButtons();
    turns = 0;
    sec = 0;
    message.innerHTML = '';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    player = 'red';
    currentPlayer[1].classList.value = 'checkmark hide';
    currentPlayer[0].classList.value = 'checkmark';
    clearInterval(timer);
};
reset.addEventListener('click', resetGame);
const buttons = document.querySelectorAll('button.puck');
const resetButtons = () => {
    for (const button of buttons) {
        button.className = 'puck';
        button.name = 'empty';
        button.removeAttribute('disabled');
    }
    players.classList.remove('hide');
    message.classList = 'hide';
};
const handlePuck = (puck) => {
    message.innerHTML = '';
    message.classList = 'hide';
    if (turns === 0) {
        timing();
    }
    let id = puck.id,
        y = id.slice(-1),
        x = id.slice(5, 6),
        topPuck,
        bottomPuck;
    topPuck = document.getElementById(`row: ${0} -- col: ${y}`);
    if (topPuck.name !== 'empty') {
        message.classList.remove('hide');
        return (message.innerHTML = 'Column full, select another');
    }
    player = player === 'blue' ? 'red' : 'blue';
    if (player === 'blue') {
        currentPlayer[0].classList.value = 'checkmark hide';
        currentPlayer[1].classList.value = 'checkmark';
    } else {
        currentPlayer[1].classList.value = 'checkmark hide';
        currentPlayer[0].classList.value = 'checkmark';
    }
    turns++;
    for (let i = 5; i >= 0; ) {
        bottomPuck = document.getElementById(`row: ${i} -- col: ${y}`);
        if (bottomPuck.name === 'empty') {
            bottomPuck.setAttribute('name', `${player}`);
            bottomPuck.classList.add(`${player}`);
            if (turns > 6) {
                gameWon(i, y, bottomPuck);
            }
            return;
        }
        i--;
    }
};
const gameWon = (x, y, player) => {
    return (
        checkGame(x, y, player, 'horizontal') ||
        checkGame(x, y, player, 'vert') ||
        checkGame(x, y, player, 'diag') ||
        checkGame(x, y, player, 'diag2')
    );
};
const isUsed = (x, y) => {
    let puck = document.getElementById(`row: ${x} -- col: ${y}`);
    return puck !== null;
};
const colorMatch = (x, y, color) => {
    let puck = document.getElementById(`row: ${x} -- col: ${y}`);
    return puck.name === color;
};
const checkGame = (sx, sy, player, direction) => {
    let puckcount = 1,
        color = player.name,
        checkDirections = {
            horizontal: [
                [0, -1],
                [0, 1],
            ],
            vert: [
                [-1, 0],
                [1, 0],
            ],
            diag: [
                [-1, -1],
                [1, 1],
            ],
            diag2: [
                [-1, 1],
                [1, -1],
            ],
        };
    checkDirections[direction].forEach((cords) => {
        let i = 1,
            x = parseInt(sx),
            y = parseInt(sy);
        while (
            isUsed(x + cords[0] * i, y + cords[1] * i) &&
            colorMatch(x + cords[0] * i, y + cords[1] * i, color)
        ) {
            puckcount++;
            i++;
            if (puckcount > 3) {
                for (const button of buttons) {
                    button.setAttribute('disabled', 'true');
                }
                players.classList.add('hide');
                message.classList.remove('hide');
                clearInterval(timer);
                return (message.innerHTML = `${color} wins!`);
            }
        }
    });
};
