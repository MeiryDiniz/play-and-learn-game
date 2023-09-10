function startGame() {
    window.location.href = 'gamearea.html';

}

function homePage() {
    window.location.href = '../index.html';

}



document.addEventListener('DOMContentLoaded', function () {
    let callButtons = document.getElementsByTagName('button');
   
    for (let button of callButtons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'check') {
                checkAnswer();
            } else if (this.getAttribute('data-type') === 'next') {
                displayImage();
            }
        });
    }

});


function displayImage() {
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
        'bus1',
        'sun2',
        'mouse3',
        'butterfly4',
        'helicopter5',
        'rabbit6',
        'avocado7',
        'dragon8',
        'watermelon9',
        'lion10',
        'elephant11',
        'snowman12',
        'rainbow13',
        'pizza14',
        'giraffe15',
        'moon16',
        'snake17',
        'apple18',
        'dog19',
        'cat20'
    ];

    let newImageIndex = Math.floor(Math.random() * myImagesArray.length);
    let newImage = myImagesArray[newImageIndex];
    let imageElement = document.getElementById('image-display');
    let answer = myAnswersArray[newImageIndex];
    let answerInput = document.getElementById('game-answer-box');
    imageElement.src = newImage;
    imageElement.setAttribute('data-answer', answer);
    answerInput.value = '';

}

function checkAnswer() {


    let answerInput = document.getElementById('check-answer');
    let image = document.getElementById('image-display');
    let selectedAnswer = answerInput.value;
    let correctAnswer = image.dataset.answer;

    if (selectedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert('Correct answer!');
    } else if (selectedAnswer.value === ('')) {
        alert('You have to insert an answer');
    } else {
        alert('Incorrect answer!');
    }

}








