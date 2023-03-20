

const codes = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
    "Enter"
];

let index = 0;

$(window).on('keydown', function(e) {
    const key = e.key;
    console.log(`You have entered the ${key} key`);
    if (key === codes[index]) {
        index++;

        if (index === codes.length) {
            console.log('You have added 30 lives!')
            activateCheats()
            index = 0;
        }
    } else {
        index = 0;
    }
});

function activateCheats() {
    $('.head.container').css('height', '100px');
    $('.image-wrapper').append("<image id='konami-image' src='images/cody-parade%20(1).jpeg' alt='duck'>");
    $('.main.container').css('background','url("/images/cherry-blossoms-japan.gif") no-repeat center center fixed');
    $('.main.container').css('-webkit-background-size', 'cover');
    $('.main.container').css('-moz-background-size', 'cover');
    $('.main.container').css('-o-background-size', 'cover');
    $('.main.container').css('background-size', 'cover');
    alert("Cheats activated!");
}




























