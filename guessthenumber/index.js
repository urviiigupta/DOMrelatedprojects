let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userInupt=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');
let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault();
       const guess=parseInt(userInupt.value)
       validateguess(guess);
    });
}

function validateguess(guess)
{
    //to see if the nuumber coming is actually 

    if(isNaN(guess))
    {
        alert('NOT VALID');
    }

    else if(guess<1)
    {
        alert('NOT VALID');
    }

    else if(guess>100)
    {
        alert('NOT VALID');
    }
    else
    {
        prevGuess.push(guess);
        if(numGuess===10)
        {
            displayGuess(guess);
            displayMessage(`GAME OVER YOU LOST,number was ${randomNumber}`);     
            endGame();
        }

        else
        {
            displayGuess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess)
{
    if(guess==randomNumber)
    {
        displayMessage("YOU ARE RIGHT");
        endGame();
    }

    else if(guess<randomNumber)
    {
        displayMessage("YOUR GUESS IS LOWER THAN NUMBER");
    }

    else if(guess>randomNumber)
    {
        displayMessage("YOUR GUESS IS HIGHER THAN NUMBER");
    }
}

function displayMessage(message)
{
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function displayGuess(guess)
{   //cleaning up
    userInupt.value='';
    guessSlot.innerHTML+=`${guess}  `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;


}

function endGame()
{
    userInupt.value='';
    //adding disabled alone can give problem 
    userInupt.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML='<h2 id="newGame"> Start new Game<\h2>';
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame()
{
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e)
    {
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`;
        userInupt.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;

    });
}

