var L8;
(function (L8) {
    // tslint:disable-next-line: typedef
    window.addEventListener("load", function () {
        /*Sounds*/
        var sound = [new Audio("assets/A.mp3"),
            new Audio("assets/C.mp3"), new Audio("assets/F.mp3"),
            new Audio("assets/G.mp3"), new Audio("assets/hihat.mp3"),
            new Audio("assets/kick.mp3"), new Audio("assets/laugh-1.mp3"),
            new Audio("assets/laugh-2.mp3"), new Audio("assets/snare.mp3")];
        var beat, _a = [sound[4], sound[5], sound[8]];
        var index = 0;
        var theremix;
        var play = true;
        function playSample(sound) {
            sound.play();
        }
        /*click on Play-Button to switch into Pause-Button*/
        function playBeat() {
            if (document.getElementById("play").getAttribute("class") == ("fas fa-play-circle")) {
                document.getElementById("play").setAttribute("class", "fas fa-stop-circle");
                theremix = setInterval(mixbeat, 500);
            }
            else {
                document.getElementById("play").setAttribute("class", "fas fa-stop-circle");
                clearInterval(theremix);
            }
        }
        function mixbeat() {
            playSample(sound[index]);
            index++;
            if (index == 3) {
                index = 0;
            }
        }
        /*Beat + beatdelet*/
        function clearBeat() {
            clearInterval(theremix);
            if (document.getElementById("Play").getAttribute("class") == "fas fa-stop-circle") {
                document.getElementById("Play").setAttribute("class", "fas fa-play-circle");
            }
        }
        function shuffle() {
            theremix = setInterval(mix, 250);
            function mix() {
                index = Math.floor(Math.random() * 5);
                playSample(sound[index]);
            }
            if (play == true) {
                document.getElementById("Play").setAttribute("class", "fas fa-stop-circle");
            }
            else {
                document.getElementById("Play").setAttribute("class", "fas fa-play-circle");
                clearInterval(theremix);
            }
        }
        document.getElementById("button0").addEventListener("click", function () { (sound[0]); });
        document.getElementById("button1").addEventListener("click", function () { (sound[1]); });
        document.getElementById("button2").addEventListener("click", function () { (sound[2]); });
        document.getElementById("button3").addEventListener("click", function () { (sound[3]); });
        document.getElementById("button4").addEventListener("click", function () { (sound[4]); });
        document.getElementById("button5").addEventListener("click", function () { (sound[5]); });
        document.getElementById("button6").addEventListener("click", function () { (sound[6]); });
        document.getElementById("button7").addEventListener("click", function () { (sound[7]); });
        document.getElementById("button8").addEventListener("click", function () { (sound[8]); });
        document.querySelector("#play").addEventListener("click", function () { playBeat(); });
        document.querySelector("#mix").addEventListener("click", function () { shuffle(); });
        document.querySelector("#trash").addEventListener("click", function () { clearBeat(); });
    });
})(L8 || (L8 = {}));
//# sourceMappingURL=script8.js.map