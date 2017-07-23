//stores the current sequence of colors press
var seq    = [];
var sounds = ['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
              'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
              'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
              'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'];
var counter = [];
var strict = false;
var round = 0;

$(document).ready(function(){
    $('#reset').click(function(){
        location.reload();
    });
    $('#start').click(startGame);
    $('#strict').click(function(){
        if(strict === true)
            strict = false;
        else
            strict = true;
        if(strict === true)
            $(this).css('background-color', 'red');
        else
            $(this).css('background-color', 'white');
    });
});
// gets the game started with one sequence and calls a function which handles inputs
function startGame() {
    round++;
    if(round < 10)
        $('#score').text('0' + round);
    else $('#score').text(round);
    var color = (Math.floor(Math.random() * 4)) + 1;
    seq = [];
    counter = [];
    count = 0;
    seq.push(color);
    showSeq();
}

function nextMove(){
    $('.press').unbind().one('click', function(){
        counter.push(this.id);
        if(counter.length < seq.length) {
            if(parseInt(counter[counter.length - 1]) !== seq[counter.length - 1]) {
                if (strict === true) {
                    counter = [];
                    round = 0;
                    seq = [];
                    startGame();
                }else{
                    $('#score').text('!!');
                    setTimeout(function(){
                        if(round < 10)
                            $('#score').text('0' + round);
                        else $('#score').text(round);
                        counter = [];
                        showSeq();
                    }, 1000);
                }
            } else {
                nextMove();
            }
        } else if (counter.length === seq.length) {
            if (parseInt(counter[counter.length - 1]) == seq[counter.length - 1]){
                round++;
                if(round < 10)
                    $('#score').text('0' + round);
                else $('#score').text(round);
                var color = (Math.floor(Math.random() * 4)) + 1;
                seq.push(color);
                counter = [];
                showSeq();
            } else {
                if (strict === true) {
                        counter = [];
                        seq = [];
                        round = 0;
                        startGame();
                }else{
                    $('#score').text('!!');
                    setTimeout(function(){
                        if(round < 10)
                            $('#score').text('0' + round);
                        else $('#score').text(round);
                        counter = [];
                        showSeq();
                    }, 1000);
                }
            }
        }
    });
}

function showSeq() {
    for(var i=0; i<seq.length; i++) {
        var id = '#' + seq[i];
        toOpac(id, i, seq[i]);
        toTrans(id, i+1);
    }
    setTimeout(nextMove, 700*seq.length);
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