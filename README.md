# iCARE
- This is an all-in-one Google Chrome extension that helps the user exercise their ocular muscle and neck muscle
- The extension creates a popup window in the middle of the screen every 30 minutes (customizable) 
- The gifs have a moving dot and following its movement with eyes exercises ocular muscle
- The images have sentences tilted in a way that makes the user tilt their head to read each sentence. By the time the user finishes reading the entire image, they would have exercised their stiff neck muscle

- This project won the Best Women's Hack in PickHacks 2022

<a href="https://ibb.co/Wx72B1y"><img src="https://i.ibb.co/8KG7PV5/Screen-Shot-2022-04-09-at-10-55-37-PM.png" alt="Screen-Shot-2022-04-09-at-10-55-37-PM" border="0"></a>
- This is the window where the user can update the time interval

<a href="https://ibb.co/gSqWV5P"><img src="https://i.ibb.co/X7058h3/Screen-Shot-2022-04-10-at-1-17-29-AM.png" alt="Screen-Shot-2022-04-10-at-1-17-29-AM" border="0"></a>
- This is the extension uploaded on the Google Chrome Extension Manager developer mode


## Technical walkthrough
- The default time interval is set as 30 minutes, but the user can customize interval by using the option menu below the icon. The new time will be stored in local storage and will override the default timer even when the user restarts the computer. This ensures that the user doesn’t have to reset the timer every single time
- The changeInterval function, which is called when ‘Set’ button is clicked, checks if the input value is a whole number and if the number is bigger than 0. If not, the user gets an alert message. If yes, the input value is sent to background. 
- The input time is relayed to background.js via chrome.runtime, onMessage function. This function connects background and popup to pass variables. Even if the input time is stored in popup’s local storage, it is not accessible in background. The input time is stored in the background local storage for the future use. 
- The Chrome Alarm API helps the extension track time and execute function when the timer hits. We set it so that it opens up a window every few minutes. The window pops up again after the set time.
- The window picks a random gif by first selecting a random number between 1 and max number of images/gifs available. Using string literal syntax, the number is used to call a corresponding image/gif. 

## Things we Learned
1. How to make a basic Google Chrome extension and make use of Chrome Alarm API
2. Create a window with spcified size and position. Make it close itself after a couple seconds
3. gif file making 

## Challenges encountered
1. Figuring out the way to make an extension was more challenging than I thought. None of us had made an extension before, and we had to start from scratch. We overcomed by dividing our work. Those who are familiar with JavaScript coded while others worked on gif/jpg and looked up ways to make the extension. Youtube and StackOverflow helped a lot.
2. It was hard to figure out how to center the popup window to the center of the screen, because the extension’s default popup window had size limitation and cannot be repositioned. So we had to use chrome.window.create to bring up a new window and change its type to ‘popup’ so that the window’s interface is minimized. It also allowed us to change its size and reposition it to the center of the screen. 
3. Figuring out how to automatically close the popup window was hard as well. Window.close() didn’t seem to work at first, but I realized that I was using it in the wrong file (background.js). It worked when I moved the function to window.js to target the popup window specifically.
4. Making gif was a lot harder than we thought. We thought to use Canva's gif maker, but it did not move all of the elements of the gifs. We overcame this by realising that each gif had to be made using a frame-by-frame animation style and using a online gif maker (ezgif) to finalise the gifs.



## Upcoming Updates
1. Consider using CSS translation animation for smoother object movement
2. Add posture or hydration check notification setting
3. Add more types of images and gifs so that the user doesn’t get repeated images or gifs
4. An API to send custom alerts to the user phone


