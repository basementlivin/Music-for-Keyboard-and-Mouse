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