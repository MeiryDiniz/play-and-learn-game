/**
 * Function to open the game page
 */

document.getElementById('start-button').addEventListener('click', play);
function play () {window.location.href = 'gamearea.html';}

/**
 * Function to go back to the home page
 */

document.getElementById('home-page').addEventListener('click', home);
function home () {window.location.href = '../index.html';}
