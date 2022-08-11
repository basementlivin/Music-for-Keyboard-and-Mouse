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
    // keyCode: Space, // todo: require the keyCode to match the prompt; right now, users can press any key and the function will work & proceed to the next prompt.
    "text": "Hit the spacebar 3 times."
  },
  {
    "id": "prompt-3",
    "domEvent": "click",
    "amount": 7,
    "text": "Click the left mouse button 7 times."
  },
  {
    "id": "prompt-4",
    "domEvent": "keydown",
    "amount": 3,
    // keyCode: Digit1,
    "text": "Hit the 1 key 3 times."
  },
  {
    "id": "prompt-5",
    "domEvent": "keyhold",
    "duration": 4000,
    // keyCode: KeyG,
    "text": "Press and hold the G key for 4 seconds."
  }
]

let promptIndex = 0;

function updateTheDom(domId, newText){
console.log("You updated the dom!")
document.getElementById(domId).innerHTML = newText;
}

function updatePrompt(){
  const newPromptIndex = promptIndex + 1
  if (newPromptIndex > (prompts.length - 1)) {
    console.log("oh no! we already did all the prompts! what should we do now?!")
  } else {
    promptIndex = newPromptIndex
    const prompt = prompts[newPromptIndex] 
    console.log("UPDATED PROMPT IS:", JSON.stringify(prompt)) 
    updateTheDom("performance-prompt", prompt.text) 
  }
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
let key = KeyboardEvent.keyCode

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


// CALCULATE TIME BETWEEN KEYDOWN AND KEYUP EVENTS

let startTime = null;
let keyDownAllowed = true; 

document.addEventListener("keydown", keyHoldHandler)
document.addEventListener("keyup", keyUpHandler)

function keyHoldHandler(event){

  if (event.repeat != undefined) {
    keyDownAllowed = !event.repeat;
  }
  if (!keyDownAllowed) return;
  keyDownAllowed = false;

  startTime = Date.now(); 
  console.log("KEY DOWN AT:", startTime)
}

function keyUpHandler(){
  let endTime = Date.now(); 
  let elapsedTime = endTime - startTime;
  keyDownAllowed = true;
  startTime = null;
  let currentPrompt = prompts[promptIndex];
  let promptDuration = currentPrompt["duration"];
  let userHeldDownKeyLongEnough = elapsedTime >= promptDuration;

  if (userHeldDownKeyLongEnough) {
      elapsedTime = 0
      updatePrompt();
  }
}