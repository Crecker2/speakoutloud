// var num = 49635


//placeholder div for jquery slider
d3.select(".chart").append("div").attr("id","sliderDiv");

//create svg element
var svgDoc=d3.select(".chart").append("svg").attr("viewBox","0 0 100 700").attr("overflow","visible");

 //define an icon store it in svg <defs> elements as a reusable component - this geometry can be generated from Inkscape, Illustrator or similar
svgDoc.append("defs")
    .append("g")
    .attr("id","iconCustom")
    .append("path")
            .attr("d","M3.5,2H2.7C3,1.8,3.3,1.5,3.3,1.1c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1c0,0.4,0.2,0.7,0.6,0.9H1.1C0.7,2,0.4,2.3,0.4,2.6v1.9c0,0.3,0.3,0.6,0.6,0.6h0.2c0,0,0,0.1,0,0.1v1.9c0,0.3,0.2,0.6,0.3,0.6h1.3c0.2,0,0.3-0.3,0.3-0.6V5.3c0,0,0-0.1,0-0.1h0.2c0.3,0,0.6-0.3,0.6-0.6V2.6C4.1,2.3,3.8,2,3.5,2z");



//specify the number of columns and rows for pictogram layout
var numCols = 23;
var numRows = 85;

//padding for the grid
var xPadding = 5;
var yPadding = 15;

//horizontal and vertical spacing between the icons
var hBuffer = 8;
var wBuffer = 4;

//generate a d3 range for the total number of required elements
var myIndex=d3.range(numCols*numRows);

//text element to display number of icons highlighted

//create group element and create an svg <use> element for each icon
svgDoc.append("g")
    .attr("id","pictoLayer")
    .selectAll("use")
    .data(myIndex)
    .enter()
    .append("use")
        .attr("xlink:href","#iconCustom")
        .attr("id",function(d)    {
            return "icon"+d;
        })
        .attr("x",function(d) {
            var remainder=d % numCols;//calculates the x position (column number) using modulus
            return xPadding+(remainder*wBuffer);//apply the buffer and return value
        })
          .attr("y",function(d) {
            var whole=Math.floor(d/numCols)//calculates the y position (row number)
            return yPadding+(whole*hBuffer)+5;//apply the buffer and return the value
        })
        .classed("iconPlain",true);



var $target = $('html,body');
$target.animate({scrollTop: 0});

var t = 10;
$('.iconPlain').each(function(){
    var person = $(this);
    setTimeout(function(){
        person.css('opacity','1');
    },t);
    t+=10;
});

$target.animate({scrollTop: $target.height()}, 21000, "linear");
$target.animate({scrollTop: 0});