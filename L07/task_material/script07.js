var L07;
(function (L07) {
    var sound = [new Audio('./assets/A.mp3'), new Audio('.//assets/C.mp3'), new Audio('.//assets/F.mp3'),
        new Audio('.//assets/G.mp3'), new Audio('.//assets/hihat.mp3'), new Audio('.//assets/kick.mp3'), new Audio('.//assets/laugh-1.mp3'),
        new Audio('.//assets/laugh-2.mp3'), new Audio('.//assets/snare.mp3')];
    window.addEventListener("load", function playSample() {
        document.getElementById("button0").addEventListener("click", function () { (sound[0]).play(); });
        document.getElementById("button1").addEventListener("click", function () { (sound[1]).play(); });
        document.getElementById("button2").addEventListener("click", function () { (sound[2]).play(); });
        document.getElementById("button3").addEventListener("click", function () { (sound[3]).play(); });
        document.getElementById("button4").addEventListener("click", function () { (sound[4]).play(); });
        document.getElementById("button5").addEventListener("click", function () { (sound[5]).play(); });
        document.getElementById("button6").addEventListener("click", function () { (sound[6]).play(); });
        document.getElementById("button7").addEventListener("click", function () { (sound[7]).play(); });
        document.getElementById("button8").addEventListener("click", function () { (sound[8]).play(); });
        document.querySelector(".button9").addEventListener("click", function () {
            setInterval(function () {
                sound[4].play();
            }, 500);
            setInterval(function () {
                sound[5].play();
            }, 700);
            setInterval(function () {
                sound[8].play();
            }, 900);
        });
    });
})(L07 || (L07 = {}));
//# sourceMappingURL=script07.js.map