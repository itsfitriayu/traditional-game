// array for game result probability
// 'd' = draw, 'p' = player 1 win, 'c' = com win
const WIN_TABLE = [
  ['d', 'p', 'c'],
  ['c', 'd', 'p'],
  ['p', 'c', 'd']
]

const disableInput = () => {
  document.querySelectorAll('.choice-player').forEach(input => {
    input.setAttribute('disabled', 'disabled')
  })
}

const hideVersus = () => document.getElementById('vs').style.display = 'none'

const showResult = result => {
  //key and css class
  const resultInfo = {
    'd': ['Draw!', 'draw'],
    'p': ['Player 1 win!', 'win-player'],
    'c': ['Com win!', 'win-com']
  }

  console.log(resultInfo[result][0])
  hideVersus()
  document.getElementById(resultInfo[result][1]).style.display = 'block'
  disableInput()
}

const getChoice = choice => {
  const PLAYER_CHOICE = ['rock', 'paper', 'scissors']
  const COM_CHOICE = ['com-rock', 'com-paper', 'com-scissors']

  console.log('Player 1 choose', PLAYER_CHOICE[choice])
  const random = Math.floor(Math.random() * COM_CHOICE.length)

  document.getElementById(PLAYER_CHOICE[choice]).classList.add('chosen')
  document.getElementById(COM_CHOICE[random]).classList.add('chosen')
  document.querySelectorAll('.choice-player').forEach(choice => {
    choice.classList.remove('choice-hover');
    choice.style.cursor = 'default';
  })

  const gameResult = WIN_TABLE[random][choice]
  showResult(gameResult)
}

// refresh game to restart the game
const refreshGame = () => {
  console.log('Refresh!')

  document.querySelectorAll('.choice-player').forEach(input => {
    input.removeAttribute('disabled')
  })

  document.getElementById('vs').style.display = 'block'
  document.getElementById('draw').style.display = 'none';
  document.getElementById('win-player').style.display = 'none';
  document.getElementById('win-com').style.display = 'none';

  document.querySelectorAll('.choice-player').forEach(choice => {
    choice.classList.add('choice-hover');
    choice.style.cursor = 'pointer';
  })
  document.querySelectorAll('.figure').forEach(figure => {
    figure.classList.remove('chosen');
  })
}