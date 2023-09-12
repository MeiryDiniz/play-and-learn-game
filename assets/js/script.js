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
    window.location.href = '../index.html';

}

// Add event listeners to the game box page 

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

/**
 * The main function to display game images and 
 * and match the array of answers to the images
 * array
 */

function displayImageGame() {
    // Check if all images were displayed
    if (myAnswersArray.length === 0) {

        return;
    }

    let newImageIndex = Math.floor(Math.random() * myImagesArray.length);
    let newImage = myImagesArray[newImageIndex];
    let imageElement = document.getElementById('image-display');
    let answer = myAnswersArray[newImageIndex];
    let answerInput = document.getElementById('game-answer-box');

    // Remove images and answers displayed from aarrays
    myImagesArray.splice(newImageIndex, 1);
    myAnswersArray.splice(newImageIndex, 1);
    
    imageElement.src = newImage;
    imageElement.setAttribute('data-answer', answer);
    answerInput.value = '';

}

/**
 * Function to check the correct answer and
 * log the console messages
 */

function checkAnswer() {

    let answerInput = document.getElementById('game-answer-box');
    let image = document.getElementById('image-display');
    let selectedAnswer = answerInput.value;
    let correctAnswer = image.dataset.answer;

    if (selectedAnswer === correctAnswer) {
        alert('Well done! You got it!');
        incrementPositiveScore();
    } else if (selectedAnswer === '') {
        alert('You have to insert an answer!');
    } else {
        alert(`Oh, sorry! Incorrect answer! You got '${selectedAnswer}'. Correct answer is '${correctAnswer}'!`);
        incrementNegativeScore();
    }


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







