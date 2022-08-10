const prompts = [
  {
    "id": "prompt-1",
    "domEvent": "click",
    "amount": 3,
    "text": "Click the left mouse button 3 times."
  },
  {
    "id": "prompt-2",
    "domEvent": "keydown",
    "amount": 3,
    "text": "Hit the spacebar 3 times."
  },
  {
    "id": "prompt-3",
    "domEvent": "click",
    "amount": 15,
    "text": "Click the left mouse button 15 times."
  },
  {
    "id": "prompt-4",
    "domEvent": "keydown",
    "amount": 3,
    "text": "Hit the spacebar 3 times."
  },
  {
    "id": "prompt-5",
    "domEvent": "keydown",
    "amount": 3,
    "text": "Press and hold the shift key for 7 seconds."
  }
]

let promptIndex = 0;

function updateTheDom(domId, newText){
console.log("You updated the dom!")
document.getElementById(domId).innerHTML = newText;
}

function updatePrompt(){
const newPromptIndex = promptIndex + 1
promptIndex = newPromptIndex 
const prompt = prompts[newPromptIndex] 
console.log("UPDATED PROMPT IS:", JSON.stringify(prompt)) 
updateTheDom("performance-prompt", prompt.text) 
}


// CLICK COUNTER FUNCTION

document.addEventListener("click", clickHandler);

let numberOfClicks = 0;

function countClicks(currentPrompt){
  numberOfClicks = numberOfClicks + 1
  if (numberOfClicks === currentPrompt["amount"]) {
    numberOfClicks = 0
    updatePrompt();
  }
}

function clickHandler(){
  const currentPrompt = prompts[promptIndex];
  if (currentPrompt["domEvent"] === "click") {
    countClicks(currentPrompt)
  } 
}

// KEYDOWN COUNTER FUNCTION

document.addEventListener("keydown", keyDownHandler)

let numberOfKeyDowns = 0;

function countKeyDowns(currentPrompt){
  numberOfKeyDowns = numberOfKeyDowns + 1
  if (numberOfKeyDowns === currentPrompt["amount"]){
    numberOfKeyDowns = 0
    updatePrompt();
  }
}

function keyDownHandler(){
  const currentPrompt = prompts[promptIndex];
  if (currentPrompt["domEvent"] === "keydown") {
    countKeyDowns(currentPrompt)
  }
}