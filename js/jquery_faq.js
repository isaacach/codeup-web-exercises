
$('dd').addClass('invisible');
$('li').addClass('invisible');

$('button').on('click', function (){
    $('dd').toggleClass('invisible');
    $('li').toggleClass('invisible');
});

$('dt').on('click', function (){
    $(this).toggleClass('highlight');
    $(this).next().fadeToggle();
})



$('h3').on('click', function (){
    $(this).toggleClass('highlight');
});

