window.addEventListener("load", function () {
    //sounds
    var sound1 = new Audio('assets/A.mp3');
    var sound2 = new Audio('assets/C.mp3');
    var sound3 = new Audio('assets/F.mp3');
    var sound4 = new Audio('assets/G.mp3');
    var sound5 = new Audio('assets/hihat.mp3');
    var sound6 = new Audio('assets/kick.mp3');
    var sound7 = new Audio('assets/laugh-1.mp3');
    var sound8 = new Audio('assets/laugh-2.mp3');
    var sound9 = new Audio('assets/snare.mp3');
    //array
    var sounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];
    //
    var theremix;
    var index = 0;
    var play;
    //play
    function playSample(sounds) {
        sounds.play();
    }
    //beat
    function playBeat() {
        if (document.getElementById("Play").getAttribute("class") == "fas fa-play-circle") {
            document.getElementById("Play").setAttribute("class", "fas fa-stop-circle");
            theremix = setInterval(musik, 500);
        }
        else {
            document.getElementById("Play").setAttribute("class", "fas fa-play-circle");
            clearInterval(theremix);
        }
        function musik() {
            playSample(sounds[index]);
            index++;
            if (index == 3) {
                index = 0;
            }
        }
    }
    //beat delete
    function deleteBeat() {
        clearInterval(theremix);
        if (document.getElementById("Play").getAttribute("class") == "fas fa-stop-circle") {
            document.getElementById("Play").setAttribute("class", "fas fa-play-circle");
        }
    }
    //Beat
    function playmusic() {
        theremix = setInterval(mix, 250);
        function mix() {
            index = Math.floor(Math.random() * 5);
            playSample(sounds[index]);
        }
        play = true;
        if (play == true) {
            document.getElementById("Play").setAttribute("class", "fas fa-stop-circle");
        }
        else {
            document.getElementById("Play").setAttribute("class", "fas fa-play-circle");
            clearInterval(theremix);
        }
    }
    //  Sound-Buttons
    document.getElementById("Button1").addEventListener("click", function () {
        playSample(sounds[0]);
    });
    document.getElementById("Button2").addEventListener("click", function () {
        playSample(sounds[1]);
    });
    document.getElementById("Button3").addEventListener("click", function () { playSample(sounds[2]); });
    document.getElementById("Button4").addEventListener("click", function () {
        playSample(sounds[3]);
    });
    document.getElementById("Button5").addEventListener("click", function () {
        playSample(sounds[4]);
    });
    document.getElementById("Button6").addEventListener("click", function () {
        playSample(sounds[5]);
    });
    document.getElementById("Button7").addEventListener("click", function () {
        playSample(sounds[6]);
    });
    document.getElementById("Button8").addEventListener("click", function () {
        playSample(sounds[7]);
    });
    document.getElementById("Button9").addEventListener("click", function () {
        playSample(sounds[8]);
    });
    document.getElementById("Play").addEventListener("click", function () { playBeat(); });
    document.getElementById("Remix").addEventListener("click", function () { playmusic(); });
    document.getElementById("Delete").addEventListener("click", function () { deleteBeat(); });
});
//# sourceMappingURL=Script08..js.map