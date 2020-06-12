//-----------------------------------Variabels-----------------------------------------    

let xo;
let countEventListener = 1;

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

function addXorY (className) {
    document.querySelector(className).addEventListener('click', () => {
        countEventListener++;
        countEventListener % 2 == 0 ? xo = 'X': xo = 'O';
        document.querySelector(className).innerText = xo;
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
