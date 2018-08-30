

var svg = d3.select("body").append("svg")
    .attr("width", "800")
    .attr("height", "600");

svg.append("rect")
    .attr("x", "100")
    .attr("y", "100")
    .attr("width", "300")
    .attr("height", "100")
    .attr("fill", "#BEF781");

svg.append("text")
    .text("hello")
    .attr("class", "curve")
    .attr("x", "80")
    .attr("y", "250")
    .attr("transform", "rotate(-90, 80, 250)");