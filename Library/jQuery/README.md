# ✔ jQuery Usage
- Curated use of jQuery Library.

****

### Usage Points:
- first create the two file `index.html` and `script.js` file.
- Here, we included the jQuery library by adding the script tag with the `jQuery CDN URL` in the head section of the HTML file.
-  We also included our JavaScript file (script.js) after jQuery, so it can access the jQuery library.
-  In the JavaScript file, we use the `$(document).ready()` function to make sure the code executes only when the document is fully loaded. Inside the `$(document).ready()` function, we target the button with the ID "myButton" using the `$("#myButton")` selector. We attach a click event handler to this button using the .click() method.
-  Inside the click event handler, we target the div with the ID "myDiv" using the `$("#myDiv")` selector. We use the .text() method to change the text of the div to "Button clicked!" when the button is clicked.
-  When you open the index.html file in a web browser and click the "Click Me" button, the text of the div will change to "Button clicked!" using the jQuery library.

- We can run the `index.html` file using the below command
```
start index.html
```

****

### IMP Points:
- 
