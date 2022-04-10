// Returns a random number that corresponds to the gif name
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

let imageNum = getRandomNum(1, 12);

// Random gif is selected to pop up every time interval
document.querySelector('#img-box').innerHTML = `<img src="./img/${imageNum}.gif" alt="eye or neck exercise">`

// Automatically closes the popup window after 45 seconds
setTimeout(function() {
    window.close();
}, 29000);
