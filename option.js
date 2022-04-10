document.querySelector('#change-interval-btn').addEventListener('click', changeInterval)


// Saves the input value to local storage
function changeInterval() {
    const newTime = parseInt(document.querySelector('input').value);
    // Checks if the input is a number. If yes, a part of the innerHTML of interface changes
    if(isNaN(newTime)) {
        alert('Make sure your input is a whole number!')
    } else {
        document.querySelector('.current-interval').innerHTML = `The current interval is every <span id="time">${newTime}</span> minutes`
        // pass the input value to the background js
        chrome.runtime.sendMessage({newTime}, function(response) {
            console.log(response);
            console.log(newTime)
        })
    }
}