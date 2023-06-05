// Define a function to run TensorFlow.js code
async function runTensorFlow() {
    // Create a sequential model
    const model = tf.sequential();
  
    // Add a dense layer to the model
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  
    // Compile the model
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
  
    // Create some training data
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([2, 4, 6, 8], [4, 1]);
  
    // Train the model
    await model.fit(xs, ys, { epochs: 10 });
  
    // Use the model to make predictions
    const input = tf.tensor2d([5], [1, 1]);
    const output = model.predict(input);
  
    // Display the prediction result
    output.print();
  }
  
  // Run the TensorFlow.js code when the page is loaded
  document.addEventListener('DOMContentLoaded', function () {
    const runButton = document.getElementById('runButton');
    runButton.addEventListener('click', runTensorFlow);
  });
  