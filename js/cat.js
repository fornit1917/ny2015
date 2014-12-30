var Cat = {
    time : 0,
    count: 0,
    play: false,
    audios: [],
    current: 0
};

Cat.init = function(canvas, audios) {

    for (var i=0; i<audios.length; i++) {
        $(audios[i]).on('ended', function(){
            Cat.play = false;
            $('#title').html('Гладь котика :)')
        });
    }

    Cat.audios = audios;

    $(canvas).on('mousemove', function(e){
        var time = (new Date).getTime();
        if (time - Cat.time < 1000) {
            count++;
        } else {
            count = 0;
        }
        Cat.time = time;

        if (count > 200) {
            console.log('BINGO!');
            Cat.playSound();
        }
    });
}

Cat.playSound = function() {
    if (Cat.play) {
        return;
    }
    Cat.play = true;
    $('#title').html('Мррррррр :)')
    Cat.audios[Cat.current].load();
    //Cat.audios[Cat.current].currentTime = 0;
    Cat.audios[Cat.current].play();

    Cat.current++;
    if (Cat.current > Cat.audios.length-1) {
        Cat.current = 0;
    }
}