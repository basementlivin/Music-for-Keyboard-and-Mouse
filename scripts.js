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
    "keyCode": 32, // todo: require the keyCode to match the prompt; right now, users can press any key and the function will work & proceed to the next prompt.
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
    "keyCode": 49,
    "text": "Hit the 1 key 3 times."
  },
  {
    "id": "prompt-5",
    "domEvent": "keyhold",
    "time": Date.now,  // could the function start counting from the user's time on keyDown?
    "duration": 7000,
    "text": "Press and hold the G key for 7 seconds."
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
// should probably set event.repeat to false so that keydown doesn't log the repeating characters that occus when you hold down a key.

let startTime = Date.now();
let elapsedTime = ((Date.now() - startTime) / 1000);
document.addEventListener("keyhold", keyDownHandler)

function keyDownCounter() {
  elapsedTime = 0;
  keyDownCounter = elapsedTime++
  if (keyDownCounter === currentPrompt["duration"]){
    elapsedTime = 0
    updatePrompt();
  }
}

function keyDownHandler(){
  const currentPrompt = prompts[promptIndex];
  if (currentPrompt["domEvent"] === "keyhold") {
    keyDownCounter(currentPrompt)
  }
}


// let elapsedTime = 0
// let keyDownTracker = null

// document.addEventListener("keyhold", keyDownHandler)
// document.addEventListener("keyhold", keyUpHandler)

// function keyDownHandler(){
//     elapsedTime = 0;
//     keyDownTracker = setInterval(function(){
//         elapsedTime++;
//         console.log("Seconds passed since you lifted your finger off the keyboard: " + elapsedTime);
//     }, 1000, clearInterval(keyDownTracker));
    // console.log("keyDownTracker is:", keyDownTracker)
// }

// function keyUpHandler(){
//   console.log("KEY UP HANDLER CALLED", keyDownTracker)
//   clearInterval(keyDownTracker);
//   keyDownTracker = null;
// }




// let elapsedTime = 0
// let keyDownTracker = null

// document.addEventListener("keydown", keyDownHandler)
// document.addEventListener("keyup", keyUpHandler)

// function keyDownHandler(){
//     elapsedTime = 0;
//     keyDownTracker = setInterval(function(){
//         elapsedTime++;
//         console.log("SET INTERVAL FIRED OFF!");
//     }, 1000);
//     console.log("keyDownTracker is:", keyDownTracker)
// }

// function keyUpHandler(){
//   console.log("KEY UP HANDLER CALLED", keyDownTracker)
//   clearInterval(keyDownTracker);
//   keyDownTracker = null;
// }