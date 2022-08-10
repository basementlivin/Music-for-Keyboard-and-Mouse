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
    console.log("Every. Senior. Citizen. Needs. Life Alert.") // works!
}