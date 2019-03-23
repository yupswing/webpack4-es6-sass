
// Webpack imports
// import '../scss/styles.scss';
// Global var to use it across components
// import $ from 'jquery';
// import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import '../scss/styles.scss';


// Class and Function Imports
import Main from './template.main';

// Class intialisation
let main = new Main();


// JQuery $(document).ready function 
$(function() {
    console.log('jquery is ready');
});
// $(function() {
    
    main.start();
    console.log('Rendered');

    
// });