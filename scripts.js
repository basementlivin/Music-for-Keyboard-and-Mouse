const prompts = [
    {
      "id": "prompt-1",
      "domEvent": "click",
      "amount": 3,
      "text": "Click the left mouse button 3 times"
    },
    {
      "id": "prompt-2",
      "domEvent": "click",
      "amount": 5,
      "text": "Click the left mouse button 5 times"
    },
    {
      "id": "prompt-3",
      "domEvent": "keydown",
      "amount": 3,
      "text": "Hit the spacebar 3 times"
    }
   ]


// const sheetMusic = document.getElementsByClassName("sheet-music");
// const performance = document.getElementsByClassName("performance-prompt");


// Write a function that will count the number of clicks (within the document), then trigger the next prompt when the appropriate number of clicks have been clicked.
document.addEventListener("click", countClicks);

function countClicks(){
    console.log("YOU'RE ONTO SOMETHING, PAL") //works!
}

// Write a function that will log the amount of time a certain key is held down. When the appropriate amount of time is reached, the next prompt should be triggered.

document.addEventListener("keydown", countKeyDown);

function countKeyDown() {
    let shiftCount = 0; // code for both the left and right SHIFT keys = 16
    console.log("Every. Senior. Citizen. Needs. Life Alert.") // works!
}