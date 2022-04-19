// Returns a random number that corresponds to the gif name
function getRandomNum(min, max) {
    return Math.floor(Math.random() * max) + min;
}

let imageNum = getRandomNum(1, 11);
let imagePath;

if (imageNum < 6) {
    imagePath = `<img src="./img/${imageNum}.gif" alt="eye or neck exercise">`
} else {
    imagePath = `<img src="./img/${imageNum}.png" alt="eye or neck exercise">`
}


// Random gif is selected to pop up every time interval
document.querySelector('#img-box').innerHTML = imagePath;

// Automatically closes the popup window after 45 seconds
setTimeout(function() {
    window.close();
}, 29000);
