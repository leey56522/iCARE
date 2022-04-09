document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('button').addEventListener('click', popWindow)
})

function popWindow() {
    // Sets popup window height and width
    const window_height = 800;
    const window_width = 1000;

    // Set the window to pop up in the center of the screen
    const x = screen.width/2 - window_width/2;
    const y = screen.height/2 - window_width/2;

    chrome.windows.create({
        url:'/popup.html',
        type: "popup",
        width: window_width,
        height: window_height,
        left: x,
        top: -y
    });
}