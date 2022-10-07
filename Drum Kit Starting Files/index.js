// A practice for single event listeners

var drumTitle = document.querySelector("h1");

drumTitle.addEventListener("click", beatIt)
// the selector as an HTML is put inside the function
  function beatIt() {
  var audio = new Audio("sounds/Beat-It.mp3")
  audio.play()
}


// ************************************************************************************************************

// The clicking action

var drumList = document.querySelectorAll('.drum');

for (var i = 0; i < drumList.length; i++) {
  drumList[i].addEventListener("click", sounds);

}


function sounds() {
// the selector as an HTML is put inside the function === drumList[i]

  // We use "this" here, to be able to differentiate between each button when the event listener listens
var target = this.textContent;
  drumActions(target);
  buttonAnimation(target);
}



// ******************************************************************************************************************


// The key pressing ation

document.addEventListener("keydown",  function(event) {
  drumActions(event.key);
  buttonAnimation(event.key);
})

// **********************************************************************************************************************


// The sound action
function drumActions(targetAction) {
  switch (targetAction) {

      case "w":
      var crash = new Audio("sounds/crash.mp3")
      crash.play()
        break;

      case "a":
      var kick = new Audio("sounds/kick-bass.mp3")
      kick.play()
        break;

      case "s":
      var snare = new Audio("sounds/snare.mp3")
      snare.play()
        break;

      case "d":
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play()
        break;

      case "j":
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play()
        break;

      case "k":
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play()
        break;

      case "l":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play()
        break;

    default: console.log(target);

  }
}

//********************************************************************************************

// THE BUTTON ANIMATION


function buttonAnimation(key) {
var pressedKey =  document.querySelector('.' + key);
  pressedKey.classList.add("pressed");

  setTimeout(function() {
    pressedKey.classList.remove("pressed")
  }, 100);
}
