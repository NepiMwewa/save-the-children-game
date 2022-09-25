//--- The sprite object

var spriteObject =
{
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 64,
  sourceHeight: 64,
  width: 64,
  height: 64,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  visible: true,
  scrollable: true,

  //Physics properties
  accelerationX: 0, 
  accelerationY: 0,
  lAccelerate: false,
  rAccelerate: false,
  uAccelerate: false,
  dAccelerate: false,
  speedY: 0,
  speedX: 0,
  pSpeedLimit: 3.5,
  nSpeedLimit: -2,
  sSpeedLimit: 2.5,
  msSpeedLimit: -2.5,
  friction: 0.90,
  bounce: -0.7,
  gravity: 0.3,
  acceleration: 0.1,
  rotation: 0,
  
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
  },
};

//--- The monster object

monsterObject = Object.create(spriteObject);
monsterObject.sourceX = 128;

monsterObject.angle = 0;
monsterObject.chaseRange = 400;
monsterObject.attackRange = 50;
monsterObject.speed = 1.5; 
monsterObject.rotationSpeed = 0.8;

monsterObject.alive = true;
   
monsterObject.update = function()
{ 
  this.sourceX = this.sourceX + this.sourceWidth + 10;
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
