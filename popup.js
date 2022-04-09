document.querySelector('#change-interval').addEventListener('click', changeInterval)


// Saves the input value to local storage
function changeInterval() {
    const newTime = parseInt(document.querySelector('input').value);
    if(isNaN(newTime)) {
        alert('Make sure your input is a whole number!')
    } else {
        document.querySelector('.current-interval').innerHTML = `<p>The current interval is every ${newTime} minutes</p>`
    }
}