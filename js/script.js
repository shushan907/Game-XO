//-----------------------------------Variabels-----------------------------------------    

let xo;
let zone = {};
let countEventListener = 1;

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
            //---------------------
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
           //------------------
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
