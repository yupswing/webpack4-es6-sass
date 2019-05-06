
// Webpack imports
// Global var to use it across components
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import '../scss/styles.scss';

// Class and Function Imports
import Main from './template.main';

// Class intialisation
let main = new Main();

// JQuery $(document).ready function 
$(function() {
    main.start();
    
    $('.tabs').tabs();

    console.log('Rendered');
    console.log('jquery is ready');

});