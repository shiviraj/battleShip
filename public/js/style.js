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

const hostGameView = function() {
  const $hostGame = document.querySelector('#host-game');
  const $back = document.querySelector('#host-form #back');
  $hostGame.onclick = () => nextPanel('#main', '#host-form', 'Host Game');
  $back.onclick = () => prevPanel('#main', '#host-form', 'Battle Ship');
};

const joinGameView = function() {
  const $joinGame = document.querySelector('#join-game');
  const $back = document.querySelector('#join-form #back');
  $joinGame.onclick = () => nextPanel('#main', '#join-form', 'Join Game');
  $back.onclick = () => prevPanel('#main', '#join-form', 'Battle Ship');
};

const showWaitingPage = function(data) {
  const $loadingPage = getElement('#waiting');
  const $gameID = getElement('.game-id #game-id');
  const $joinedPlayer = getElement('.joined-player');
  $loadingPage.classList.remove('hidden');
  $gameID.innerHTML = data.gameID;
  $joinedPlayer.innerHTML = `<span class="player">${data.username}</span>`;
};

const hideCard = function() {
  const $card = getElement('.card');
  $card.classList.add('hidden');
};

const hostGame = function() {
  const $hostForm = getElement('#host-form');
  $hostForm.addEventListener('submit', event => {
    event.preventDefault();
    const username = getElement('#host-form #username').value;
    if (!username) return;
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username})
    };
    fetch('hostGame', options)
      .then(response => response.json())
      .then(body => {
        if (!body) return;
        showWaitingPage(body);
        hideCard();
      });
  });
};

const attachListener = function() {
  // aboutGame();
  // settings();
  hostGameView();
  joinGameView();
  hostGame();
  // joinGame();
};

const main = function() {
  attachListener();
};

window.onload = main();
