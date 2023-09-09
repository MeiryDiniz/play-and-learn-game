/**
 * Function to load the game page
 */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('game-page-bt').addEventListener('click', play);
    function play() {
        window.location.href = '../gamearea.html';
    }

});


/**
 * Function to go back to the home page
 */

document.getElementById('home-page').addEventListener('click', home);
function home() { window.location.href = '../index.html'; }


document.addEventListener('DOMContentLoaded', function () {

    let myImagesArray = [
        'assets/images/gameimages/image1.webp',
        'assets/images/gameimages/image2.webp',
        'assets/images/gameimages/image3.webp'
    ];

    function getImage() {
        let newImage = Math.floor(Math.random() * myImagesArray.length);
        return myImagesArray[newImage];
    }

    function displayNewImage() {
        let imageElement = document.getElementById('image-display');
        imageElement.src = getImage();
    }

    let btStart = document.getElementById('next-image');
    btStart.addEventListener('click', displayNewImage);

    displayNewImage(); // Call the function immediately after the page loads
});

