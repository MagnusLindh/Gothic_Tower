//--- The sprite object

var spriteObject =
{
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 16,
  sourceHeight: 16,
  width: 32,
  height: 32,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  visible: true,
  backdrop: false,
  
  //Physics properties
  accelerationX: 0, 
  accelerationY: 0, 
  speedLimit: 2, 
  friction: 0.96,
  bounce: -0.7,
  gravity: 0.2,
  floating: -0.2,
  frictionInAir: 0.96,
  frictionInWater: 0.9,
  speedLimitInAir: 2,
  speedLimitInWater: 1,
    
  //Platform game properties   
  isOnGround: undefined,
  isInWater: undefined,
  jumpForce: -4,

  //Getters
  centerX: function()
  {
    return this.x + (this.width / 2);
  },
  centerY: function()
  {
    return this.y + (this.height / 2);
  },
  halfWidth: function()
  {
    return this.width / 2;
  },
  halfHeight: function()
  {
    return this.height / 2;
  }
};

//--- The message object

var messageObject =
{
  x: 0,
  y: 0,
  visible: true,
  text: "Message",
  font: "normal bold 20px Helvetica",
  fillStyle: "red",
  textBaseline: "top"
};