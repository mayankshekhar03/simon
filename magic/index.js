//stores the current sequence of colors press
var seq    = [];
var sounds = ['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
              'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
              'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
              'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'];
var counter = 0;

$(document).ready(function(){
    $('#start').click(startGame);
});
// gets the game started with one sequence and calls a function which handles inputs
function startGame() {
    var color = (Math.floor(Math.random() * 4)) + 1;
    seq = [];
    seq.push(color);
    console.log(seq);
    for(var i=0;i<seq.length; i++) {
        var id = '#' + seq[i];
        $(id).css('opacity', '1');
        new Audio(sounds[seq[i]]).play();
        setTimeout(function() {opacity(id);}, 700);
    }
    handleInput();
}

function handleInput() {
    
}

//sets opacity to 0.5
function opacity(id) {
    console.log(id);
    $(id).css('opacity', '0.5');
}