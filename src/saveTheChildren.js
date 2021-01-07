(function(){

//The canvas
var canvas = document.querySelector("canvas"); 
var drawingSurface = canvas.getContext("2d");

//Game Level Maps
//Arrays to store the level maps
var levelMaps = [];
var levelGameObjects = [];

//A level counter
var levelCounter = 0;

//A timer to help delay the change time between levels
var levelChangeTimer = 0;

//Level 0

var map0 =
[
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,2],
[2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,3,2],
[2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2],
[2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2],
[2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,3,2],
[2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,1,1,3,3,2],
[2,2,1,1,1,1,1,1,2,2,2,1,1,2,2,3,1,1,1,1,1,1,1,3,2],
[2,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,1,1,1,1,1,1,1,3,2],
[2,1,1,1,1,1,1,2,2,2,2,2,2,2,1,3,1,1,1,1,1,1,1,3,2],
[2,1,1,3,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,3,2],
[2,1,1,3,3,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,3,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,3,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,3,2],
[2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,2],
[2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2],
[2,2,2,2,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2],
[2,2,2,2,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,2],
[2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,1,1,1,2],
[2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,2],
[2,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2],
[2,2,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2],
[2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

levelMaps.push(map0);

var gameObjects0 = 
[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

levelGameObjects.push(gameObjects0);

//Level 1
map1 = 
[
[2,2,2,2,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,1,1,1,1,1,2,2,2,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
[2,2,2,2,1,1,1,1,1,2,2,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
[2,1,2,2,1,1,1,1,1,2,1,1,1,1,1,1,2,2,2,2,2,2,1,1,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,2,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,3,3,3,1,1,2,2,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,3,3,3,1,1,1,1,1,1,1,1,2,2,2,2,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,3,3,1,1,1,1,1,1,2,2,2,2,2,2],
[2,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2],
[2,1,1,1,1,1,1,1,1,1,3,3,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2],
[2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,1,2,2,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,2,2],
[2,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
[2,1,1,1,1,2,2,2,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
[2,1,1,1,1,2,2,2,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
[2,1,1,1,1,1,2,2,2,1,1,1,1,1,3,3,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,3,3,3,1,1,1,2],
[2,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,3,3,1,1,1,1,2],
[2,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,2],
[2,1,1,3,3,3,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2],
[2,1,1,1,3,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,3,3,1,1,1,1,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];
//Push map1 into the leveMaps array
levelMaps.push(map1);

gameObjects1 = 
[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,5,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

//Push gameObjects1 into the levelGameObjects array
levelGameObjects.push(gameObjects1);

//Map code
var EMPTY = 0;
var GRASS = 1;
var CRATE = 3;
var MONSTER = 5;
var CHILD = 4;
var PLAYER = 6;
var TREE = 2;

//The size of each tile cell
var SIZE = 64;

//Sprites we need to access by name
var player = null;
var turret = null;
var gameDisplay = null;
var gameMessage = null;

//The number of rows and columns
var ROWS = map0.length;
var COLUMNS = map0[0].length;

//Arrays to store the game objects
var sprites = [];
var monsters = [];
var boxes = [];
var messages = [];
var children = [];
var bullets = [];

var assetsToLoad = [];
var assetsLoaded = 0;

//The mouse
var mouseX = 0;
var mouseY = 0;

//Hide the mouse
canvas.style.cursor = "crosshair";

//Load the tilesheet image
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "../images/SaveTheChildren.png";
assetsToLoad.push(image);

//The number of columns on the tilesheet
var tilesheetColumns = 4;

//Game variables
//Any game variables you need
var childrenSaved = 0;
var bulletTimer = 0;
var fireRate = 20;
var monstersKilled = 0;
var monstersToKill = 0;
EASING = 0.1;
var turretAngle = 0;

//Game states
var LOADING = 0;
var BUILD_MAP = 1;
var PLAYING = 2;
var OVER = 3;
var LEVEL_COMPLETE = 4;
var gameState = LOADING;

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

//Add listeners
window.addEventListener("keydown", function(event)
{
	switch (event.keyCode) 
  {
    case LEFT: 
      player.lAccelerate = true;
      break;
		
    case RIGHT: 
      player.rAccelerate = true;
      break;
		
    case UP:
      player.uAccelerate = true;
      break;

    case DOWN:
      player.dAccelerate = true;
  }
}
, false);

window.addEventListener("keyup", function(event)
{
	switch (event.keyCode) 
  {
    case LEFT: 
      player.lAccelerate = false;
      break;
		
    case RIGHT: 
      player.rAccelerate = false;
      break;
		
    case UP:
      player.uAccelerate = false;
      break;

    case DOWN:
     player.dAccelerate = false;
  }
}, false);

canvas.addEventListener("mousemove", function(event)
{ 
  //Find the mouse's x and y position.
  //Subtract the canvas's top and left offset
  mouseX = event.pageX - canvas.offsetLeft - 10;
  mouseY = event.pageY - canvas.offsetTop - 10;
}, false);

canvas.addEventListener("mousedown", function(event)
{ 
  
  if(gameState == PLAYING)
  {
				
	if(bulletTimer === fireRate)
	{

	  bulletTimer = 0;
	  //Create a bullet sprite
	  var bullet = Object.create(spriteObject);
	  bullet.sourceX = 210;
	  bullet.sourceY = 130;
	  bullet.sourceWidth = 24;
	  bullet.sourceHeight = 3;
	  bullet.width = 24;
	  bullet.height = 3;
	  
	  //Center it over the turret
	  var radius = 34;
		bullet.x 
		  = turret.x + turret.halfWidth() - bullet.halfWidth()
		  + (radius * Math.cos(turretAngle));
		  
		bullet.y 
		  = turret.y + turret.halfHeight() - bullet.halfHeight()
		  + (radius * Math.sin(turretAngle));
  
	  //Set its speed
	  bullet.vx = Math.cos(turretAngle) * 10;
	  bullet.vy = Math.sin(turretAngle) * 10;

	  bullet.rotation = turret.rotation;
	  //Push the bullet into both the sprites and bullets arrays
	  sprites.push(bullet);
	  bullets.push(bullet);
	}
  }
}, false);

//Arrow key codes
var UP = 87;
var DOWN = 83;
var RIGHT = 68;
var LEFT = 65;

//Start the game animation loop
update();

function update()
{ 
  //The animation loop
  requestAnimationFrame(update, canvas);
  
  //Change what the game is doing based on the game state
  switch(gameState)
  {
    case LOADING:
      console.log("loading...");
      break;
      
    case BUILD_MAP:
      buildMap(levelMaps[levelCounter]);
      buildMap(levelGameObjects[levelCounter]);
      monstersToKill = monsters.length
      createOtherSprites();
      lvlStart();
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
  }
  
  //Render the game
  render();
}

function levelComplete()
{

  if(levelCounter + 1 < levelMaps.length)
  {
  //Make the leveCompleteDisplay visible
  gameDisplay.visible = true;
  gameMessage.visible = true;

  gameMessage.text = "Next Area";
  }
  //Update the timer that changes the level by one
  levelChangeTimer++;
  
  //Load the next level after 60 frames
  if(levelChangeTimer === 120)
  {
    loadNextLevel();
  }
  
  function loadNextLevel()
  {
    //Reset the timer that changes the level
    if(levelCounter < levelMaps.length + 1)
    {
    levelChangeTimer = 0;

    gameDisplay.visible = null;
    gameMessage.visible = null;
    }
		
	//Update the levelCounter by 1
    levelCounter++;
  
    //Load the next level if there is one or end the game if there isn't
    if(levelCounter < levelMaps.length)
    {
      //Clear the arrays of objects
      
	  sprites = [];
	  monsters = [];
	  boxes = [];
	  children = [];
	  bullets = [];
	    
	  //Reset any gameVariables
	  childrenSaved = 0;
	  bulletTimer = 0;
	  monstersKilled = 0;
	  monstersToKill = 0;
	    
	  //Make sure the gameWorld size matches the size of the next level
      gameWorld.width = levelMaps[levelCounter][0].length * SIZE;
      gameWorld.height = levelMaps[levelCounter].length * SIZE;

      ROWS = levelMaps[levelCounter][0].length;
      COLUMNS = levelMaps[levelCounter].length;

      //Re-center the camera
      camera.x = (gameWorld.x + gameWorld.width / 2) - camera.width / 2;
      camera.y = (gameWorld.y + gameWorld.height / 2) - camera.height / 2;
	    
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
    gameState = BUILD_MAP;
  }
}

function buildMap(levelMap)
{
  for(var row = 0; row < ROWS; row++) 
  {	
    for(var column = 0; column < COLUMNS; column++) 
    { 
      var currentTile = levelMap[row][column];
    
      if(currentTile != EMPTY)
      {
        switch (currentTile)
        {
          case GRASS:
            var grass = Object.create(spriteObject);
            grass.sourceX = 0;
            grass.sourceY = 0;
            grass.x = column * SIZE;
            grass.y = row * SIZE;
            sprites.push(grass);
            break;
          
          case CRATE:
            var crate = Object.create(spriteObject);
            crate.sourceX = 140;
            crate.sourceY = 0;
            crate.x = column * SIZE;
            crate.y = row * SIZE;
            sprites.push(crate);
            boxes.push(crate);
            break;
          
          case TREE:
            var tree = Object.create(spriteObject);
            tree.sourceX = 70;
            tree.sourceY = 0;            
            tree.x = column * SIZE;
            tree.y = row * SIZE;
            sprites.push(tree);
            boxes.push(tree);
            break;
          
          case MONSTER:
            var monster = Object.create(monsterObject);
            monster.sourceX = 70;
            monster.sourceY = 130;
            monster.x = column * SIZE;
            monster.y = row * SIZE;
            //Make the monster choose a random start direction 
            //changeDirection(monster)          
            monsters.push(monster);
            sprites.push(monster);
            break; 
          
          case CHILD:
            var child = Object.create(spriteObject);
            child.sourceX = 0;
            child.sourceY = 70;
            child.sourceWidth = 48;
            child.sourceHeight = 48;
            child.width = 48;  
            child.height = 48;          
            child.x = column * SIZE + 8;
            child.y = row * SIZE + 8;
            children.push(child);
            sprites.push(child);
            break;
            
          case PLAYER:
            //The player
			player = Object.create(spriteObject);
			player.sourceX = 0;
			player.sourceY = 130;
			player.x = column * SIZE;
            player.y = row * SIZE;
			sprites.push(player);

			//The turret
			turret = Object.create(spriteObject);
			turret.x = player.x;
			turret.y = player.y;
			//sprites.push(turret);
            break;
        }
      }
    }
  }
}

function createOtherSprites()
{
//Create the inner meter and center
//it above the player
	innerMeter = Object.create(spriteObject);
	innerMeter.sourceY = 374;
	innerMeter.sourceWidth = 128;
	innerMeter.sourceHeight = 14;
	innerMeter.width = 128;
	innerMeter.height = 14;
	innerMeter.x = player.x;
	innerMeter.y = player.y;
	sprites.push(innerMeter);
	//Create the outer meter and position it
	//over the inner meter
	outerMeter = Object.create(spriteObject);
	outerMeter.sourceY = 360;
	outerMeter.sourceWidth = 128;
	outerMeter.sourceHeight = 14;
	outerMeter.width = 128;
	outerMeter.height = 14;
	outerMeter.x = innerMeter.x;
	outerMeter.y = innerMeter.y;
	sprites.push(outerMeter);

	for(var i = 0; i < monsters.length; i++)
	{
		innerMeter[i] = Object.create(spriteObject);
		innerMeter[i].sourceY = 374;
		innerMeter[i].sourceWidth = 128;
		innerMeter[i].sourceHeight = 14;
		innerMeter[i].width = 128;
		innerMeter[i].height = 14;
		innerMeter[i].x = monsters[i].x;
		innerMeter[i].y = monsters[i].y;
		sprites.push(innerMeter[i]);
	
		//Create the outer meter and position it
		//over the inner meter
		outerMeter[i] = Object.create(spriteObject);
		outerMeter[i].sourceY = 360;
		outerMeter[i].sourceWidth = 128;
		outerMeter[i].sourceHeight = 14;
		outerMeter[i].width = 128;
		outerMeter[i].height = 14;
		outerMeter[i].x = innerMeter[i].x;
		outerMeter[i].y = innerMeter[i].y;
		sprites.push(outerMeter[i]);
	}

  gameDisplay = Object.create(spriteObject);
  gameDisplay.sourceX = 0;
  gameDisplay.sourceY = 210;
  gameDisplay.sourceWidth = 317;
  gameDisplay.sourceHeight = 128;
  gameDisplay.width = 200;  
  gameDisplay.height = 128;            
  gameDisplay.x = camera.width / 2 - gameDisplay.width / 2;
  gameDisplay.y = camera.height / 2 - gameDisplay.height / 2;
  gameDisplay.visible = false;
  gameDisplay.scrollable = false;
  sprites.push(gameDisplay);
  
  gameMessage = Object.create(messageObject);
  gameMessage.x = gameDisplay.x + 20;
  gameMessage.y = gameDisplay.y + 25;
  gameMessage.font = "bold 30px Helvetica";
  gameMessage.fillStyle = "black";
  gameMessage.text = "";
  gameMessage.visible = false;
  messages.push(gameMessage);
}

function playGame()
{ 
	

//--- The player
  playerFunc();
  
//--- The monster
  monsterFunc();

//--- The camera
  camera.x = Math.floor(player.x - (camera.width / 2));
  camera.y = Math.floor(player.y - (camera.height / 2));
}

function playerFunc()
{
	 //Accelerate the player if the space key is pressed
	if(player.uAccelerate && !player.dAccelerate)
	{
	  //Increase the player's speed if it's under the speed limit
	  if(player.speedY < player.pSpeedLimit)
	  {
		  player.speedY += player.acceleration;
		}
		//Add some optional drag
		//player.speed *= player.friction; 
	}
	if(!player.uAccelerate && player.dAccelerate)
	{
	  //Increase the player's speed if it's under the speed limit
	  if(player.speedY > player.nSpeedLimit)
	  {
		  player.speedY -= player.acceleration;
		}
		//Add some optional drag
		//player.speed *= player.friction; 
	}

	if(player.uAccelerate && player.dAccelerate
     || !player.uAccelerate && !player.dAccelerate)
	{
		//Add friction to the speed if the player is 
		//not accelerating
		player.speedY *= player.friction; 
	}

	if(player.rAccelerate && !player.lAccelerate)
	{
	  //Increase the player's speed if it's under the speed limit
	  if(player.speedX < player.sSpeedLimit)
	  {
		  player.speedX += player.acceleration;
		}
		//Add some optional drag
		//player.speed *= player.friction; 
	}
	if(!player.rAccelerate && player.lAccelerate)
	{
	  //Increase the player's speed if it's under the speed limit
	  if(player.speedX > player.msSpeedLimit)
	  {
		  player.speedX -= player.acceleration;
		}
		//Add some optional drag
		//player.speed *= player.friction; 
	}

	if(player.lAccelerate && player.rAccelerate
     || !player.lAccelerate && !player.rAccelerate)
	{
		//Add friction to the speed if the player is 
		//not accelerating
		player.speedX *= player.friction; 
	}



	//Calculate the acceleration based on the playerAngle of rotation
	playerAngleF = player.rotation  * (Math.PI / 180); 
	playerAngleS =  (90 + player.rotation)  * (Math.PI / 180);
	
	player.accelerationX = player.speedY * Math.cos(playerAngleF); 
	player.accelerationY = player.speedY * Math.sin(playerAngleF);
	player.accelerationX += player.speedX * Math.cos(playerAngleS); 
	player.accelerationY += player.speedX * Math.sin(playerAngleS);

	//Update the player's velocity
	player.vx = player.accelerationX; 
	player.vy = player.accelerationY;
	
	//Move the player and set its screen boundaries
    player.x = Math.max(64, Math.min(player.x + player.vx, gameWorld.width - player.width - 64)); 
    player.y = Math.max(64, Math.min(player.y + player.vy, gameWorld.height - player.height - 64));
	
	//--- The turret
	turret.x = player.x;
	turret.y = player.y;
	
	//Find the angle between the center of the turret and the mouse
  turretAngle = Math.atan2(mouseY - turret.centerY() + camera.y,
  mouseX - turret.centerX() + camera.x);
	  
	//Convert the angle's radians into rotation degrees
  turret.rotation = turretAngle * (180 / Math.PI);
  player.rotation = turret.rotation;

  //--- The bullets
	if(bulletTimer < fireRate)
	{
	 bulletTimer++;
	}
	//Move the bullets
  for(var i = 0; i < bullets.length; i++)
  {
    var bullet = bullets[i];
    
    //Move it    
    bullet.x += bullet.vx;
    bullet.y += bullet.vy;

    //Check for collisions with the monster
    for(var q = 0; q < monsters.length; q++)
    {
    	if(hitTestCircle(bullet, monsters[q]) && monsters[q].alive)
    	{
    		monsters[q].chaseRange = 600;
    		monsters[q].speed = 3.5;
     	    //if bullet is touching monster, decress monsters hp
   			if(innerMeter[q].width > 1)
    		{
    		  innerMeter[q].width -= 45;
    		  innerMeter[q].sourceWidth -= 45;
    		}
   			 if(innerMeter[q].width < 0)
  			{
  			  monsterKilled(monsters[q], outerMeter[q], innerMeter[q]);
  			  //check if player has saved all the children and killed all the monters
  			  if(childrenSaved >= children.length && monstersKilled >= monstersToKill)
      		  {	
      		  	//if so change game state to level_complete
        		gameState = LEVEL_COMPLETE;
      	      }
	  	    }
   		   
      	//Remove the bullets from the arrays
     	removeObject(bullet, bullets);
      	removeObject(bullet, sprites);      
      	i--;
      	//break the loop so that the rest of this code won't continue
      	break;
    	}
   	}
   for(var q = 0; q < boxes.length; q++)
  {
   	 if(hitTestCircle(bullet, boxes[q]))
    	{
	      //Remove the bullet from the bullets array
	      removeObject(bullet, bullets);
	 
	      //Remove the bullet from the sprites array
	      removeObject(bullet, sprites);
	      
	      //Reduce the loop counter by 1 to compensate 
	      //for the removed element
	      i--;
    	  break;
    	}
   }
    
    //Remove the bullet if it crosses the top of the screen or hits monster/crate
    if (bullet.centerY() < 0
    || bullet.centerX() < 0
    || bullet.centerX() > gameWorld.width
    || bullet.centerY() > gameWorld.height)
    { 
      //Remove the bullet from the bullets array
      removeObject(bullet, bullets);
 
      //Remove the bullet from the sprites array
      removeObject(bullet, sprites);
      
      //Reduce the loop counter by 1 to compensate 
      //for the removed element
      i--;
    }
  }

  
  //Check collision between the player and the boxes
  for(var i = 0; i < boxes.length; i++)
  {
    blockRectangle(player, boxes[i]);
  }

  innerMeter.x = player.x - 32;
  innerMeter.y = player.y - 32;
  outerMeter.x = innerMeter.x;
  outerMeter.y = innerMeter.y;
  
  //Check for collisions with children
  for(var i = 0; i < children.length; i++)
  { 
    var child = children[i];
    if(hitTestRectangle(player, child) && child.visible)
    {
      child.visible = false;
      childrenSaved++;
      
      //Check whether the level is over
      //by checking if the childrenSaved matches
      //the total number in the children array
      if(childrenSaved === children.length && monstersKilled == monstersToKill)
      {
        gameState = LEVEL_COMPLETE;
      }    
    }
  }
}


function monsterFunc()
{
	for(var i = 0; i < monsters.length; i++)
  {
    var monster = monsters[i];
    if(monster.alive)
    {
	//Find the angle between the center of the monster and the player
    var vx = player.centerX() - monster.centerX();
    var vy = player.centerY() - monster.centerY();
  		
	//The distance between the player and the monster
	var distance = Math.sqrt(vx * vx + vy * vy);
	
	if (distance <= monster.chaseRange && distance > monster.attackRange - 10)
	{
		if(monster.chaseRange < 400)
		{
			monster.chaseRange = 400;
		}
		//Find out how much to move
		var moveX = monster.rotationSpeed * vx / distance;
		var moveY = monster.rotationSpeed * vy / distance;
		
		//Increase the monster[i]'s velocity 
		monster.vx += moveX; 
		monster.vy += moveY;
		
		//Find the total distance to move
		var moveDistance = Math.sqrt(monster.vx * monster.vx + monster.vy * monster.vy);
		
		//Apply easing
		monster.vx =  monster.speed * monster.vx / moveDistance;
		monster.vy =  monster.speed * monster.vy / moveDistance;
		
		//Rotate the monster towards the target
		//Find the angle in radians
		monster.angle = Math.atan2(monster.vy, monster.vx);
		
		//Convert the radians to degrees to rotate
		//the monster correctly
		monster.rotation = monster.angle * 180 / Math.PI + 90;
	}

	if(distance <= monster.attackRange)
	{
			//Apply friction 
			monster.vx *= monster.friction;
			monster.vy *= monster.friction;

			if(innerMeter.width > 0)
    		{
    	 	 innerMeter.width--;
    	 	 innerMeter.sourceWidth--;
    		}
   		 	else if(innerMeter.width < 1)
  			{
   		   	gameState = OVER;
   			}
	}
		else
		{
			//Apply friction 
			monster.vx *= monster.friction;
			monster.vy *= monster.friction;
		}

	monster.x = Math.max(64, Math.min(monster.x + monster.vx, gameWorld.width - monster.width - 64)); 
    monster.y = Math.max(64, Math.min(monster.y + monster.vy, gameWorld.height - monster.height - 64));

    for(var q = 0; q < boxes.length; q++)
    {
      blockRectangle(monster, boxes[q]);
    }

	innerMeter[i].x = monster.x - 32;
  	innerMeter[i].y = monster.y - 32;
  	outerMeter[i].x = innerMeter[i].x;
  	outerMeter[i].y = innerMeter[i].y;
  }
 }
}

function lvlStart()
{
	  gameDisplay.visible = true;
  	  gameMessage.visible = true;
  	  gameDisplay.width = 640;
  	  gameDisplay.x = camera.width / 2 - gameDisplay.width / 2;
  	  gameMessage.x = gameDisplay.x + 20;
  	  gameMessage.text = "Save the childern and kill the monsters!";
      setTimeout(displayTimeOut, 3500);
}

function displayTimeOut()
{
	gameDisplay.visible = false;
	gameMessage.visible = false;
	gameDisplay.width = 200; 
	gameDisplay.x = camera.width / 2 - gameDisplay.width / 2;
	gameMessage.x = gameDisplay.x + 20;
}

function monsterKilled(monster, outerMeter, innerMeter)
{
  outerMeter.visible = false;
  innerMeter.visible = false;
  monstersKilled++;

  //Change the monster's state and update the object 
  monster.alive = false;
  monster.rotation = 0;
  monster.update();  
  
  //Remove the monster after 1 second
  setTimeout(removeMonster, 1000);
  
  function removeMonster()
  {
  	monster.visible = false;
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

function endGame()
{

  gameDisplay.visible = true;
  gameMessage.visible = true;
  
  //You win if you're on the last level and 
  //you've collected all the children
  if(levelCounter === levelMaps.length
  && childrenSaved === children.length)
  {
  	gameDisplay.width = 440;
  	gameDisplay.x = camera.width / 2 - gameDisplay.width / 2;
  	gameMessage.x = gameDisplay.x + 20;
    gameMessage.text = "You saved all the childern!";
  }
  else
  {
    gameMessage.text = "  You Died";
  }
}

function render()
{ 
  //Render the gameWorld
  drawingSurface.clearRect(0, 0, canvas.width, canvas.height);
  
  //Position the gameWorld inside the camera
  drawingSurface.save();
  drawingSurface.translate( -camera.x, -camera.y);
  
  //Display the sprites on the gameWorld
  if(sprites.length !== 0)
  {
    for(var i = 0; i < sprites.length; i++)
    {
      var sprite = sprites[i];

      //Save the current state of the drawing surface
	    //before it's rotated
	    var draw = drawingSurface;

	    draw.save();
	  
	    //Rotate the canvas
    	draw.translate
    	(
    	  Math.floor(sprite.x + sprite.halfWidth()), 
    	  Math.floor(sprite.y + sprite.halfHeight())
    	);
	    draw.rotate(sprite.rotation * Math.PI / 180);

      //display the scrolling sprites
      if(sprite.visible && sprite.scrollable)
      {
	     drawingSurface.drawImage
	     (
	       image, 
	       sprite.sourceX, sprite.sourceY, 
	       sprite.sourceWidth, sprite.sourceHeight,
	       Math.floor(-sprite.halfWidth()), Math.floor(-sprite.halfHeight()),
	       sprite.width, sprite.height
	     ); 
       }
	     
       //display the non-scrolling sprites
       if(sprite.visible && !sprite.scrollable)
       {
         drawingSurface.drawImage
         (
           image, 
           sprite.sourceX, sprite.sourceY, 
           sprite.sourceWidth, sprite.sourceHeight,
           Math.floor(camera.x + -sprite.halfWidth()), Math.floor(camera.y + -sprite.halfHeight()), 
           sprite.width, sprite.height
         ); 
       }
       draw.restore();
     } 
  }
  
  drawingSurface.restore();
  
  //Display any game messages
  if(messages.length !== 0)
  {
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
