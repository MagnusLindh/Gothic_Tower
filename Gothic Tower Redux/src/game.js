(function(){

//The canvas
var canvas = document.querySelector("canvas"); 
var drawingSurface = canvas.getContext("2d");
drawingSurface.imageSmoothingEnabled = false;

// Start listening to resize events and draw canvas.
//initialize();

//Game Level Maps
var map = []; // empty map

//Arrays to store the level maps
var levelMaps = [];

//A level counter
var levelCounter = 0;

//A timer to help delay the change time between levels
var levelChangeTimer = 0;

var levelMessages=['Why did they send me back in time this time again?',
                   'I just wanna stay home in my comfy sofa and relax.',
                   'What is the point of this useless level, anyway?',
                   'All they gave me was a lousy jetpack and a raygun.',
                   'Please, say this is the last level or I quit now.'];

//Level 1
var map0=[
  '0000000000000000000000000000000000000000',
  '0000000000000000aa0000000000003000aa0000',
  '000000000000000acda00000000000000acda000',
  '000000000000000abba00000000000000abba000',
  '000000000000000abba00000000000000abba000',
  '000000000000000abba000000aa000000abba000',
  '000000000000000abba00000acda00000abba000',
  '000000000000000abba0000acbbda0000abba000',
  '000000000000000abba0000afbbea0000abba000',
  '000100800000000abba00000afea00000abba000',
  '444444440000000abba000000aa000000abba000',
  '444444444000000abba00000000000000abba000',
  '444444444400000abba00000000000000abba000',
  '444444444440000aaaa00000000000000aaaa000',
  '4444444444440000000000080000000000000000',
  '4444444444444000000007777000000000000000',
  '4444444444444400000000000000000000000000',
  '4444444444444440200000000000800200000500',
  '4444444444444444444466666644444449994444',
  '4444444444444444444466666644444444444444',
  '4444444444444444444466666644444444444444',
  '4444444444444444444466666644444444444444',
  '4444444444444444444466666644444444444444',
  '4444444444444444444466666644444444444444'
];
levelMaps.push(makeMap(map0));

//Level 2
var map1=[
  '0000000000000000000000000000000000000000',
  '0000000000000000000030000000000000000500',
  '0000008000000000000aa0000000000000777777',
  '000007777000000000acda000000000000000000',
  '00000000000000000acbbda00000000000000000',
  '0000000000000000acbbbbda0000000008000000',
  '000000000000000acbbbbbbda000000777700000',
  '000000000080000afbbbbbbea000000000000000',
  '0000000077770000afbbbbea0000000000000000',
  '00000000000000000afbbea00000000000000000',
  '000000000000000000afea000000000008000000',
  '0000000000000000000aa0000000000077770000',
  '0000000000000020000000002000000000000000',
  '0000800000000444440000444440000000000000',
  '0007777000004444440000444444000000000000',
  '0000000000044444440000444444400000000000',
  '0000000000444440000000000444440000000000',
  '0100000004444440000000000444444000000000',
  '4444444444444440800000020444444444444444',
  '4444444444444444446666444444444444444444',
  '4444444444444444446666444444444444444444',
  '4444444444444444446666444444444444444444',
  '4444444444444444446666444444444444444444',
  '4444444444444444446666444444444444444444'
];
levelMaps.push(makeMap(map1));

//Level 2
var map2=[
  '0000000000aa0000000000000000aa0000000000',
  '000000000acda00000000000000acda000000000',
  '00000000acbbda000000000000acbbda00000000',
  '00000000abbbba000000000000abbbba00000000',
  '01000000abbbba000000000000abbbba00000500',
  '77777000abbbba000000000000abbbba00077777',
  '00000000abbbba000000200000abbbba00000000',
  '00000000abbbba000044444400abbbba00000000',
  '00000000abbbba000004444000abbbba00000000',
  '00000000abbbba000000440000abbbba00000000',
  '00000000abbbba003000440030abbbba00000000',
  '00000000abbbba000000440000abbbba00000000',
  '00000000abbbba000000440000abbbba00000000',
  '00000000abbbba000000440000abbbba00000000',
  '00000000abbbba000000440000abbbba00000000',
  '00000000abbbba000000440000abbbba00000000',
  '00800000abbbba000000440000abbbba00000800',
  '77777000abbbba000000440000abbbba00077777',
  '00000000abbbba000000440000abbbba00000000',
  '00000000aaaaaa000000440000aaaaaa00000000',
  '0000000000800000000044000000080000000000',
  '0000000000000000000044000000000000000000',
  '0000000000000000000444400000000000000000',
  '9999999999999999994444449999999999999999'
];
levelMaps.push(makeMap(map2));

//Level 4
var map3=[
  '0000000000000000004444000000000000000000',
  '0000000000000000000440000000000000000000',
  '0000000000000000000440000000000000000000',
  '0000000000000000000440000000000000003000',
  '0010000000000000000440000000000000000050',
  '4444444400300000000440000000000044000444',
  '4444444440000000000440000000000444400044',
  '4444444444000000000440000000004444440044',
  '0000000444000000000440000000044440000000',
  '000aa000440000000004400000004444000aa000',
  '00acda0004000000000440000004444000acda00',
  '00abba0000004400000440000044440000abba00',
  '00abba0000044440804444080444400000abba00',
  '00abba0000004444444444444444000000abba00',
  '00abba0000000444444444444440000000abba00',
  '00abba0000000044444444444440000000abba00',
  '00abba0000000444400000000000000000abba00',
  '00abba0000000444000000000000040000abba00',
  '00aaaa0000000440000000000004444000aaaa00',
  '0008000000000400000000000000444400208000',
  '4444444444400000000000000000044444444444',
  '4444444444400000000000000000004444444444',
  '4444444444400000800000020000000444444444',
  '4444444444444444444444444444444444444444'

];
levelMaps.push(makeMap(map3));

//Level 5
var map4=[
  '0000000000000000000aa0000000000000000000',
  '000000000000000000acda000000000000000000',
  '00000000000000000acbbda00000000000000000',
  '0000000000000000acbbbbda0000000000000000',
  '001000000000000acbbbbbbda000000000000500',
  '44444440000000acbbbbbbbbda00000004444444',
  '0000004400000acbbbbbbbbbbda0000044000000',
  '0000000440000aaaaaaaaaaaaaa0000440000000',
  '0000000044000000000000000000004400000000',
  '0000000004400000000200000000044000000000',
  '0000000000000004444444444000000000000000',
  '0000000000000044000000004400000000000000',
  '0000000000000440000000000440000000000000',
  '0000000000004400000000000044000000000000',
  '0000000000044000000000000004400000000000',
  '0000000000440000000000000000440000000000',
  '0000000004400000000000000000044000000000',
  '0000028044002800000000000082004408200000',
  '6666444444444444446666444444444444446666',
  '6666666666666666666666666666666666666666',
  '6666666666666666666666666666666666666666',
  '6666666666666666666666666666666666666666',
  '6666666666666666666666666666666666666666',
  '6666666666666666666666666666666666666666'
];
levelMaps.push(makeMap(map4));

// convert map from string array to number array
function makeMap(inMap){
  var outMap=[...Array(24)].map(e => Array(36).fill(0));
  for (var i=0;i<24;i++){
    for (var j=0;j<40;j++){
      outMap[i][j]=parseInt(inMap[i][j],16);
    }
  }
  return outMap;
}

//Map code
var EMPTY = 0;
var CAT = 1;
var HOG = 2;
var STAR = 3;
var BOX = 4;
var DOOR = 5;
var WATER = 6;
var PLATFORM = 7;
var COIN = 8;
var LAVA = 9;

//The size of each tile cell
var TILESIZE = 16;

// Tile display size
var SIZE = 32;

//Sprites we need to access by name
var cat = null;
var door = null;
var gameOverMessage = null;

//The number of rows and columns
var ROWS = 24;
var COLUMNS = 40;

//The number of columns on the tilesheet
var tilesheetColumns = 16;

//Arrays to store the game objects
var sprites = [];
var hogs = [];
var boxes = [];
var messages = [];
var waters = [];
var coins = [];
var lavas = [];
var shots = [];
var stars = [];
var bloods = [];
var flames = [];

var assetsToLoad = [];
var assetsLoaded = 0;

//Load the tilesheet image
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "../images/Gothic.png";
assetsToLoad.push(image);

//Game variables
var score = 0;
var shotTimer = 0;
var exit = false;
var dead = false;
var complete = false;

//Game constants
var shotSpeed = 3;
var shotDelay = 60;
var hogSpeed = 1;
var starSpeed = 1;
var shotDist=200;
var scoreNeeded = 0;
var bloodSpeed = 10;
var bloodGravity = 0.2;
var flameSpeed=5;
var flameLife=30; //multiple of 3
var bd_scrollfactor = 0.9;

//Game states
var LOADING = 0;
var BUILD_MAP = 1;
var PLAYING = 2;
var OVER = 3;
var LEVEL_COMPLETE = 4;
var TITLE = 5;
var gameState = LOADING;

//Key codes
var RIGHT = 39;
var LEFT = 37;
var UP = 38;
var DOWN = 40;
var FIRE = 88;
var THRUST = 90;
var RESET = 82;

//Buttons
var moveRight = false;
var moveLeft = false;
var moveUp = false;
var moveDown = false;
var thrust = false;
var fire = false;
var resetLevel = false;

//--- The gameWorld object
var gameWorld = 
{
  x: 0,
  y: 0,
  width: map0[0].length * SIZE,
  height: map0.length * SIZE,
};

//--- The camera object
var camera = 
{
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,
  
  //The camera's inner scroll boundaries
  rightInnerBoundary: function()
  {
    return this.x + (this.width / 2) + (this.width / 4);
  },
  leftInnerBoundary: function()
  {
    return this.x + (this.width / 2) - (this.width / 4);
  },
  topInnerBoundary: function()
  {
    return this.y + (this.height / 2) - (this.height / 4);
  },
  bottomInnerBoundary: function()
  {
    return this.y + (this.height / 2) + (this.height / 4);
  }
};

//Center the camera over the gameWorld
camera.x = (gameWorld.x + gameWorld.width / 2) - camera.width / 2;
camera.y = (gameWorld.y + gameWorld.height / 2) - camera.height / 2;

//Add keyboard listeners
window.addEventListener("keydown", function(event)
{
  switch(event.keyCode)
  {   
    case LEFT:
      moveLeft = true;
      break;  
	    
    case RIGHT:
      moveRight = true;
      break; 
	  
    case UP:
      moveUp = true;
      break;
    
    case DOWN:
      moveDown = true;
      break;

    case FIRE:
      fire = true;
      break;

    case THRUST:
      thrust = true;
      break;

    case RESET:
      resetLevel = true;
      break;
  }

  event.preventDefault();
}, false);

window.addEventListener("keyup", function(event)
{
  switch(event.keyCode)
  {   
    case LEFT:
      moveLeft = false;
      break;  
	    
    case RIGHT:
      moveRight = false;
      break; 
	    
    case UP:
      moveUp = false;
      break; 

    case DOWN:
      moveDown = false;
      break; 

    case FIRE:
      fire = false;
      break;  

    case THRUST:
      thrust = false;
      break;
  }
}, false);

// Create text objects
createOtherObjects();

const FPS = 60;
let prevTick = 0; 

//Start the game animation loop
update();

function update()
{ 
  requestAnimationFrame(update, canvas);

  // clamp to fixed framerate
  let now = Math.round(FPS * Date.now() / 1000);
  if (now == prevTick) return;
  prevTick = now;

  //Reset game
  if (resetLevel && gameState!=LEVEL_COMPLETE){
    resetLevel=false;
    levelCounter--;
    gameState=LEVEL_COMPLETE;
    // Return to first level if all levels have been completed
    if (complete){
      levelCounter=-1;
      complete=false;
    }
    zzfx(...[,,621,.02,.01,1,1,.38,,4.2,,,,,21,,,,.05]); // Random 816
  }

  //Change what the game is doing based on the game state
  switch(gameState)
  {
    case LOADING:
      console.log("loading...");
      break;
      
    case BUILD_MAP:
      map = [...levelMaps[levelCounter]];
      buildMap(map,10,16);
      buildMap(map,1,9);
      gameState = PLAYING;
      break;
    
    case PLAYING:
      playGame();
      break;

    case LEVEL_COMPLETE:
      levelComplete();
      break;
    
    case OVER:
      endGame();
      break;

    case TITLE:
      showTitle();
  }
  
  //Render the game
  render();
}

function showTitle(){
  titleMessage.visible = true;
  gameOverMessage.text = "Press x to play.";
  gameOverMessage.visible = true;
  infoMessage.visible = true;
  authorMessage.visible = true;
  if (fire){
    titleMessage.visible = false;
    gameOverMessage.visible = false;
    infoMessage.visible = false;
    authorMessage.visible = false;
    levelCounter--;
    gameState = LEVEL_COMPLETE;
  }
}

function levelComplete()
{
  // show level complete
  gameOverMessage.visible = true;
  gameOverMessage.fillStyle = "white";
  gameOverMessage.text = "Get ready for level " + (levelCounter + 2);

  infoMessage.visible = true;
  infoMessage.fillStyle = "white";
  infoMessage.text = levelMessages[levelCounter+1];
 
  //Update the timer that changes the level by one
  levelChangeTimer++;
  
  //Load the next level after 120 frames
  if(levelChangeTimer === 120)
  {
    loadNextLevel();
  }
  
  function loadNextLevel()
  {
    //Reset the timer that changes the level
    levelChangeTimer = 0;
		
	//Update the levelCounter by 1
    levelCounter++;
  
    //Load the next level if there is one or end the game if there isn't
    if(levelCounter < levelMaps.length)
    {
      //Clear the arrays of objects
      sprites = [];
      hogs = [];
      boxes = [];
      waters = [];
      coins = [];
      lavas = [];
      shots = [];
      stars = [];
      bloods = [];
      flames = [];
	    
      //Reset any gameVariables
      scoreNeeded = 0;
      score=0;
      dead=false;
      exit=false;
	    
      //Re-center the camera
      camera.x = (gameWorld.x + gameWorld.width / 2) - camera.width / 2;
      camera.y = (gameWorld.y + gameWorld.height / 2) - camera.height / 2;
	    
      gameOverMessage.visible = false;
      infoMessage.visible = false;

      //Build the maps for the next level
      gameState = BUILD_MAP;
    }
    else
    {
      gameState = OVER;
    }
  }
}

function loadHandler()
{ 
  assetsLoaded++;
  if(assetsLoaded === assetsToLoad.length)
  {
    //Remove the load handlers
    image.removeEventListener("load", loadHandler, false);
        
    //Build the map 
    gameState = TITLE;
  }
}

function buildMap(levelMap,tileStart,tileStop)
{
  for(var row = 0; row < ROWS; row++) 
  {	
    for(var column = 0; column < COLUMNS; column++) 
    { 
      var currentTile = levelMap[row][column];
    
      if(currentTile != EMPTY && currentTile>=tileStart && currentTile<=tileStop)
      {
        //Find the tile's x and y position on the tile sheet
        var tilesheetX = Math.floor((currentTile - 1) % tilesheetColumns) * TILESIZE; 
        var tilesheetY = Math.floor((currentTile - 1) / tilesheetColumns) * TILESIZE;
        
        var temp = Object.create(spriteObject);
            temp.sourceX = tilesheetX;
            temp.sourceY = tilesheetY;            
            temp.x = column * SIZE;
            temp.y = row * SIZE;

        switch (currentTile)
        {
          case CAT:
            temp.dx=1;
            temp.dy=0;
            cat=temp;
            sprites.push(temp);
            break;
            
          case HOG:
            temp.vx = hogSpeed;
            temp.shotTimer = 0;
            sprites.push(temp);
            hogs.push(temp);
            break;

          case STAR:
            temp.vy = starSpeed;
            temp.shotTimer = 0;
            sprites.push(temp);
            stars.push(temp);
            break;
          
          case BOX:
            temp.platform = false;
            sprites.push(temp);
            boxes.push(temp);
            break;         
          
          case DOOR:
            door=temp;
            sprites.push(door);
            break; 

          case WATER:
            sprites.push(temp);
            waters.push(temp);
            break;

          case PLATFORM:
            temp.platform = true;
            sprites.push(temp);
            boxes.push(temp);
            break;     
          
          case COIN:
            sprites.push(temp);
            coins.push(temp);
            scoreNeeded++;
            break;

          case LAVA:
            sprites.push(temp);
            lavas.push(temp);
            break;
            
          default:
            temp.backdrop = true;
            sprites.push(temp);       
        }
      }
    }
  }
}

function createOtherObjects()
{

  titleMessage = Object.create(messageObject);
  titleMessage.x = 100;
  titleMessage.y = 50;
  titleMessage.font = "bold 40px Georgia";
  titleMessage.fillStyle = "red";
  titleMessage.text = "Gothic Tower Redux";
  titleMessage.visible = false;
  messages.push(titleMessage);
  
  gameOverMessage = Object.create(messageObject);
  gameOverMessage.x = 180;
  gameOverMessage.y = 150;
  gameOverMessage.font = "bold 30px Georgia";
  gameOverMessage.fillStyle = "olive";
  gameOverMessage.text = "";
  gameOverMessage.visible = false;
  messages.push(gameOverMessage);

  infoMessage = Object.create(messageObject);
  infoMessage.x = 80;
  infoMessage.y = 200;
  infoMessage.font = "bold 20px Georgia";
  infoMessage.fillStyle = "olive";
  infoMessage.text = "Play with: z - thrust, x - fire, arrows - steering.";
  infoMessage.visible = false;
  messages.push(infoMessage);

  authorMessage = Object.create(messageObject);
  authorMessage.x = 70;
  authorMessage.y = 300;
  authorMessage.font = "bold 20px Georgia";
  authorMessage.fillStyle = "maroon";
  authorMessage.text = "By Magnus Lindh for the js13k Game Jam 2023.";
  authorMessage.visible = false;
  messages.push(authorMessage);
}

function playGame()
{ 

  // Dead means game over if not reset
  if (dead && !resetLevel){
    gameState=OVER;
    zzfx(...[1.48,,581,.05,.3,.43,1,.21,,,-19,.1,.03,,,,.06,.48,.22]); // Powerup 1036
  }

  //--- The cat 
  cat.accelerationX = 0; 
  cat.accelerationY = 0;

  //-- The waters
  cat.friction = cat.frictionInAir;
  cat.isInWater = false;
  for (var i=0;i<waters.length;i++){
    if (hitTestCircle(cat,waters[i])){
      cat.friction = cat.frictionInWater;
      cat.isInWater = true;
      break;
    }
  }

  //Left
  if(moveLeft && !moveRight)
  {
    cat.accelerationX = -0.2;
    cat.dx=-1;
  }
  //Right
  if(moveRight && !moveLeft)
  {
    cat.accelerationX = 0.2;
    cat.dx=1;
  }
  //Jump
  if(moveUp && !moveDown && cat.isOnGround && !cat.isInWater)
  {
    cat.vy += cat.jumpForce;
    cat.isOnGround = false;
    zzfx(...[1.03,,137,,.06,.06,1,.49,5.7,.1,,,,.8,,,,.24,.07]); // Random 710
  }

  // thrust
  if (thrust && !cat.isInWater){
    cat.accelerationY=-0.3;
    createFlame(cat.x+SIZE/2-SIZE/4,cat.y+SIZE-SIZE/4,Math.random()-0.5,flameSpeed*Math.random());
    zzfx(...[.1,,511,.01,.23,.03,2,2.74,15,45,-6,.04,,.4,,.3,,,.01]); // Random 911
  }

  // fire if cat is not in water and shotTimer > shotDelay
  shotTimer++;
  if (fire && shotTimer>shotDelay && !cat.isInWater){
    shotTimer=0;
    //var norm = Math.sqrt(cat.dx*cat.dx + cat.dy*cat.dy);
    createShot(cat.x+cat.dx*SIZE,cat.y,cat.dx*shotSpeed,cat.dy*shotSpeed);
    zzfx(...[,,360,.01,.08,.02,1,.44,-3.7,,,,,.4,,,,.83,.06]); // Shoot 663
  }

  if (cat.isInWater){
    // move up in water
    if (moveUp && !moveDown){
      cat.accelerationY=-0.1;
    }

    // move down in water
    if (moveDown && !moveUp){
      cat.accelerationY=0.1;
    }
  }

  //Apply the acceleration
  cat.vx += cat.accelerationX; 
  cat.vy += cat.accelerationY;
  
  //Apply ground friction
  if(cat.isOnGround)
  {
    cat.vx *= cat.friction; 
  }

  //Apply water friction
  if (cat.isInWater){
    cat.vx *= cat.friction;
    cat.vy *= cat.friction;
  }
  
  //Apply gravity
  cat.vy += cat.gravity;

  //Apply floating
  if (cat.isInWater){
    cat.vy+=cat.floating;
  } 

  //Limit the speed in water

  cat.isInwater ? cat.speedLimit = cat.speedLimitInWater : cat.speedLimit = cat.speedLimitInAir;
  
  if (cat.vx > cat.speedLimit)
  {
    cat.vx = cat.speedLimit;
  }
  if (cat.vx < -cat.speedLimit)
  {
    cat.vx = -cat.speedLimit;
  } 
  if (cat.vy > cat.speedLimit * 2)
  {
    cat.vy = cat.speedLimit * 2;
  } 
  if (cat.vy < -cat.speedLimit * 2)
  {
    cat.vy = -cat.speedLimit * 2;
  }

  function addSpeed(obj){
    obj.x+=obj.vx;
    obj.y+=obj.vy;
  }
  
  //Move the cat
  addSpeed(cat);

  //Move the shots 
  for (var i=0;i<shots.length;i++){
    addSpeed(shots[i]);
  }

  //Move the blood and add gravity
  for (var i=0;i<bloods.length;i++){
    if (bloods[i].moving){
      addSpeed(bloods[i]);
      bloods[i].vy += bloodGravity;
    }
  }

   //Move the flames and decrease flame life
   for (var i=0;i<flames.length;i++){
    var flame=flames[i];
    if (flame.life>0){
      addSpeed(flame);
      flame.life--;
      if (flame.life==flameLife*2/3){
        flame.sourceX=240;
        flame.sourceY=8;
      }
      if (flame.life==flameLife/3){
        flame.sourceX=248;
        flame.sourceY=0;
      }
      if (flame.life==0){
        removeObject(flame, flames);
        removeObject(flame, sprites);
        flame.visible=false;
      }
    }
  }

  // remove flames if colliding with boxes
  for (var i=0;i<flames.length;i++){
    var flame=flames[i];
    for (var j=0;j<boxes.length;j++){
      if (hitTestCircle(flame,boxes[j])){
        removeObject(flame, flames);
        removeObject(flame, sprites);
        break;
      }
    }
  }

  //Check for collisions between blood and boxes
  for (var i=0;i<bloods.length;i++){
    if (bloods[i].moving){
      for (var j=0;j<boxes.length;j++){
        if (hitTestCircle(bloods[i],boxes[j])){
          bloods[i].moving=false;
        }
      }
    }
  }

  // remove shots if outside screen
  for (var i=0;i<shots.length;i++){
    var shot=shots[i];
    if (shot.x>gameWorld.width || shot.x<0 || shot.y>gameWorld.height || shot.y<0){
      removeObject(shot, shots);
      removeObject(shot, sprites);
    }
  }

  // end game if cat is colliding with shot
  for (var i=0;i<shots.length;i++){
    var shot=shots[i];
    if (hitTestCircle(shot,cat)){
      dead=true;
    }
  }


  // remove shots if colliding with boxes
  for (var i=0;i<shots.length;i++){
    var shot=shots[i];
    for (var j=0;j<boxes.length;j++){
      if (hitTestCircle(shot,boxes[j])){
        removeObject(shot, shots);
        removeObject(shot, sprites);
        break;
      }
    }
  }

  function monsterSplat(monsters){
    for (var i=0;i<shots.length;i++){
      var shot=shots[i];
      for (var j=0;j<monsters.length;j++){
        var monster=monsters[j];
        if (hitTestCircle(shot,monster) && monster.visible){
          removeObject(shot, shots);
          removeObject(shot, sprites);
          monster.visible=false;
          bloodSplat(monster.x,monster.y);
          zzfx(...[2.11,,970,.01,.22,.5,4,1.96,,,,,.06,1.4,,.5,.42,.3,.19]); // Explosion 1030
          break;
        }
      }
    }
  }

  // remove colliding shots and hogs
  monsterSplat(hogs);

  // remove colliding shots and stars
  monsterSplat(stars);

  function monsterShot(monsters){
    for (var j=0;j<monsters.length;j++){
      var monster=monsters[j];
      monster.shotTimer++;
      var dx = cat.x-monster.x;
      var dy = cat.y-monster.y;
      var d = Math.sqrt(dx*dx+dy*dy);
      if (d<shotDist && monster.shotTimer>shotDelay && monster.visible){
        createShot(monster.x+SIZE/4+dx/d*SIZE,monster.y+SIZE/4+dy/d*SIZE,dx/d*shotSpeed,dy/d*shotSpeed);
        monster.shotTimer=0;
        zzfx(...[,,49,.01,.03,.23,2,0,,,,,,,,.3,,.74]); // Random 709
      }
    }
  }

  // hog shooting
  monsterShot(hogs);

  // star shooting
  monsterShot(stars);
  
  //Check for a collision between the cat and the boxes
  for(var i = 0; i < boxes.length; i++)
  {
    var collisionSide = blockRectangle(cat, boxes[i], false, boxes[i].platform);
    
    if(collisionSide === "bottom" && cat.vy >= 0)
    {
      //Tell the game that the cat is on the ground if 
      //it's standing on top of a platform
      cat.isOnGround = true;
		
      //Neutralize gravity by applying its
      //exact opposite force to the character's vy
      cat.vy = -cat.gravity;
    }

    else if(collisionSide === "top" && cat.vy <= 0 && !boxes[i].platform)
    {
      cat.vy = 0;
    }
  
    else if(collisionSide === "right" && cat.vx >= 0 && !boxes[i].platform)
    {
      cat.vx = 0;
    }
    else if(collisionSide === "left" && cat.vx <= 0 && !boxes[i].platform)
    {
      cat.vx = 0;
    }
    if(collisionSide !== "bottom" && cat.vy > 0)
    {
      cat.isOnGround = false;
    }
  }

  //-- The heddgehogs
  for(var i = 0; i < hogs.length; i++)
  {
    var hog = hogs[i];
    
    //Move the hog if visible
    if (hog.visible){  
      addSpeed(hog);
    }
    
    //Check whether the hog is at a cell corner
    if(Math.floor(hog.x) % SIZE === 0
    && Math.floor(hog.y) % SIZE === 0)
    {
      //Change the hog's direction if there's no BOX under it
      
      //Find the hog's column and row in the array
	  var hogColumn = Math.floor(hog.x / SIZE);
	  var hogRow = Math.floor(hog.y / SIZE);
		  
	  if(hogRow < ROWS - 1)
	  { 
	    var thingBelowLeft = map[hogRow + 1][hogColumn - 1];
	    var thingBelowRight = map[hogRow + 1][hogColumn + 1];
		    
        if(thingBelowLeft !== BOX || thingBelowRight !== BOX)
        {
          hog.vx *= -1;
        }
      }
		  
      if(hogColumn > 0)
      {
        var thingToTheLeft = map[hogRow][hogColumn - 1];
        if(thingToTheLeft === BOX)
        {
          hog.vx *= -1;
        }
      } 
		  
      if(hogColumn < COLUMNS - 1)
      {
        var thingToTheRight = map[hogRow][hogColumn + 1];
        if(thingToTheRight === BOX)
        {
          hog.vx *= -1;
        }
      }     
    }
  }

  //-- The stars
  for(var i = 0; i < stars.length; i++)
  {
    var star = stars[i];
    
    //Move the star if visible
    if (star.visible){  
      addSpeed(star);
    }
    
    //Check whether the star is at a cell corner
    if(Math.floor(star.x) % SIZE === 0
    && Math.floor(star.y) % SIZE === 0)
    {
      //Change the star's direction if there's no BOX under it
      
        //Find the star's column and row in the array
      var starColumn = Math.floor(star.x / SIZE);
      var starRow = Math.floor(star.y / SIZE);
        
      if(starColumn == 0 || starColumn == COLUMNS-1 || starRow == 0 || starRow == ROWS-1){
        star.vy*=-1;
      } else { 
        if(starRow > 0)
        {
          var thingAbove = map[starRow-1][starColumn];
          if(thingAbove === BOX)
          {
            star.vy *= -1;
          }
        } 
        
        if(starRow < ROWS - 1)
        {
          var thingBelow = map[starRow+1][starColumn];
          if(thingBelow === BOX)
          {
            star.vy *= -1;
          }
        }     
      }
    }
  }
  
  //Collision between the cat and the hogs
  for(var i = 0; i < hogs.length; i++)
  {
    var hog = hogs[i];
    
    if(hog.visible && hitTestCircle(cat, hog))
    {
      if(cat.vy > 0)
      {
        blockCircle(cat, hog, true);
        hog.visible=false;
        bloodSplat(hog.x,hog.y);
      }
      else
      {
        dead=true;
      }
    }
  }
  
  //Collision between the cat and the door
  if(hitTestCircle(cat, door))
  {
    if (score === scoreNeeded){
      exit = true; 
      if(levelCounter < levelMaps.length-1){
        gameState = LEVEL_COMPLETE;
      } else {
        gameState = OVER;
      }
      zzfx(...[,,644,.05,.26,.24,2,.4,-2.6,-0.1,52,.05,.01,,,,,.52,.2]); // Powerup 1038
    }
  }

  //Collision between cat and coins
  for (var i=0;i<coins.length;i++){
    var coin = coins[i];
    if (hitTestCircle(cat,coin) && coin.visible){
      coin.visible=false;
      score++;
      zzfx(...[1.03,,1292,,.07,.14,1,1.6,,,351,.03,,,,.1,,.76,.03]); // Pickup 1061 
    }
  }

  //Collision between cat and lava
  for (var i=0;i<lavas.length;i++){
    var lava = lavas[i];
    if (hitTestCircle(cat,lava)){
      dead=true;
    }
  }
  
  //Screen boundaries
  //Left
  if (cat.x < 0)
  {
    cat.vx = 0;
    cat.x = 0;
  }
  //Up
  if (cat.y < 0)
  {
    cat.vy = 0;
    cat.y = 0;
  }
  //Right
  if (cat.x + cat.width > gameWorld.width)
  {
    cat.vx = 0;
    cat.x = gameWorld.width - cat.width;
  }
  //Down
  if (cat.y + cat.height > gameWorld.height)
  {
    cat.vy = 0;
    cat.y = gameWorld.height - cat.height;
    cat.isOnGround = true;
    cat.vy = -cat.gravity;
  }

  //Scroll the camera
  if(cat.x < camera.leftInnerBoundary())
  {
    camera.x = Math.floor(cat.x - (camera.width / 4));
  }
  if(cat.y < camera.topInnerBoundary())
  {
    camera.y = Math.floor(cat.y - (camera.height / 4));
  }
  if(cat.x + cat.width > camera.rightInnerBoundary())
  {
    camera.x = Math.floor(cat.x + cat.width - (camera.width / 4 * 3));
  }
  if(cat.y + cat.height > camera.bottomInnerBoundary())
  {
    camera.y = Math.floor(cat.y + cat.height - (camera.height / 4 * 3));
  }
  
  //The camera's gameWorld boundaries
  if(camera.x < gameWorld.x)
  {
    camera.x = gameWorld.x;
  }
  if(camera.y < gameWorld.y)
  {
    camera.y = gameWorld.y;
  }
  if(camera.x + camera.width > gameWorld.x + gameWorld.width)
  {
    camera.x = gameWorld.x + gameWorld.width - camera.width;
  }
  if(camera.y + camera.height > gameWorld.height)
  {
    camera.y = gameWorld.height - camera.height;
  }  
}

function removeObject(objectToRemove, array) 
{ 
  var i = array.indexOf(objectToRemove);
  if (i !== -1)
  {
    array.splice(i, 1);
  }
}

function bloodSplat(x,y){
  for (var i=0;i<10;i++){
    createBlood(x,y,(Math.random()-0.5)*bloodSpeed,(Math.random()-0.5)*bloodSpeed);
  }
}

function tempSprite(x,y,vx,vy){
  var temp = Object.create(spriteObject);
  temp.sourceWidth = 8;
  temp.sourceHeight = 8;
  temp.width = 16;
  temp.height = 16;
  temp.x = x;
  temp.y = y;
  temp.vx = vx;
  temp.vy = vy;
  return temp;
}

function createFlame(x,y,vx,vy){
  var temp = tempSprite(x,y,vx,vy);
  temp.sourceX = 248;
  temp.sourceY = 8;
  temp.life=flameLife;
  sprites.push(temp);
  flames.push(temp);
}

function createBlood(x,y,vx,vy){
  var temp = tempSprite(x,y,vx,vy);
  temp.sourceX = 248;
  temp.sourceY = 8;
  temp.moving=true;
  sprites.push(temp);
  bloods.push(temp);
}

function createShot(x,y,vx,vy){
  var temp = tempSprite(x,y,vx,vy);
  temp.sourceX = 240;
  sprites.push(temp);
  shots.push(temp);
}

function endGame()
{
  gameOverMessage.visible = true;
  gameOverMessage.fillStyle = "white";
    
  if(score === scoreNeeded && exit)
  {
    gameOverMessage.text = "Victory! Press r.";
    complete=true;
  }
  else
  {
     gameOverMessage.text = "Defeat! Press r.";
  }
}

function render()
{ 
  drawingSurface.globalAlpha = 1;
  drawingSurface.fillStyle="black";
  drawingSurface.fillRect(0, 0, canvas.width, canvas.height);

  
  //Display the sprites
  if(sprites.length !== 0)
  {
    for (var j=0;j<2;j++){
      if (j==0){
        // backdrop camera translation
        drawingSurface.translate(-camera.x*0.9-gameWorld.width*0.02, -camera.y*0.9-gameWorld.height*0.02);
      } else {
        // front camera translation
        drawingSurface.translate(-camera.x, -camera.y);
      }
      for(var i = 0; i < sprites.length; i++)
      {
        var sprite = sprites[i];
        if(sprite.visible && ((sprite.backdrop && j==0) || (!sprite.backdrop && j==1)))
        {
          var f = 1/100000; // light fall-off coefficient
          var d = Math.pow(cat.x-sprite.x,2)+Math.pow(cat.y-sprite.y,2);
          if (j==1){
            drawingSurface.globalAlpha = Math.exp(-d*f);
          } else {
            drawingSurface.globalAlpha = 0.5;
          }

          drawingSurface.drawImage
          (
            image, 
            sprite.sourceX, sprite.sourceY, 
            sprite.sourceWidth, sprite.sourceHeight,
            Math.floor(sprite.x), Math.floor(sprite.y), 
            sprite.width, sprite.height
          ); 
        }
      }
      drawingSurface.resetTransform();
    }
  }

  //Display any game messages
  //drawingSurface.restore();
  if(messages.length !== 0)
  {
    drawingSurface.globalAlpha = 1;
    for(var i = 0; i < messages.length; i++)
    {
      var message = messages[i];
      if(message.visible)
      {
         drawingSurface.font = message.font;  
         drawingSurface.fillStyle = message.fillStyle;
         drawingSurface.textBaseline = message.textBaseline;
         drawingSurface.fillText(message.text, message.x, message.y);  
	  }
	}
  }
}

}());
