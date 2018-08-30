var width = 800;
var height = 400;
var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

d3.select("svg")
    .append("rect")
    .attr("x", "100")
    .attr("y", "100")
    .attr("width", "100")
    .attr("height", "100");

var xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width]);

var axisX = d3.axisBottom()
    .scale(xScale);

d3.select("svg")
    .append("g")
        .attr("transform", "translate(50, 300)")
        .call(axisX);

svg.append("text")
    .text("Age")
    .attr("x", "380")
    .attr("y", "350");

var yScale = d3.scaleLinear()
    .domain([50, 0])
    .range([0, 250]);

var yAxis = d3.axisLeft()
    .scale(yScale);

svg.append("g")
    .attr("transform", "translate(50, 50)")
    .call(yAxis);

svg.append("text")
    .text("population")
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .attr("x", "100")
    .attr("y", "6");