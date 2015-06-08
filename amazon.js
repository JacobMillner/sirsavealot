//script runs when on any amazon page
var cartButton = $( "#add-to-cart-button" );

//$( "#add-to-cart-button" ).click(function() {
//  alert( "Handler for .click() called." );
//});

//function myFunction() {
   // $("#h01").html("Hello jQuery");
	// alert( "Handler for .click() called." );
//}
//$(document).ready(myFunction);

// Anonymous "self-invoking" function
(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existance
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 100);
        }
    };

    // Start polling...
    checkReady(function($) {
        // Use $ here...
		alert( "Handler for .click() called." );
    });
})();