"use strict";function createSpiralPositions(t,n,e){var n=n,e=e,a=500,o=500,i=.01*t,r=a+(n+e*i)*Math.cos(i),c=o+(n+e*i)*Math.sin(i);return[r,c]}function dotsFunc(){for(var t=0;15e4>t;t+=20){var n=createSpiralPositions(t,1,1),e=10;contextContainer.beginPath(),contextContainer.arc(n[0],n[1],e,0,2*Math.PI,!1),contextContainer.fillStyle="hsl( "+360*Math.random()+", 100%, 50%)",contextContainer.fill(),contextContainer.stroke()}for(var t=0;15e4>t;t+=50){var n=createSpiralPositions(t,1,2),e=10;contextContainer2.beginPath(),contextContainer2.arc(n[0],n[1],e,0,2*Math.PI,!1),contextContainer2.fillStyle="hsla(0, 0%, 0%, 0.56)",contextContainer2.fill(),contextContainer2.stroke()}}var canvasContainer=document.getElementById("canvas-container"),contextContainer=canvasContainer.getContext("2d"),canvasContainer2=document.getElementById("canvas-container2"),contextContainer2=canvasContainer2.getContext("2d");dotsFunc(),$("#slider").slider({value:100,min:0,max:500,step:50,slide:function(t,n){$("#amount").val(n.value)}}),$("#amount").val($("#slider").slider("value"));