'use strict';
const diceTrigger = document.querySelector('.dice__trigger');
const diceResult = document.querySelector('.dice__image');
const pewSound =  new Audio('pew.wav');

function randomCount() {
  return 1 + Math.floor(Math.random() * 6);
}

const rollTheDice = () => {
  diceTrigger.addEventListener('click', () => {
    let theRandomNumber = randomCount();
    diceResult.src = `images/dice${theRandomNumber}.png`;
    pewSound.play();
    pewSound.currentTime = 0;
  });
};

rollTheDice();
