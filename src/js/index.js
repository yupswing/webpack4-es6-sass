// Webpack imports
// Global var to use it across components
import "../scss/styles.scss";

// Class and Function Imports
import Main from "./template.main";

// Class intialisation
let main = new Main();

// JQuery $(document).ready function
$(function() {
  main.start();
  console.log("Rendered");
});
