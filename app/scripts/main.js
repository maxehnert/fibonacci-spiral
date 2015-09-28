/*eslint-disable */
'use strict';

// Setup our main canvas container.
var canvasContainer = document.getElementById('canvas-container');
var contextContainer = canvasContainer.getContext('2d');

var canvasContainer2 = document.getElementById('canvas-container2');
var contextContainer2 = canvasContainer2.getContext('2d');

// Start Spiral
function createSpiralPositions(increment, a, b) {
  var a = a; //1
  var b = b; //3
  // var centerx = contextContainer.canvas.width / 2;
  // var centery = contextContainer.canvas.height / 2;
  var centerx = 1000 / 2;
  var centery = 1000 / 2;
  var angle = 0.01 * increment;

  var positionX = centerx + (a + b * angle) * Math.cos(angle);

  var positionY = centery + (a + b * angle) * Math.sin(angle);

  return [positionX, positionY];
};
// End Spiral

// Playing around drawing the fib spirals
function dotsFunc() {
  for( var i = 0; i < 150000; i += 20 ) {

      var coords = createSpiralPositions(i, 1, 1);

      var radius = 10;
      contextContainer.beginPath();
      contextContainer.arc(coords[0], coords[1], radius, 0, 2 * Math.PI, false);
      contextContainer.fillStyle = 'hsl( '+ Math.random() * 360+ ', 100%, 50%)';
      contextContainer.fill();
      contextContainer.stroke();
  }

  for( var i = 0; i < 150000; i += 50 ) {

      var coords = createSpiralPositions(i, 1, 2);

      var radius = 10;
      contextContainer2.beginPath();
      contextContainer2.arc(coords[0], coords[1], radius, 0, 2 * Math.PI, false);
      contextContainer2.fillStyle = 'hsla(0, 0%, 0%, 0.56)';
      contextContainer2.fill();
      contextContainer2.stroke();
  }
}
dotsFunc();
