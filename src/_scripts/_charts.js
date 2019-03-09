var d3 = require('d3');

//field name: homicides total
function createChart(el, fieldname) {
var container = d3.select('#county-homicides')
var svg=container.append('svg')

var margin = {top: 20, right:20, bottom:20, left:40};
// Make sure you use the # here!
var container = d3.select('#county-homicides');
var containerWidth = container.node().offsetWidth;
var containerHeight = containerWidth * 0.66;
var chartWidth = containerWidth - margin.right - margin.left;
var chartHeight = containerHeight - margin.top - margin.bottom;

var svg = container.append('svg')
            .attr('width', containerWidth)
            .attr('height', containerHeight)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)

var xDomain= annualTotals.map (d=> d.year);
var yDomain=[0, d3.max(annualTotals.map(d => d.homicides_total))
];

var xScale = d3.scaleBand()
			 .domain(xDomain)
			 .range([0, chartWidth])
			 .padding(0.1);

var yScale= d3.scaleLinear()
			  .domain(yDomain)
			  .range([chartHeight,0]);

var xAxis = d3.axisBottom(xScale)
			  .tickValues([2000,2005,2010,2015])

var yAxis = d3.axisLeft(yScale)
			  .tickSize(-chartWidth)
			  .ticks(4);

svg.append('g')
	.attr('class', 'x axis')
	.attr('transform', `translate(0, ${chartHeight})`)
	.call(xAxis);

svg.append('g')
	.attr('class', 'y axis')
	.attr(yAxis);
// "." means class, data() binds data to it
svg.selectAll('.bar')
    .data(annualTotals)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.year))
    .attr('y', d => yScale(d.homicides_total))
    .attr('width', xScale.bandwidth())
    .attr('height', d => chartHeight - yScale(d.homicides_total))

}

