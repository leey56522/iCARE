// When 'Set' button is clicked, changeInterval function is called
document.querySelector('#change-interval-btn').addEventListener('click', changeInterval)

// Saves the input value to local storage
function changeInterval() {
    const newTime = parseInt(document.querySelector('input').value);
    // Checks if the input is a number and above 0. If yes, a part of the innerHTML of interface changes
    if(isNaN(newTime)) {
        alert('Make sure your input is a whole number!')
    } else if(newTime <= 0) {
        alert('Please enter a number greater than 0!')
    } else {
        // pass the input value to the background js
        chrome.runtime.sendMessage({newTime}, function(response) {
            console.log(response);
            console.log(newTime)
        })
    }
}
