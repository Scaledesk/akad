/**
 * Created by neerajsingh on 04/10/16.
 */


// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
        name: '.name',
        symbol: '.symbol',
        number: '.number parseInt',
        category: '[data-category]',
        weight: function( itemElem ) {
            var weight = $( itemElem ).find('.weight').text();
            return parseFloat( weight.replace( /[\(\)]/g, '') );
        }
    }
});

// bind sort button click
$('.sort-by-button-group').on( 'click', 'button', function() {
    var sortValue = $(this).attr('data-sort-value');
    $grid.isotope({ sortBy: sortValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});


//For Section smooth scrolling//

$(document).ready(function(){
    // Add smooth scrolling to all links


    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 40
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
//        window.location.hash = hash;
            });
        } // End if
    });

});


//Ends here//





