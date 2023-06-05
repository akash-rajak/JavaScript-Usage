// Sample data
const data = [
  { category: 'A', value: 10 },
  { category: 'B', value: 20 },
  { category: 'C', value: 15 },
  { category: 'D', value: 5 },
  { category: 'E', value: 8 }
];

// Set up the SVG container
const svg = d3.select('#chart')
  .append('svg')
  .attr('width', 400)
  .attr('height', 300)
  .style('display', 'block') // Make the SVG container a block element
  .style('margin', '0 auto'); // Center align the SVG container

// Define scales
const xScale = d3.scaleBand()
  .domain(data.map(d => d.category))
  .range([0, 400])
  .padding(0.1);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([0, 300]);

// Create bars
svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', d => xScale(d.category))
  .attr('y', d => 300 - yScale(d.value))
  .attr('width', xScale.bandwidth())
  .attr('height', d => yScale(d.value))
  .attr('fill', 'steelblue');

// Add labels
svg.selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(d => d.value)
  .attr('x', d => xScale(d.category) + xScale.bandwidth() / 2)
  .attr('y', d => 300 - yScale(d.value) - 5) // Adjusted positioning for better visibility
  .attr('text-anchor', 'middle')
  .attr('fill', 'black'); // Set the color of text to black
