function printMe(message) {
	var p = document.createElement("p");
	p.textContent = message;
	document.body.appendChild(p);

	return p;
}

function mylinka() {
	var link = document.getElementById("myLink");
	link.href = "https://www.google.de/"
}

printMe("this is the first line");
printMe("test")


function drawRec() {
	var canv = document.getElementById("myCanvas");
	var ctx = canv.getContext("2d");

	ctx.fillStyle = "#FF0000";
	ctx.fillRect(20,20,30,30);

	ctx.strokeStyle = "blue";
	ctx.strokeRect(5,5,50,50);

	ctx.lineWidth = 5;
	ctx.strokeRect(135,5,50,50);
}

function drawLines() {
	var canv = document.getElementById("myCanvas");
	var ctx = canv.getContext("2d");

	ctx.lineWidth = 2;
	ctx.strokeStyle = "gray";
	ctx.beginPath();
	for (var y = 80; y < 180; y += 10) {
		ctx.moveTo(10,y);
		ctx.lineTo(90,y);
	}
	ctx.stroke();
}

function drawTra() {
	var canv = document.getElementById("myCanvas");
	var ctx = canv.getContext("2d");

	ctx.fillStyle = "gray";
	ctx.beginPath();
	ctx.moveTo(130,100);
	ctx.lineTo(150,120);
	ctx.lineTo(110,120);
	ctx.fill();
	ctx.stroke();
}

function drawClose() {
	var canv = document.getElementById("myCanvas");
	var ctx = canv.getContext("2d");

	ctx.beginPath();
	ctx.moveTo(300, 50);
	ctx.bezierCurveTo(200, 10, 50, 30, 250, 50);
	ctx.closePath();
	ctx.stroke();
}

function drawArc() {
	var canv = document.getElementById("myCanvas");
	var ctx = canv.getContext("2d");

	ctx.beginPath();
	ctx.moveTo(300,250);
	ctx.arcTo(300, 300, 250, 300, 50);
	ctx.moveTo(250, 300);
	ctx.arcTo(200, 300, 200, 250, 50);
	ctx.moveTo(200,250);
	ctx.arcTo(200, 200, 250, 200, 50);
	ctx.moveTo(250, 200);
	ctx.arcTo(300, 200, 300, 250, 50);

	// ctx.moveTo(350, 250);
	// ctx.arcTo(350, 300, 400, 250);
	ctx.stroke();
}

var results = [
  {name: "Satisfied", count: 1043, color: "lightblue"},
  {name: "Neutral", count: 563, color: "lightgreen"},
  {name: "Unsatisfied", count: 510, color: "pink"},
  {name: "No comment", count: 175, color: "silver"}
];

function drawPieChart(result) {
	var canv = document.getElementById("myCanvas");
	var ctx = canv.getContext("2d");


}

window.onload = function(){
	printMe("onload");
	//mylinka();
	drawRec();
	drawLines();
	drawTra();
	drawClose();
	drawArc();
}

var arr = ['Bart', 'Lisa', 'Adam'];
arr.forEach(function (obj) {
	alert("Hello " + obj);
})
//mylinka();

// var linkElement = document.getElementById("myLink");
// linkElement.herf = "http://www.google.de";
// console.log("linkElement: " + linkElement + "<br>linkElement.herf:" + linkElement.herf);



// window.onload = function()
// {
// 	var c = document.getElementById("myCanvas");
// 	var ctx = c.getContext("2d");

// 	ctx.fillStyle = "#FF0000";
// 	ctx.fillRect(20, 20, 150, 100);

// 	ctx.beginPath();
// 	ctx.moveTo(10, 100);
// 	ctx.lineTo(100,10);
// 	ctx.stroke();
// };

    // window.onload = function() {

    //   // Initialise an empty canvas and place it on the page
    //   var canvas = document.createElement("canvas");
    //   var context = canvas.getContext("2d");
    //   canvas.width = 800;
    //   canvas.height = 500;
    //   document.body.appendChild(canvas);

    //   // Inital starting position
    //   var posX = 20,
    //       posY = 100;

    //   context.fillStyle = "black";
    //   context.fillRect(0,0,canvas.width, canvas.height);

    //   // Draw shapes on the canvas using an interval of 30ms
    //   setInterval(function() {
    //     posX += 1;
    //     posY += 0.25;

    //     // Draw a circle particle on the canvas
    //     context.beginPath();
    //     context.fillStyle = "white";
    //     // After setting the fill style, draw an arc on the canvas
    //     context.arc(posX, posY, 10, 0, Math.PI*2, true); 
    //     context.closePath();
    //     context.fill();

    //   }, 30);
      

    // };