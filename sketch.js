/***********************************************************************************
	SimpleStateMachine - TEMPLATE
	by Scott Kildall

	Template:

	(1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
	(2) Add custom drawing code to drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
	(3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section

	Also start your localhost before running this, otherwise no PNGs will display

------------------------------------------------------------------------------------
	The way it works — you don't need to know this for the template use
	* array of images gets loaded at startup
	* drawFunction is a VARIABLE that points to a function varible name
	* drawOne(), drawTwo(), etc. are set to be functions.
	* the the keys 1-5 will change the drawFunction variable

------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing for each of
		images the draw functions, but this is just for illustrative purposes

	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc

	- next step after that would be to put interfaces into an array that maps to
		the functions


***********************************************************************************/

// image variables
var livingRoomAssets = [];
var bedRoomAssets = [];
var officeAssets = [];
var diningRoomAssets = [];
var bathRoomAssets = [];
var garageAssets = [];

// instruction screen

var instructions = []; 

// variables used for instructions 
var midX; 
var startY;
var lineHeight = 48;

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  //living room images
  livingRoomAssets[0] = loadImage('assets/livingroom.png');
  livingRoomAssets[1] = loadImage('assets/livingroom_table.png');

  //bedroom images 
  bedRoomAssets[0] = loadImage('assets/bedroom.png');
  bedRoomAssets[1] = loadImage('assets/bedroom_bed.png');

  //office images
  officeAssets[0] = loadImage('assets/office.png');
  officeAssets[1] = loadImage('assets/office_lamp.png');

  //dining room images
  diningRoomAssets[0] = loadImage('assets/diningroom.png');
  diningRoomAssets[1] = loadImage('assets/diningroom_table.png');

  //bathroom images
  bathRoomAssets[0] = loadImage('assets/bathroom.png');
  bathRoomAssets[1] = loadImage('assets/bathroom_tub.png');
 
  //garage images 
  garageAssets[0] = loadImage('assets/garage.png');
  garageAssets[1] = loadImage('assets/garage_tesla.png');
}


function loadInstructionsArray() {
  instructions[0] = "Press 1 for relaxing"; 
  instructions[1] = "Press 2 for enlightening"; 
  instructions[2] = "Press 3 for calm"; 
  instructions[3] = "Press 4 for cheerful";
  instructions[4] = "Press 5 for comforting"
  instructions[5] = "Press s for the mood states splash screen"; 
  instructions[6] = "When on the splash screen click to get the instructions screen or press i"; 
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(1280, 720);

// loading all arrays 
  loadInstructionsArray(); 
  midX = width/2;
  startY = 60;

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = drawlivingRoom;
}

  //Very simple, sets the background color and calls your state machine function
function draw() {
  drawFunction();
}

//-- drawOne() will draw the image at index 0 from the array
drawlivingRoom = function() {
   image(livingRoomAssets[0],width/2, height/2);
   image(livingRoomAssets[1],120, 609);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   image(images[1],width/2, height/2);

   fill(240,120,0);
   text("enlightening", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
   image(images[2],width/2, height/2);

   fill(40,230,120);
   text("calm", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
   image(images[3],width/2, height/2);

   fill(255,255,178);
   text("cheerful", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawFive = function() {
   image(images[4],width/2, height/2);

   fill(230,50,50);
   text("comforting", width/2, height - gTextOffset);
}

//-- drawSplash() will draw the image at index 4 from the array
drawSplash = function() {
   image(images[5],width/2, height/2);
}

// this will display instructions screen
drawInstructions = function() {
  for( let i = 0; i < instructions.length; i++ ) {
    fill(255); 
    text( instructions[i], midX, startY + (i * lineHeight) )
  }
}


// /

// //========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( key === '1' ) {
  	drawFunction = drawOne;
  }
  else if( key === '2' ) {
  	drawFunction = drawTwo;
  }
  else if( key === '3' ) {
  	drawFunction = drawThree;
  }
  else if( key === '4' ) {
  	drawFunction = drawFour;
  }
  else if( key === '5' ) {
  	drawFunction = drawFive;
  }
  else if( key == 's') {
    drawFunction = drawSplash; 
  }
  else if( key == 'i'){
  	drawFunction = drawInstructions;
  }
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = drawInstructions;
  }
}