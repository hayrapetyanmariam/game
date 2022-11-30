// Selectors

let $start = document.querySelector('#start');
let $game = document.querySelector('#game');
let $time = document.querySelector('#time');
let $result = document.querySelector('#result');
let $gameTime = document.querySelector('#game-time');

let colors = ['red', 'blue', 'green', 'violet', 'pink', 'yellow', 'black', 'brown'];
let score = 0;

// Events
$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBallClick);
$gameTime.addEventListener('input', setGameTime);

//Functions

function startGame(){
    score = 0;
    $result.textContent = score;
    $game.style.backgroundColor = "#fff";
    hide($start);
    $gameTime.setAttribute('disabled', 'true');

    let interval =  setInterval(() => {
        let time = parseFloat($time.textContent);
        if(time === 0){
            clearInterval(interval);
            endGame();
        } else{
           $time.textContent = (time - 0.1).toFixed(1);
        }

    }, 100);

    renderBall();
}

// function renderBall(){
//     let ball = document.createElement('div');
//     let ballSize = getRandomValue(30, 100);
//     let gameSize = $game.getBoundingClientRect();
//     let maxTop = gameSize.height - ballSize;
//     let maxLeft = gameSize.width - ballSize;
//     let randomColorIndex = getRandomValue(0, colors.lenght);
    
//     ball.style.width = ball.style.height = ballSize + 'px';
//     ball.style.backgroundColor = colors[randomColorIndex];
//     ball.style.position = 'absolute';
//     ball.style.top = getRandomValue(0, maxTop) + 'px';
//     ball.style.left = getRandomValue(0, maxLeft) + 'px';
//     ball.style.borderRadius ='50%';
//     ball.style.cursor = 'pointer';
//     ball.setAttribute('data-ball', 'true');

//     $game.insertAdjacentElement('afterbegin', ball);

// }

function renderBall(){
    $game.innerHTML = '';
    let ball = document.createElement('div');
    let ballSize = getRandomValue(30, 100);
    let gameSize = $game.getBoundingClientRect();
    let maxTop = gameSize.height - ballSize;
    let maxLeft = gameSize.width - ballSize;
    let randomColorIndex = getRandomValue(0, colors.length);

    ball.style.width = ball.style.height = ballSize + 'px';
    ball.style.backgroundColor = colors[randomColorIndex];
    ball.style.position = 'absolute';
    ball.style.top  = getRandomValue(0, maxTop) + 'px';
    ball.style.left = getRandomValue(0, maxLeft) + 'px';
    ball.style.borderRadius = '50%';
    ball.style.cursor = 'pointer';
    ball.setAttribute('data-ball', 'true');

    $game.insertAdjacentElement('afterbegin', ball);


}

function handleBallClick(event){
    if(event.target.dataset.ball){
        renderBall();
        score++;
        $result.textContent = score;
    }
}


function endGame(){
    $game.innerHTML = '';
    $game.style.backgroundColor = '#ccc';
    show($start);
    $result.textContent = score;
    $gameTime.removeAttribute('disabled');
    setGameTime();
}

function setGameTime(){
    $time.textContent = (+$gameTime.value).toFixed(1);
}

function getRandomValue(min, max){
    return Math.floor( Math.random() * (max - min) + min);
}

function hide(event){
    event.classList.add('hide');
}

function show(event){
    event.classList.remove('hide');
}



