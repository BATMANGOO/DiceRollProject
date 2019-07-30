'use strict';
const diceTrigger = document.querySelector('.dice__trigger');
let diceResult = document.querySelector('.dice__image');
console.log(diceResult);
const pewSound =  new Audio('pew.wav');

function randomCount() {
  return 1 + Math.floor(Math.random() * 6);
}

const rollTheDice = () => {
  diceTrigger.addEventListener('click', () => {
    let theRandomNumber = randomCount();
    diceResult.src = `images/dice${theRandomNumber}.png`;
    pewSound.play();
  });
};




rollTheDice();

  





















// switch(count) {
  // case 0: return diceResult;
  // case 1: return diceResult = 'images/dice2.png';
  // case 2: return diceResult = 'images/dice3.png';
  // case 3: return diceResult = 'images/dice4.png';
  // case 4: return diceResult = 'images/dice5.png';
  // case 5: return diceResult = 'images/dice6.png';
  // }