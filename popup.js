document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('button').addEventListener('click', alertHello)
})

function alertHello() {
    chrome.windows.create({
        url:'/popup.html',
        type: "popup",
        height: 800,
        width: 1000,
    });

}