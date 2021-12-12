
namespace L8 {
window.addEventListener("load", function playSample() {
       /*Sounds*/
var sound: HTMLAudioElement[] = [new Audio("assets/A.mp3"),
new Audio("assets/C.mp3"), new Audio("assets/F.mp3"),
   new Audio("assets/G.mp3"), new Audio("assets/hihat.mp3"),
   new Audio("assets/kick.mp3"), new Audio("assets/laugh-1.mp3"),
   new Audio("assets/laugh-2.mp3"), new Audio("assets/snare.mp3")];

var beat: HTMLAudioElement [] = [sound[4], sound[5], sound[8]];
var playingNow: boolean = false;
var index: number = 0;

 
/*Buttons and sound*/ 

document.getElementById("button0").addEventListener("click", function () { (sound [0]); });
document.getElementById("button1").addEventListener("click", function () { (sound [1]); });
document.getElementById("button2").addEventListener("click", function () { (sound [2]); });
document.getElementById("button3").addEventListener("click", function () { (sound [3]); });
document.getElementById("button4").addEventListener("click", function () { (sound [4]); });
document.getElementById("button5").addEventListener("click", function () { (sound [5]); });
document.getElementById("button6").addEventListener("click", function () { (sound [6]); });
document.getElementById("button7").addEventListener("click", function () { (sound [7]); });
document.getElementById("button8").addEventListener("click", function () { (sound [8]); });
document.querySelector("#play").addEventListener("click", function () { if (!playingNow) {
    playbeat();
}
else {
    stopBeat();
} });


    /*play the cantral function for the DrumPad*/

function play(sample) {
    var song = new Audio(sample);
    song.play();
    }

    /*Beat*/
function shuffle(): void {
        clearBeat();
        for (let i: number = 0; i < 6; i++) {
            beat.push(sound[Math.floor((Math.random() * 3))]);
        }
    }

    /*delete the Beat*/
function clearBeat(): void {
    beat = [];
    }





/*click on Play-Button to switch into Pause-Button*/
var btn = document.getElementById("play");
    
function playbeat() {
        playingNow = true;
        var loop = setInterval(playPreset, 500);
        function playPreset() {
            if (!playingNow) {
                clearInterval(loop);
            }
            else if (index >= beat.length) {
                index = 0;
                play(beat[index]);
            }
            else {
                play(beat[index]);
            }
            index++;
        }
        if (btn.getAttribute("class"), "far fa-play-circle") {
            btn.setAttribute("class", "fas fa-stop-circle");
        }
    }
    //Stoppt Beat
function stopBeat() {
        playingNow = false;
        if (btn.getAttribute("class"), "fas fa-stop-circle") {
            btn.setAttribute("class", "far fa-play-circle");
        }

        document.querySelector("#play").addEventListener("click", function(): void {if (!playingNow) {playbeat(); } else {stopBeat(); }});
        document.querySelector("#mix").addEventListener("click", shuffle);
        document.querySelector("#trash").addEventListener("click", clearBeat);

}
); }