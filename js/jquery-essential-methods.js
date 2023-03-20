
// single style
// $('#paragraph-parent').css('color', 'red');
//
// // multi style
// $('#paragraph-parent').css({
//     'fontSize': '20px',
//     'fontWeight': 'bold',
//     'fontStyle': 'italic'
// })

// adding classes
// $('#paragraph-parent').addClass('highlight');

// getting more than one element, you can run the same methods
let $paragraphs = $('p');

$paragraphs.css('color', 'blue');

// setting and getting values
$paragraphs.attr('data-name', 'value');
let newParaValue = $paragraphs.attr('data-name');

$paragraphs.text('this is the new text inside the element!');
let paraText = $paragraphs.text();

// adding a class to elements
$paragraphs.addClass('highlight');

// removing a class to elements
$paragraphs.removeClass('highlight');

// toggling a class
$paragraphs.on('click', function() {
    // $(this).toggleClass('highlight');
    $(this).fadeOut(3000, function (){
        $(this).fadeIn(1000);
    });
});

