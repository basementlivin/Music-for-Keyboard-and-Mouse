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

let promptIndex = 0;


// const sheetMusic = document.getElementsByClassName("sheet-music");
// const performance = document.getElementsByClassName("performance-prompt");


// Write a function that will count the number of clicks (within the document), then trigger the next prompt when the appropriate number of clicks have been clicked.
document.addEventListener("click", countClicks);

function updatePrompt(){
  const newPromptIndex = promptIndex + 1
  promptIndex = newPromptIndex 
  const prompt = prompts[newPromptIndex] 
  console.log("UPDATED PROMPT IS:", JSON.stringify(prompt)) 
  updateTheDom("performance-prompt", prompt.text) // may need to use prompt["text"] if prompt.text throws errors
}

function countClicks(){
    updatePrompt()
}

// Write a function that will log the amount of time a certain key is held down. When the appropriate amount of time is reached, the next prompt should be triggered.

document.addEventListener("keydown", countKeyDown);

function countKeyDown() {
    let shiftCount = 0; // code for both the left and right SHIFT keys = 16
    console.log("Every. Senior. Citizen. Needs. Life Alert.") // works!
}


document.addEventListener("click", clickity);

function updateTheDom(domId, newText){
  console.log("You updated the dom!")
  document.getElementById(domId).innerHTML = newText;
}

function clickity(){
    // console.log("Great clicking technique!") // works!
    const domId = "performance-prompt"
    const newText = "You are beginning to understand how this works. Keep hustling, Erik!"
    updateTheDom("performance-prompt", newText)
}