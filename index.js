//document.querySelectorAll("button").addEventListener("click",function (){alert("I got Clicked")});
//using Anonymous function instead of named method handleClick()

// function handleClick()
// {alert("I got clicked");}

//DETECTING BUTTON PRESS ON SCREEN
var numberofdrumbutton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofdrumbutton; i++) {
  //document.querySelectorAll(".drum")[i].addEventListener("click",function (){alert("I got Clicked")});
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //this.style.color="white";
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

//DETECTING KEY PRESS ON KEYBOARD
document.addEventListener("keypress", function(event) //applies listener to entire document so that it listenes whenever key is pressed
  {
    makeSound(event.key); //event gives back the info of the particular key that was pressed
    buttonAnimation(event.key);
  });

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "k":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    default:
      console.log(this.innerHTML);
  }
}

function buttonAnimation(currentkey)
{
  var activeButton=document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");

  },100);
}
