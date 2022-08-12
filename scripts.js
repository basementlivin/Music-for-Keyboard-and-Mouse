const prompts = [
  {
    "id": "prompt-1",
    "domEvent": "keydown",
    "amount": 15,
    "keyCode": "KeyB",
    "text": "Lightly tap the B key 15 times."
  },
  {
    "id": "prompt-2",
    "domEvent": "keydown",
    "amount": 4,
    "keyCode": "KeyS",
    "text": "Hit the S key 4 times."
  },
  {
    "id": "prompt-3",
    "domEvent": "click",
    "amount": 1,
    "text": "Left click once."
  },
  {
    "id": "prompt-4",
    "domEvent": "keydown",
    "amount": 20,
    "keyCode": "Digit1" || "Numpad1",
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
    "amount": 2,
    "text": "Left click twice."
  },
  {
    "id": "prompt-7",
    "domEvent": "keyhold",
    "duration": 2000,
    "keyCode": "KeyG",
    "text": "Press and hold the G key for 2 seconds, then lift."
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
    "duration": 8000,
    "keyCode": "Digit6" || "Numpad6",
    "text": "Press and hold the 6 key for 8 seconds, then lift."
  },
  {
    "id": "prompt-10",
    "domEvent": "keydown",
    "amount": 42,
    "keyCode": "ArrowUp",
    "text": "Tap the up arrow 42 times."
  },
  {
    "id": "prompt-11",
    "domEvent": "keydown",
    "amount": 8,
    "keyCode": "Space",
    "text": "Hit the spacebar 8 times."
  },
  {
    "id": "prompt-12",
    "domEvent": "click",
    "amount": 1,
    "text": "Left click once."
  },
  {
    "id": "prompt-13",
    "domEvent": "keydown",
    "amount": 4,
    "keyCode": "Space",
    "text": "Hit the spacebar 4 times."
  },
  {
    "id": "prompt-14",
    "domEvent": "click",
    "amount": 2,
    "text": "Left click twice."
  },
  {
    "id": "prompt-15",
    "domEvent": "keydown",
    "amount": 2,
    "keyCode": "Space",
    "text": "Hit the spacebar twice."
  },
  {
    "id": "prompt-16",
    "domEvent": "click",
    "amount": 2,
    "text": "Left click twice."
  },
  {
    "id": "prompt-17",
    "domEvent": "keydown",
    "amount": 1,
    "keyCode": "KeyL",
    "text": "Tap the L key once."
  },
  {
    "id": "prompt-18",
    "domEvent": "keydown",
    "amount": 1,
    "keyCode": "KeyH",
    "text": "Tap the H key once."
  },
  {
    "id": "prompt-19",
    "domEvent": "keyhold",
    "duration": 2000,
    "keyCode": "KeyO",
    "text": "Hold down the O key for 2 seconds."
  },
  {
    "id": "prompt-20",
    "domEvent": "keydown",
    "amount": 1,
    "keyCode": "KeyQ",
    "text": "Tap the Q key once."
  },
  {
    "id": "prompt-21",
    "domEvent": "keyhold",
    "duration": 30000,
    "keyCode": "Digit3" || "Numpad3",
    "text": "Press and hold the 3 key for 30 seconds."
  },
  {
    "id": "prompt-22",
    "text": "Keep on listening."
  }
]

// PROMPT UPDATE FUNCTION

let promptIndex = 0;

function updateTheDom(domId, newText){
document.getElementById(domId).innerHTML = newText;
}

function updatePrompt(){
  const newPromptIndex = promptIndex + 1
  if (newPromptIndex > (prompts.length - 1)) {
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

// KEYDOWN DURATION FUNCTION (IN MILLISECONDS)

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