//Michael Ruvinshteyn
//SoftDev2 pd07
//K07 -- Connect the Dots
//2018-02-28

//variables used for position
var x1;
var y1;
var x2;
var y2;

//variables used for drawing
var fillColor = 'black';
var strokeColor = 'black';
var lineColor = 'black';

//counter for the number of dots drawn
var dots = 0;

//gets body element and inserts the SVG and clear button
var body = document.body;
body.innerHTML = "<center>Fill Color: <input type='color' id='fillColor'><br>Stroke Color: <input type='color' id='strokeColor'><br>Line Color: <input type='color' id='lineColor'><br><br><svg id='vimage' height='500' width='500' style='border: 1px solid;'><br><button id='clear'>Clear</button></center>";

//gets SVG element that was created previously
var svg = document.getElementById('vimage');
//console.log(svg);

//get mouse coordinates
var getCoord = function(e){
    var r = svg.getBoundingClientRect();
    x1 = e.clientX - r.left;
    y1 = e.clientY - r.top;
    //console.log([x,y]);
}

//draws a circle and connects it to the previous one if more than one has been drawn
var drawCircle = function(e){
    fillColor = document.getElementById('fillColor').value;
    strokeColor = document.getElementById('strokeColor').value;
    lineColor = document.getElementById('lineColor').value;
    if (dots > 0){
        x2 = x1;
        y2 = y1;
        getCoord(e);
        svg.innerHTML += "<circle cx=" + x1 + " cy=" + y1 + " stroke=" + strokeColor + " fill=" + fillColor + " r=10 />";
        svg.innerHTML += "<line x1=" + x1 + " y1=" + y1 + " x2=" + x2 + " y2=" + y2 + " stroke=" + lineColor + " />";
    }
    else{
        getCoord(e);
        svg.innerHTML += "<circle cx=" + x1 + " cy=" + y1 + " stroke=" + strokeColor + " fill=" + fillColor + " r=10 />";
    }
    dots += 1;
}

//clear the svg by removing all children
var clearSVG = function(){
    svg.innerHTML = "";
    dots = 0;
}

//adds event listeners for SVG and clear button
svg.addEventListener('click',drawCircle)
document.getElementById('clear').addEventListener('click',clearSVG);