const prompts = [
  {
    "id": "prompt-1",
    "domEvent": "keydown",
    "amount": 3,
    "keyCode": "KeyB",
    "text": "Lightly tap the B key 3 times."
  },
  {
    "id": "prompt-2",
    "domEvent": "keydown",
    "amount": 10,
    "keyCode": "KeyS",
    "text": "Hit the S key 10 times."
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
    "amount": 20,
    "keyCode": "Digit1",
    "text": "Hit the 1 key 20 times."
  },
  {
    "id": "prompt-5",
    "domEvent": "keyhold",
    "duration": 4000,
    "keyCode": "Space",
    "text": "Press and hold the spacebar for at least 4 seconds, then lift."
  },
  {
    "id": "prompt-6",
    "domEvent": "click",
    "amount": 1,
    "text": "Left click once."
  },
  {
    "id": "prompt-7",
    "domEvent": "keyhold",
    "duration": 10000,
    "keyCode": "KeyG",
    "text": "Press and hold the G key for 10 seconds, then lift."
  },
  {
    "id": "prompt-8",
    "domEvent": "click",
    "amount": 1,
    "text": "Left click once."
  },
  {
    "id": "prompt-9",
    "domEvent": "keyhold",
    "duration": 30000,
    "keyCode": "Digit6",
    "text": "Press and hold the 6 key for 30 seconds, then lift."
  },
  {
    "id": "prompt-10",
    "domEvent": "keyhold",
    "duration": 4000,
    "keyCode": "Space",
    "text": "Press and hold the G key for 4 seconds, then lift."
  },
  {
    "id": "prompt-11",
    "domEvent": "keyhold",
    "duration": 4000,
    "keyCode": "Space",
    "text": "Press and hold the G key for 4 seconds, then lift."
  },
]

let promptIndex = 0;

function updateTheDom(domId, newText){
document.getElementById(domId).innerHTML = newText;
}

function updatePrompt(){
  const newPromptIndex = promptIndex + 1
  if (newPromptIndex > (prompts.length - 1)) {
    console.log("Write more prompts, brotherman!")
  } else {
    promptIndex = newPromptIndex
    const prompt = prompts[newPromptIndex]  
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

function countKeyDowns(currentPrompt, eventCode){
  numberOfKeyDowns = numberOfKeyDowns + 1
  if (eventCode === currentPrompt["keyCode"] && numberOfKeyDowns === currentPrompt["amount"]){
    numberOfKeyDowns = 0
    updatePrompt();
  }
}

function keyDownHandler(KeyboardEvent){
  console.log("The keyboard event code is: ", KeyboardEvent.code)
  const currentPrompt = prompts[promptIndex];
  if (currentPrompt["domEvent"] === "keydown") {
    countKeyDowns(currentPrompt, KeyboardEvent.code)
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