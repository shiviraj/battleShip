const getElement = getBy => document.querySelector(getBy);

const hide = function(elementID) {
  const $element = getElement(elementID);
  $element.classList.add('hidden');
};

const show = function(elementID) {
  const $element = getElement(elementID);
  $element.classList.remove('hidden');
};

const changeCardTitle = function(text) {
  const $element = getElement('.card-title');
  $element.innerText = text;
};

const nextPanel = function(hideID, showID, textToChange) {
  hide(hideID);
  show(showID);
  changeCardTitle(textToChange);
};

const prevPanel = function(showID, hideID, textToChange) {
  hide(hideID);
  show(showID);
  changeCardTitle(textToChange);
};

const playGame = function() {
  const $playGame = document.querySelector('#play-game');
  const $back = document.querySelector('#host-join #back');
  $playGame.onclick = () => nextPanel('#main', '#host-join', 'Play Game');
  $back.onclick = () => prevPanel('#main', '#host-join', 'Battle Ship');
};

const hostGame = function() {
  const $hostGame = document.querySelector('#host-game');
  const $back = document.querySelector('#host-game-form .action #back');
  $hostGame.onclick = () =>
    nextPanel('#host-join', '#host-game-form', 'Host Game');
  $back.onclick = () => prevPanel('#host-join', '#host-game-form', 'Play Game');
};

const joinGame = function() {
  const $joinGame = document.querySelector('#join-game');
  const $back = document.querySelector('#join-game-form .action #back');
  $joinGame.onclick = () =>
    nextPanel('#host-join', '#join-game-form', 'Join Game');
  $back.onclick = () => prevPanel('#host-join', '#join-game-form', 'Play Game');
};

const attachListener = function() {
  playGame();
  // aboutGame();
  // settings();
  hostGame();
  joinGame();
};

const main = function() {
  attachListener();
};

window.onload = main();
