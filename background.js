// The default time interval will be 30 minutes
let defaultDuration = 20.0;

// Creates an alarm after above the above duration is past
function createAlarm() {
    chrome.alarms.create("exercise time", {delayInMinutes: defaultDuration, periodInMinutes: defaultDuration});
}

// Makes the alarm call on a window creating function after the duration passes
chrome.alarms.onAlarm.addListener(function() {
    popWindow()
})

// Creates a popup window of assigned size in the center of the screen
function popWindow() {
    const window_height = 600;
    const window_width = 1000;

    // x and y coordinates are calculated based on the screen size and window size
    const x = screen.width/2 - window_width/2;
    const y = screen.height/2 - window_height/2;

    chrome.windows.create({
        url:'/window.html',
        type: "popup",
        width: window_width,
        height: window_height,
        left: x,
        top: -y
    });
}

createAlarm()

// Updates the interval based on set time input
chrome.runtime.onMessage.addListener(
    function(request, sendResponse) {
        console.log('Event received in background page')
        defaultDuration = request.newTime * 1.0;
        createAlarm();
        sendResponse({success: true});
    }
  );