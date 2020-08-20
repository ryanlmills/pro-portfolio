/*
Rules:
- On each player's turn, they add 1, 2, or 3 to their overall score, starting at zero
- The first player forced to count to zero loses
*/

// Score addition

let score, activePlayer, currentGame

init()

function init () {
  score = 0
  document.querySelector('.score').textContent = score
  activePlayer = 0
  currentGame = true
}

function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0

  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')
}

const btnClick = addition => {
  if (currentGame) {
    score += addition
    checkWin()
    console.log(`+${addition}`)
    document.querySelector('.score').textContent = score
  }
}

// Check for win condition
function checkWin () {
  if (score >= 30) {
    nextPlayer()
    document.querySelector('#name-' + activePlayer).textContent = 'Winner'
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active')
    currentGame = false
  } else {
    nextPlayer()
  }
}

// Is there a better way to call btnClick in this?
// Add to score
document.querySelector('.add0-1').addEventListener('click', function () {
  btnClick(1)
})

document.querySelector('.add0-2').addEventListener('click', function () {
  btnClick(2)
})

document.querySelector('.add0-3').addEventListener('click', function () {
  btnClick(3)
})

document.querySelector('.add1-1').addEventListener('click', function () {
  btnClick(1)
})

document.querySelector('.add1-2').addEventListener('click', function () {
  btnClick(2)
})

document.querySelector('.add1-3').addEventListener('click', function () {
  btnClick(3)
})

// New game button

document.querySelector('.new-button').addEventListener('click', function () {
  init()
})
