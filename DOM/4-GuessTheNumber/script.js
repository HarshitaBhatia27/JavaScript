let randomNum=parseInt(Math.random()*100 +1);
const submit= document.querySelector('#subt');
const userInput= document.querySelector('#guessField');
const guessSlot= document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');
const lowOrHi= document.querySelector('.lowOrHi');
const startOver= document.querySelector('.resultParas');

const p= document.createElement('p')

let preGuess= [] //store the values user guessed
let numGuess = 1 // store number of guesses user made. can make only 10
let playGame = true; //variable that will allow you to play game further

if(playGame){ // if user allowed to play and he will enter a number
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess= parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // check if the user passed a number and it is b/w 1-100
    if(isNaN(guess)){
    alert('Please enter a valid number')
    } else if(guess<1)
    {
        alert('Please enter a number more than 1')
    }
    else if(guess>100){
        alert('Please enter a number less than 100')
    }else{
        preGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over.Random number was ${randomNum}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}


function checkGuess(guess){
    //msg print hoga if the value is validated
    if(guess=== randomNum){
        displayMessage(`You guessed it right`)
        endGame()
    } else if( guess <randomNum){
         displayMessage(`Number is too low`)
    } else if(guess > randomNum)
    {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
  // clean your values and update the previous guess array as well as remaining guessed
  userInput.value='' //clean up the input taken by user
  guessSlot.innerHTML += `${guess}, ` //pushing all the guessed elements in an array
  numGuess++
  remaining.innerHTML = `${11-numGuess}`
}


function displayMessage(message) {
    // interact with DOM
    //printing msg
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton= document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNum = parseInt(Math.random()*100 +1);
        preGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)        
        playGame=true

    })
}

function endGame(){
    userInput.value='' //clean the values
    userInput.setAttribute('disabled','') //disabled is used in key value pair
    p.classList.add('button')
    p.innerHTML = `<h3 id="newGame">Start new Game</h3>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}

