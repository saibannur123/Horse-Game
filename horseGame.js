/***************************************************************************************
* Name:       		The Lost Horse 
* Author:     		Sai Bannur & Nattan Telmer
* Date:       	 	June, 17, 2019
* Purpose:    		To make a fun horse game where little girls would love to play
* Compatibility: 	Does not work on Internet Explorer
****************************************************************************************/


var level;
var canvas;
var component;
var myBackground;
var boundaryLeft;				
var boundaryRight
var obstacle1;
var obstacle2;
var obstacle3;
var obstacle4;
var obstacle5;
var obstacle6;
var obstacle7;
var obstacle8;
var obstacle9;
var barn;
var myDeaths;
var fails = 0;
var alien;
var alien3;
var displayLevel = 0;
var enemyMove = false;
var gamePiece;
var interval;


// Called when page loads, draws the canvas and starts game interval
function drawCanvas(){
	 
	canvas = document.getElementById("canvas");
	//set canvas size
	this.canvas.width = 1000;
	this.canvas.height = 600;
	ctx = canvas.getContext("2d");
	interval = setInterval(updateScreen, 20);
	
}//drawCanvas

// Level selection, draws each level, draws game components, and tracks keyup and keydown
function gamePlay(selLevel){
	
	level = selLevel;
	
	document.getElementById("canvas").style.display = "block";
	document.getElementById("title").style.display = "none";
	document.getElementById("gameOver").style.display = "none";
	document.getElementById("menus").style.display = "none";
	document.getElementById("level1").style.display = "none";
	document.getElementById("level2").style.display = "none";
	document.getElementById("level3").style.display = "none";
	document.getElementById("level4").style.display = "none";
	
	//reset canvas background image
	document.body.style.backgroundImage = "none";
	
	switch(level){
		case 1: 
			level = 1;
			gamePiece = new component(75, 50, "images/orange_horse_right1.png", 5, 50, "image");
			myBackground = new component(1000, 600, "images/dessert.jpg", 0, 0, "image");
			obstacle1 = new component(185, 400, "brown", 170, 0, "obstacle1", 3);
			obstacle2 = new component(185, 400, "brown", 570, 200, "obstacle2", 3);
			barn = new component(130, 130, "images/barn.png", 820, 480, "image");
			alien = new component(50, 50, "images/evil.png", 400, 170, "image");
			alien2 = new component(50, 50, "images/evil.png", 790, 180, "image");
		break;
		
		case 2: 
		level = 2;
			gamePiece = new component(75, 50, "images/orange_horse_right1.png", 900, 80, "image");
			obstacle1 = new component(1000, 20, "brown", 200, 200, "obstacle1", 3);
			obstacle2 = new component(800, 20, "brown", 0, 400, "obstacle2", 3);
			myBackground = new component(1000, 600, "images/purple.jpg", 0, 0, "image");
			barn = new component(130, 130, "images/barnRight.png", -10, 450, "image");
			alien = new component(50, 50, "images/redBlob.png", 0, 170, "image");
			alien2 = new component(50, 50, "images/redBlob.png", 790, 380, "image");
		break;
		
		case 3: 
		level = 3;
			gamePiece = new component(75, 50, "images/orange_horse_right1.png", 900, 80, "image");
			obstacle1 = new component(1000, 20, "brown", 200, 200, "obstacle1", 3);
			obstacle2 = new component(800, 20, "brown", 0, 400, "obstacle2", 3);
			obstacle3 = new component(20,  100, "brown", 580, 200, "obstacle2", 3);
			obstacle4 = new component(20,  100, "brown", 700, 320, "obstacle2", 3);
			obstacle5 = new component(20,  100, "brown", 470, 320, "obstacle2", 3);
			obstacle6 = new component(20,  100, "brown", 320, 200, "obstacle2", 3);
			obstacle7 = new component(20,  100, "brown", 320, 400, "obstacle2", 3);
			obstacle8 = new component(20,  100, "brown", 500, 500, "obstacle2", 3);
			obstacle9 = new component(20,  100, "brown", 670, 400, "obstacle2", 3);
			myBackground = new component(1000, 600, "images/snow.jpg", 0, 0, "image");
			barn = new component(130, 130, "images/barnRight.png", -10, 450, "image");
			alien = new component(70, 70, "images/snowman.png", 0, 170, "image");
			alien2 = new component(70, 70, "images/snowman.png", 790, 380, "image");
		break;
		
		case 4: 
		level = 4;
			gamePiece = new component(75, 50, "images/orange_horse_left1.png", 930, 285, "image");
			obstacle1 = new component(800, 20, "brown", 100, 100, "obstacle1", 3);
			obstacle2 = new component(20, 400, "brown", 100, 100, "obstacle2", 3);
			obstacle3 = new component(800,  20, "brown", 100, 500, "obstacle2", 3);
			obstacle4 = new component(20,  180, "brown", 900, 100, "obstacle2", 3);
			obstacle6 = new component(20,  180, "brown", 900, 340, "obstacle2", 3);
			obstacle5 = new component(20,  200, "brown", 270, 120, "obstacle2", 3);
			obstacle7 = new component(20,  200, "brown", 720, 200, "obstacle2", 3);
			obstacle8 = new component(20,  200, "brown", 540, 200, "obstacle2", 3);
			obstacle9 = new component(20,  200, "brown", 370, 200, "obstacle2", 3);
			myBackground = new component(1000, 600, "images/dirt.jpg", 0, 0, "image");
			barn = new component(100, 100, "images/barnDown.png", 150, 160, "image");
			alien = new component(50, 50, "images/evil.png", 190, 300, "image");
			alien2 = new component(50, 50, "images/evil.png", 600, 410, "image");
			
	}//switch
	
	myDeaths = new component("30px", "Consolas", "black", 800, 40, "text");
	displayLevel = new component("30px", "Consolas", "black", 100, 40, "text");
	
	boundaryRight = new component(1, 600, "none", 1000, 0);
	boundaryLeft = new component(1, 600, "none", -10, 0);
	boundaryTop = new component(1000, 1, "none", 0, 0);
	boundaryBottom = new component(1000, 1, "none", 0, 600);
	
	boundaryTop.update();
	boundaryRight.update();
	boundaryLeft.update();
	boundaryBottom.update();
	
	 window.addEventListener('keydown', function (e) {
     gamePlay.keys = (gamePlay.keys || []);
     gamePlay.keys[e.keyCode] = true;
    })
    
	window.addEventListener('keyup', function (e) {
     gamePlay.keys[e.keyCode] = false; 
    })
	

}//gamePlay


// Loads all the components, update the movements of each obstacle, and checks collision
// Code from  W3 Tutorial, HTML game example
function component(width, height, color, x, y, type) {
 
	this.type = type;
	
	if (type == "image") {
		this.image = new Image();
		this.image.src = color;
    } //if
  
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y; 
 
	this.newPos = function() {
        
		this.x += this.speedX;
        this.y += this.speedY;
		
		if(level == 1 && alien.x >= 500 && alien2.x >= 800){
			enemyMove = true;
		}else if(level == 1 && alien.x <= 400 && alien2.x <= 770){
			enemyMove = false;
		} // else if
		
		if( level == 3 && alien.x >= 170 && alien2.x >= 840 || level == 2 && alien.x >= 170 && alien2.x >= 840){
			enemyMove = true;
		}else if(level == 3 && alien.x <= 700 && alien2.x <= 790 || level == 2 && alien.x <= 700 && alien2.x <= 790){
			enemyMove = false;
		} // else if
		
		if(level == 4 && obstacle7.y >= 300 && obstacle8.y <= 120 && obstacle9.y >= 300){
			enemyMove = true;
		}else if(level == 4 && obstacle7.y <= 120 && obstacle8.y >= 300 && obstacle9.y <= 120){
			enemyMove= false;
		} // else if
		
	} // newPos
	
	
	this.update = function() {
	 
		if (type == "image") {
			ctx.drawImage(this.image, 
			this.x, 
			this.y,
			this.width, this.height);
		} else if (this.type == "text") {
			ctx.font = this.width + " " + this.height;
			ctx.fillStyle = color;
			ctx.fillText(this.text, this.x, this.y);
		}else{
			ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
		}// else
			 
	}//update function
	
  // detects collision with objects
	this.crashWith = function(otherobj) {
		
		var myleft = this.x;
		var myright = this.x + (this.width);
		var mytop = this.y;
		var mybottom = this.y + (this.height);
		var otherleft = otherobj.x;
		var otherright = otherobj.x + (otherobj.width);
		var othertop = otherobj.y;
		var otherbottom = otherobj.y + (otherobj.height);
		var crash = true;
			
		if ((mybottom < othertop) ||
			(mytop > otherbottom) ||
			(myright < otherleft) ||
			(myleft > otherright)) {
			crash = false;
			} //if
			
			return crash;
		}//crashWith function
  
} // component

//To make sure characters stay in the map
function checkBoundaryCollision(){	
	 if(gamePiece.crashWith(boundaryLeft)){
			gamePiece.speedX = 0.5;
	}//else if
	if(gamePiece.crashWith(boundaryRight)){
			gamePiece.speedX = -0.5;
	}//else if	
	if(gamePiece.crashWith(boundaryTop)){
			gamePiece.speedY = 0.5;
	}if(gamePiece.crashWith(boundaryBottom)){
			gamePiece.speedY = -0.5;
	}//else if
	
}//checkBoundaryCollision

// Updates the gamePlay
function updateScreen(){
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	gamePiece.speedX = 0;
    gamePiece.speedY = 0; 
   
   
	if (gamePlay.keys && gamePlay.keys[65]) {
		
		gamePiece.image.src = "images/orange_horse_left1.png";
		gamePiece.speedX = -5; 
		checkBoundaryCollision();
	} // if
	 
    if (gamePlay.keys && gamePlay.keys[68]) {
		
		gamePiece.image.src = "images/orange_horse_right1.png";
		gamePiece.speedX = 5; 
		checkBoundaryCollision();
	}// if
  
	if (gamePlay.keys && gamePlay.keys[87]) {
		
		gamePiece.image.src = "images/orange_horse_up1.png";
		gamePiece.speedY = -5; 
		checkBoundaryCollision();
	}// if
  
	if (gamePlay.keys && gamePlay.keys[83]) {
		
		gamePiece.image.src = "images/orange_horse_down1.png";
		gamePiece.speedY = 5; 
		checkBoundaryCollision();
	 } //if
   
    if (gamePiece.crashWith(obstacle1)) {
		fails++;
		restartLevel();
    }else if (gamePiece.crashWith(obstacle2)) {
		fails++;
		restartLevel();
   
   }else if (level == 3 && gamePiece.crashWith(obstacle3) ||
		level == 4 && gamePiece.crashWith(obstacle3)) {
		
		fails++;
		restartLevel();
 
	}else if (level == 3 && gamePiece.crashWith(obstacle4) ||
		level == 4 && gamePiece.crashWith(obstacle4)) {
		fails++;
		restartLevel();
	}else if (level == 3 && gamePiece.crashWith(obstacle5) ||
		level == 4 && gamePiece.crashWith(obstacle5)) {
		fails++;
		restartLevel();
	}else if (level == 3 && gamePiece.crashWith(obstacle6) ||
	    level == 4 && gamePiece.crashWith(obstacle6)) {
		fails++;
		restartLevel();
	}else if (level == 3 && gamePiece.crashWith(obstacle7)  ||
		level == 4 && gamePiece.crashWith(obstacle7)) {
		fails++;
		restartLevel();
	}else if (level == 3 && gamePiece.crashWith(obstacle8) ||
		level == 4 && gamePiece.crashWith(obstacle8)) {
		fails++;
		restartLevel();
	}else if (level == 3 && gamePiece.crashWith(obstacle9) ||
	     level == 4 && gamePiece.crashWith(obstacle9)) {
		 fails++;
		 restartLevel();
	}else if (gamePiece.crashWith(barn)){
		 level++;

		if(level > 4){
			restartGame();
		}else {
			
			gamePlay(level);
		} 
	
	}else if (gamePiece.crashWith(alien)) {
		fails++;
		restartLevel();
	} else if (gamePiece.crashWith(alien2)) {
		fails++;
		restartLevel();
	}else{

		if(enemyMove == false){
			alien.x += 1.9;
			alien2.x += 1.9;
		}else {
			alien.x += -1.9;
			alien2.x += -1.9;
		} //else
		
		if(level == 4 && enemyMove == false){
			obstacle7.y += 5.5;
			obstacle8.y += -5.5;
			obstacle9.y += 5.5;
		}else if(level == 4){
			obstacle7.y += -5.5;
			obstacle8.y += 5.5;
			obstacle9.y += -5.5;
		}// else if
	
	myBackground.update();
	obstacle1.update();
	obstacle2.update();
	barn.update();
	myDeaths.text = "FAILS: " + fails;
	myDeaths.update();
	displayLevel.text = "LEVEL: " + level;
	displayLevel.update();	
	gamePiece.newPos();
	gamePiece.update();
	alien.update();
	alien2.update();
	
	
	if(level == 3 || level == 4){
	obstacle3.update();
	obstacle4.update();
	obstacle5.update();
	obstacle6.update();
	obstacle7.update();
	obstacle8.update();
	obstacle9.update();
	}// if
		
	
	
	
	} //else
	
} // updateScreen


function restartLevel (){
	clearInterval(updateScreen);
	gamePlay(level);
	
} // restartLevel


function restartGame(){
fails = 0;

document.getElementById("canvas").style.display = "none";
document.getElementById("gameOver").style.display = "block";
document.getElementById("homes").style.display = "block";

}


// displays instructions page
function instruction(){

	document.body.style.backgroundSize = "cover";
	document.getElementById("instructions").style.display = "none";
	document.getElementById("instr").style.display = "block";
	document.getElementById("play").style.display = "none";
	document.getElementById("canvas").style.display = "none";
	document.body.style.backgroundImage = "url('images/menu.png')";
	document.getElementById("options").style.display = "none";
	document.getElementById("menus").style.display = "block";
	document.getElementById("level1").style.display = "none";
	document.getElementById("level2").style.display = "none";
	document.getElementById("level3").style.display = "none";
	document.getElementById("level4").style.display = "none";
}// instructions


// displays the start menu
function menu(){
	document.getElementById("gameOver").style.visibility = "hidden";	
	document.getElementById("homes").style.visibility = "hidden";	
	document.getElementById("instr").style.display = "none";
	document.getElementById("title").style.display = "block";
	document.body.style.backgroundImage = "url('images/menu.png')";
	document.body.style.backgroundSize = "cover";
	document.getElementById("instructions").style.display = "block";
	document.getElementById("options").style.display = "block";
	document.getElementById("play").style.display = "block";
	document.getElementById("menus").style.display = "none";
	document.getElementById("level1").style.display = "none";
	document.getElementById("level2").style.display = "none";
	document.getElementById("level3").style.display = "none";
	document.getElementById("level4").style.display = "none";
	document.getElementById("canvas").style.display = "none";
	
} // menu

// displays the credits
function options(){
	
	document.body.style.backgroundSize = "cover";
	document.getElementById("instructions").style.display = "none";
	document.getElementById("play").style.display = "none";
	document.getElementById("options").style.display = "none";
	document.getElementById("menus").style.display = "block";
	document.getElementById("level1").style.display = "none";
	document.getElementById("level2").style.display = "none";
	document.getElementById("level3").style.display = "none";
	document.getElementById("level4").style.display = "none";
}// instructions

// displays all available levels
function levelSelection(){
	document.body.style.backgroundSize = "cover";
	document.getElementById("instructions").style.display = "none";
	document.getElementById("play").style.display = "none";
	document.getElementById("options").style.display = "none";
	document.getElementById("level1").style.display = "block";
	document.getElementById("level2").style.display = "block";
	document.getElementById("level3").style.display = "block";
	document.getElementById("level4").style.display = "block";
	document.getElementById("menus").style.display = "block";
	
	
}// levelSelection

