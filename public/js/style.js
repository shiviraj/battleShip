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

const hostGame = function() {
  const $hostGame = document.querySelector('#host-game');
  const $back = document.querySelector('#host-form #back');
  $hostGame.onclick = () => nextPanel('#main', '#host-form', 'Host Game');
  $back.onclick = () => prevPanel('#main', '#host-form', 'Battle Ship');
};

const joinGame = function() {
  const $joinGame = document.querySelector('#join-game');
  const $back = document.querySelector('#join-form #back');
  $joinGame.onclick = () => nextPanel('#main', '#join-form', 'Join Game');
  $back.onclick = () => prevPanel('#main', '#join-form', 'Battle Ship');
};

const attachListener = function() {
  // aboutGame();
  // settings();
  hostGame();
  joinGame();
};

const main = function() {
  attachListener();
};

window.onload = main();
