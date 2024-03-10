'use strict';
/*
console.log(document.querySelector('.message').textContent);  //id its an id we use# 

document.querySelector('.message').textContent = 'correct number!';
console.log(document.querySelector('.message').textContent);  //id its an id we use# 


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displaymsg = function (message) {
    document.querySelector('.message').textContent = message;

}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    //when there is no guess
    if (!guess) {
        // document.querySelector('.message').textContent = '❌ No guess...';
        displaymsg('❌ No number entered..!!')
    }
    //when there is correct guess
    else if (guess === secretnumber) {
        // document.querySelector('.message').textContent = '';
        displaymsg('🎉 correct number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretnumber;
        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess !== secretnumber) {
        if (score > 1) {
            displaymsg(guess > secretnumber ? 'Too high...' : 'Too low...');
            score--;
            document.querySelector('.score').textContent = score;

        }
        else {
            document.querySelector('.message').textContent = 'You lost the game.';
            document.querySelector('.score').textContent = 0;
        }
    }
    //when guess number is high.
    // else if (guess > secretnumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = guess > secretnumber ? 'Too high...' : 'Too low...' ;
    //         score--;
    //         document.querySelector('.score').textContent = score;

    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game.';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if (guess < secretnumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low...';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game.';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start Guessing.....';
    displaymsg('Start guessing....!!!')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.highscore').textContent = highscore;

})