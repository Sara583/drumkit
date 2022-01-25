let drumNumber = document.querySelectorAll(".drum").length;




  for (var i = 0; i < drumNumber; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  var buttonInnerHTML = this.innerHTML;

 makeSound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);

    });

}
//document. is used to make intire web page listen to event
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.Key);
});
//function is made to generalize the above
let makeSound=(key) =>{

  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      this.style.color = "white";
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      this.style.color = "blue";
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      this.style.color = "grey";
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      this.style.color = "gold";
      break;
    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      this.style.color = "black";
      break;
    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      this.style.color = "white";
      break;
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      this.style.color = "white";
      break;
    default:
      console.log(buttonInnerHTML);

  }
}

let buttonAnimation=(currentKey) =>{
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

}
