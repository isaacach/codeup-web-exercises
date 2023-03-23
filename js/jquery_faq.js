
$('dd').addClass('invisible');

$('dt').on('click', function (){
    $(this).toggleClass('highlight');
    $(this).next().fadeToggle();
});

// $('button').on('click', function () {
//     $('li').toggleClass('highlight');
// });

$('h3').on('click', function () {
    $(this).next().toggleClass('bold');
});

$('li').on('click', function () {
    $(this).parent('ul').children('li').first().toggleClass('blue');
});


// Math.floor(Math.random() * 10) + 1;



$('.swap-btn').on('click', function (){
    let btn = $(this).attr('id');
    let commonParent =$(this).parent('.row');
    let images = commonParent.find('img');
    let imgSources = [];
    images.each(function (){
        imgSources.push($(this).attr('src'));
    });
    switch(btn) {
        case 'left' :
            $(images[0]).attr('src', imgSources[1]);
            $(images[1]).attr('src', imgSources[0]);
            break;
        case 'middle' :
            break;
        case 'right' :
            break;
    }
})



