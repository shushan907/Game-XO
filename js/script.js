//-----------------------------------Variabels-----------------------------------------    

let xo;
let zone = {};
let countEventListener = 1;

//------------GetLocalStorageInfo-----------------------------

let player1 = +localStorage.getItem('player1');
let player2 = +localStorage.getItem('player2');
let player1name = localStorage.getItem('player1name');
let player2name = localStorage.getItem('player2name');

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

function addXorY (className) {
    document.querySelector(className).addEventListener('click', () => {
        countEventListener++;
        countEventListener % 2 == 0 ? xo = 'X': xo = 'O';
        document.querySelector(className).innerText = xo;
        zone[className] = document.querySelector(className).innerHTML;
        winners();
    }, {
         once: true,
        })
};
addXorY('.zone1');
addXorY('.zone2');
addXorY('.zone3');
addXorY('.zone4');
addXorY('.zone5');
addXorY('.zone6');
addXorY('.zone7');
addXorY('.zone8');
addXorY('.zone9');

function winners () {
    //------------------------------------Win player1-----------------------------------
    if ((zone['.zone1'] == 'X' && zone['.zone2'] == 'X' && zone['.zone3'] == 'X') ||
        (zone['.zone4'] == 'X' && zone['.zone5'] == 'X' && zone['.zone6'] == 'X') ||
        (zone['.zone7'] == 'X' && zone['.zone8'] == 'X' && zone['.zone9'] == 'X') ||
        (zone['.zone1'] == 'X' && zone['.zone4'] == 'X' && zone['.zone7'] == 'X') ||
        (zone['.zone2'] == 'X' && zone['.zone5'] == 'X' && zone['.zone8'] == 'X') ||
        (zone['.zone3'] == 'X' && zone['.zone6'] == 'X' && zone['.zone9'] == 'X') ||
        (zone['.zone1'] == 'X' && zone['.zone5'] == 'X' && zone['.zone9'] == 'X') ||
        (zone['.zone7'] == 'X' && zone['.zone5'] == 'X' && zone['.zone3'] == 'X')) {
            win('#player1');
            document.querySelector('#player1win').innerHTML++;
            addInfoLocalStorage();
        } 
    //------------------------------------Win player2-----------------------------------
    else if ((zone['.zone1'] == 'O' && zone['.zone2'] == 'O' && zone['.zone3'] == 'O') ||
        (zone['.zone4'] == 'O' && zone['.zone5'] == 'O' && zone['.zone6'] == 'O') ||
        (zone['.zone7'] == 'O' && zone['.zone8'] == 'O' && zone['.zone9'] == 'O') ||
        (zone['.zone1'] == 'O' && zone['.zone4'] == 'O' && zone['.zone7'] == 'O') ||
        (zone['.zone2'] == 'O' && zone['.zone5'] == 'O' && zone['.zone8'] == 'O') ||
        (zone['.zone3'] == 'O' && zone['.zone6'] == 'O' && zone['.zone9'] == 'O') ||
        (zone['.zone1'] == 'O' && zone['.zone5'] == 'O' && zone['.zone9'] == 'O') ||
        (zone['.zone7'] == 'O' && zone['.zone5'] == 'O' && zone['.zone3'] == 'O')) {
            win('#player2');
            document.querySelector('#player2win').innerHTML++;
            addInfoLocalStorage();
        }
    //------------------------------------No winner-----------------------------------
    else if (countEventListener > 9) {
        setTimeout (() => {
            alert ('We don\'t have winner.');
            window.location.reload();
        }, 1000)
    }
}    
//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
function win(id) {
    setTimeout (() => {
        alert (`Win ${document.querySelector(id).innerHTML}!`);
        window.location.reload();
    }, 500);
}

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

function addInfoLocalStorage() {
    localStorage.setItem('player1name', document.querySelector('#player1').innerHTML);
    localStorage.setItem('player2name', document.querySelector('#player2').innerHTML);
    localStorage.setItem('player1', document.querySelector('#player1win').innerHTML);
    localStorage.setItem('player2', document.querySelector('#player2win').innerHTML);
}

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

function sendGameInfo() {
    if(!player1name && !localStorage.getItem('player1')) {
        let name1 = prompt('Please, write name player 1', 'Player1');
        document.querySelector('#player1').innerHTML = name1;
        let name2 = prompt('Please, write name player 2', 'Player2');
        document.querySelector('#player2').innerHTML = name2;
    } else {
        document.querySelector('#player1').innerHTML = player1name;
        document.querySelector('#player2').innerHTML = player2name;
        document.querySelector('#player1win').innerHTML = player1;
        document.querySelector('#player2win').innerHTML = player2;
    }
}

setTimeout (() => {
    sendGameInfo();
}, 0)