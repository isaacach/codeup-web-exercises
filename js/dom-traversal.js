

$('.box').on('click', function (){
    $(this).parents('.container').siblings('.container').find('.box').fadeToggle();
});

// crawling up the DOM
$('#box1').parents('.container');

// crawling down the DOM
$('#box1').find();
$('#box1').children();

// crawl sideways
$('#box1').siblings();

// utility methods
$('#box1').closest();