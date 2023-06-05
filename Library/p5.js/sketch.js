function setup() {
  createCanvas(400, 400);  // Create a canvas with width and height of 400 pixels
}

function draw() {
  background(220);  // Set the background color to light gray
  
  // Draw a circle at the mouse position
  fill(255, 0, 0);  // Set the fill color to red
  ellipse(mouseX, mouseY, 50, 50);  // Draw a circle at the mouse position with a diameter of 50 pixels
}
