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

// // Creates a popup window of assigned size in the center of the screen
// function popWindow() {
//     const window_height = 800;
//     const window_width = 1000;

//     // x and y coordinates are calculated based on the screen size and window size
//     const x = screen.width/2 - window_width/2;
//     const y = screen.height/2 - window_width/2;

//     chrome.windows.create({
//         url:'/window.html',
//         type: "popup",
//         width: window_width,
//         height: window_height,
//         left: x,
//         top: -y
//     });
// }