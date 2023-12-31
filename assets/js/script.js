/**
 * Function to load the game page when the play
 * button is clicked
 */
function startGame() {
    window.location.href = 'gamearea.html';

}

/**
 * Function to load the home page when the home
 * button is clicked
 */


function homePage() {
    window.location.href = 'index.html';

}

// Add event listeners to the game buttons on the home page 

document.addEventListener("DOMContentLoaded", function () {
    let callButtons = document.getElementsByTagName('button');

    for (let button of callButtons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'check') {
                checkAnswer();
            } else if (this.getAttribute('data-type') === 'next') {
                displayImageGame();
            }
        });

        displayImageGame();

    }

    document.getElementById('game-answer-box').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });

});

// Images and answers array to call the function 
// to load and display the images and match
// it to the correct answers 


let myImagesArray = [
    'assets/images/gameimages/image1.webp',
    'assets/images/gameimages/image2.webp',
    'assets/images/gameimages/image3.webp',
    'assets/images/gameimages/image4.webp',
    'assets/images/gameimages/image5.webp',
    'assets/images/gameimages/image6.webp',
    'assets/images/gameimages/image7.webp',
    'assets/images/gameimages/image8.webp',
    'assets/images/gameimages/image9.webp',
    'assets/images/gameimages/image10.webp',
    'assets/images/gameimages/image11.webp',
    'assets/images/gameimages/image12.webp',
    'assets/images/gameimages/image13.webp',
    'assets/images/gameimages/image14.webp',
    'assets/images/gameimages/image15.webp',
    'assets/images/gameimages/image16.webp',
    'assets/images/gameimages/image17.webp',
    'assets/images/gameimages/image18.webp',
    'assets/images/gameimages/image19.webp',
    'assets/images/gameimages/image20.webp'
];

let myAnswersArray = [
    'bus',
    'sun',
    'mouse',
    'butterfly',
    'helicopter',
    'rabbit',
    'avocado',
    'dragon',
    'watermelon',
    'lion',
    'elephant',
    'snowman',
    'rainbow',
    'pizza',
    'giraffe',
    'moon',
    'snake',
    'apple',
    'dog',
    'cat'
];


//Function to shuffle images and answers arrays to display game images 

function shuffleArrays() {
    for (let i = myImagesArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [myImagesArray[i], myImagesArray[j]] = [myImagesArray[j], myImagesArray[i]],
            [myAnswersArray[i], myAnswersArray[j]] = [myAnswersArray[j], myAnswersArray[i]];

    }
}

/**
 * Function to display game images and match the array of answers to the 
 * images array
 */


let newImageIndex = 0;

function displayImageGame() {
    let imageElement = document.getElementById('image-display');

    if (newImageIndex >= myAnswersArray.length) {
        newImageIndex = 0;
        shuffleArrays();
    }

    let answer = myAnswersArray[newImageIndex];
    let imageDisplay = myImagesArray[newImageIndex];
    imageElement.src = imageDisplay;
    imageElement.setAttribute('data-answer', answer);

    newImageIndex++;
}

/**
 * Function to check the correct answer and
 * log the console messages
 */

function checkAnswer() {

    let answerInput = document.getElementById('game-answer-box');
    let image = document.getElementById('image-display');
    let selectedAnswer = answerInput.value.toLowerCase().trim();
    let correctAnswer = image.dataset.answer.toLowerCase().trim();

    if (selectedAnswer === correctAnswer) {
        alert('Well done! You got it!');
        incrementPositiveScore();
    } else if (selectedAnswer === '') {
        alert('You have to insert an answer!');
    } else {
        alert(`Oh, sorry! Incorrect answer! You got '${selectedAnswer}'. Correct answer is '${correctAnswer}'!`);
        incrementNegativeScore();
    }

    let clearBox = document.getElementById('game-answer-box');
    clearBox.value = '';


    displayImageGame();

}

// Function to update positive score

function incrementPositiveScore() {
    let previuosPositiveScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++previuosPositiveScore;

}

// Function to update negative score

function incrementNegativeScore() {
    let previuosNegativeScore = parseInt(document.getElementById('wrong').innerText);
    document.getElementById('wrong').innerText = ++previuosNegativeScore;

}







