/***********************************************************************************
	Rooms of My "Dream" House
	by Sean Ko

------------------------------------------------------------------------------------
	Notes:
	- this project includes arrays, state machines, and practice placing pngs in each state. 


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

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(1280, 800);

// Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

// set to one for startup
  drawFunction = drawlivingRoom;
}

//calls state machine function
function draw() {
  drawFunction();
}

//living room draw function
drawlivingRoom = function() {
   image(livingRoomAssets[0],width/2, height/2);
   image(livingRoomAssets[1],280, 680);
}

//bedroom draw function
drawbedRoom = function() {
   image(bedRoomAssets[0],width/2, height/2);
   image(bedRoomAssets[1],871, 582);
}

//office draw function
drawOffice = function() {
   image(officeAssets[0],width/2, height/2);
   image(officeAssets[1],width/2, 100);
}

//dining room draw function
drawdiningRoom = function() {
   image(diningRoomAssets[0],width/2, height/2);
   image(diningRoomAssets[1], 550, 518);
}

//bathroom draw function
drawbathRoom = function() {
   image(bathRoomAssets[0],width/2, height/2);
   image(bathRoomAssets[1],width/2, 660);
}

//garage draw function
drawgarage = function() {
   image(garageAssets[0],width/2, height/2);
   image(garageAssets[1], 400, 550);
}

// Change the drawFunction variable based on your interaction
function keyTyped() {
//living room nav options
  if( drawFunction === drawlivingRoom ) {
    if(key === '4') {
      drawFunction = drawdiningRoom;
    }
    else if(key === '6'){
      drawFunction = drawgarage;
  }
}
//bedroom nav options
  if( drawFunction === drawbedRoom ) {
    if(key === '5') {
      drawFunction = drawbathRoom;
    }
  }
//office room nav options
  if( drawFunction === drawOffice ) {
    if(key === '4') {
      drawFunction = drawdiningRoom;
    }
    else if(key === '5'){
      drawFunction = drawbathRoom;
  }
}
//dining room nav options
  if( drawFunction === drawdiningRoom ) {
    if(key === '1') {
      drawFunction = drawlivingRoom;
    }
    else if(key === '3'){
      drawFunction = drawOffice;
  }
}

//bathroom nav options
  if( drawFunction === drawbathRoom ) {
    if(key === '2') {
      drawFunction = drawbedRoom;
    }
    else if(key === '3'){
      drawFunction = drawOffice;
  }
}
 
//garage nav options
  if( drawFunction === drawgarage ) {
    if(key === '1') {
      drawFunction = drawlivingRoom;
    }
}
}
