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

document.addEventListener("click", countClicks);

function countClicks(){
  const currentPrompt = prompts[promptIndex];
  if (currentPrompt["domEvent"] === "click") {
    console.log("Now what we have here is a Click Prompt, plain and simple.")

  // console.log("THE CURRENT PROMPT IS:", currentPrompt) //works! returns objects from 'prompts' in succession
  
  updatePrompt()
  } else {
    console.log("I've seen a whole lotta Click Prompts in my day and, well, that ain't a Click Prompt.")
  }
}