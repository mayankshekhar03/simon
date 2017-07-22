//stores the current sequence of colors press
var seq    = [1,2,3,2,1];
var sounds = ['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
              'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
              'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
              'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'];
var count = [];
var counter = 0;
var round = 0;

$(document).ready(function(){
    $('#start').click(showSeq);
});
// gets the game started with one sequence and calls a function which handles inputs
function startGame() {
    round++;
    var color = (Math.floor(Math.random() * 4)) + 1;
    seq = [];
    count = [];
    counter = 0;
    seq.push(color);
    console.log(seq);
    showSeq();
}

function showSeq() {
    for(var i=0; i<seq.length; i++) {
        var id = '#' + seq[i];
        toOpac(id, i, seq[i]);
        toTrans(id, i+1);
    }
}

//helper functions
function toOpac(id, i, s){
    var timeout = i*700;
    setTimeout(function() {$(id).css('opacity', '1');
                           new Audio(sounds[s]).play();}, timeout);
}

function toTrans(id, i){
    var timeout = i*650;
    setTimeout(function() {opacity(id);}, timeout);
}
function opacity(id) {
    $(id).css('opacity', '0.3');
}