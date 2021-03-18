function preload() {
  background1 = loadImage("Images/backgroundImage1.jpg")
  startButtonImage = loadImage("images/StartButton.png")
}
function setup() {
  createCanvas(1280,610);
  start = createSprite(900, 270,)
  start.addImage(startButtonImage)
  start.scale = 0.7

}

function draw() {
  background(background1); 
textSize(55) 
fill("black")
strokeWeight(4)
stroke("pink")
textFont("Curlz MT")
textStyle(BOLDITALIC)
text("Hey! Wanna learn a thing or two about banking!!", 120, 200);


textSize(35) 
fill("black")
strokeWeight(2)
stroke("pink")
textFont("Curlz MT")
textStyle(BOLDITALIC)
text("What are you waiting for?? Press ", 340, 280)
drawSprites();
}


