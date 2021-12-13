
namespace L8 {
// tslint:disable-next-line: typedef
window.addEventListener("load", function playSample() {
       /*Sounds*/
const sound[] = [new Audio("assets/A.mp3"),
new Audio("assets/C.mp3"), new Audio("assets/F.mp3"),
   new Audio("assets/G.mp3"), new Audio("assets/hihat.mp3"),
   new Audio("assets/kick.mp3"), new Audio("assets/laugh-1.mp3"),
   new Audio("assets/laugh-2.mp3"), new Audio("assets/snare.mp3")];

var beat[] = [sound[4], sound[5], sound[8]];
var index: number = 0;
var theremix: number;

function play(musik) {
var SOUND = new Audio(musik);
 SOUND.play();
    }

document.getElementById("button0").addEventListener("click", function () { (sound [0]); });
document.getElementById("button1").addEventListener("click", function () { (sound [1]); });
document.getElementById("button2").addEventListener("click", function () { (sound [2]); });
document.getElementById("button3").addEventListener("click", function () { (sound [3]); });
document.getElementById("button4").addEventListener("click", function () { (sound [4]); });
document.getElementById("button5").addEventListener("click", function () { (sound [5]); });
document.getElementById("button6").addEventListener("click", function () { (sound [6]); });
document.getElementById("button7").addEventListener("click", function () { (sound [7]); });
document.getElementById("button8").addEventListener("click", function () { (sound [8]); });


    /*click on Play-Button to switch into Pause-Button*/
function playBeat() {
        if (document.getElementById("play").getAttribute("class") == ("fas fa-play-circle")) {
            document.getElementById("play").setAttribute("class", "fas fa-stop-circle");
            theremix = setInterval(mixbeat, 500);
        }
        else {
            document.getElementById("play").setAttribute("class", "fas fa-stop-circle");
            document.getElementById("play").setAttribute("class", "fas fa-play-circle");
            clearInterval(theremix);
        }
    }

function mixbeat() {
        play(sound[index]);
        index++;
        if (index > beat.length)
            index = 0;
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



document.querySelector("#play").addEventListener("click", function () { playBeat(); });
document.querySelector("#mix").addEventListener("click", function () { shuffle(); });
document.querySelector("#trash").addEventListener("click", function () { clearBeat(); });

});


}
