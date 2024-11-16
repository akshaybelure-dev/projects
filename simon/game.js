
var buttonColours=["red","blue","green","yellow"]; 

var gamePattern=[];

var randomChosenColour=buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);


function nextSequence(){
  var randomNumber=Math.floor(Math.random()*4);
return randomNumber;
 
}

var flash=$("div[type='button']#"+randomChosenColour).fadeOut(100).fadeIn(100);






var audio = new Audio("sounds/"+randomChosenColour+".mp3");
audio.play();


  






