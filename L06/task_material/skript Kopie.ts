namespace L06 {
  /*alles von A05*/

/*Afrika*/
var obj1 : number = 1235.5 ;
var obj1_2008 : number = 1028;

/*Südamerika*/

var obj2 : number = 1261.5 ;
var obj2_2008 : number = 1132.6;

/*Europa*/

var obj3 : number = 4209.3 ;
var obj3_2008 : number = 4965.7;

/*Nordamerika*/

var obj4 : number = 6035.6;
var obj4_2008 : number = 6600.4;

/*Asien*/

var obj5 : number = 16274.1;
var obj5_2008 : number = 12954.7;

/*Australien*/

var obj6 : number = 2100.5;
var obj6_2008 : number = 1993;

/*Gesamt*/

var alles : number = obj1 + obj2 + obj3 + obj4 + obj5 + obj6;


/*Aufgabe 06*/

window.addEventListener("load", function () { 


/*Afrika*/
function Kontinente (country:string, country08, country18) {
    document.getElementById("emission08").innerHTML=country18.toFixed(1);
    document.querySelector(".kontinent").innerHTML=country;
    document.getElementById("worldemission").innerHTML= Math.round(100.0*((100/alles)*country08)) / 100.0+"%";
    document.getElementById("growth").innerHTML= Math.round(100*(((country18/country08)*100) - 100))/100+"%";
    document.getElementById("absolutegrowth").innerHTML= Math.round(country18 - country08).toFixed(1);
    document.querySelector(".chart").setAttribute("style", "height:"+(country18/alles*100));
    
}
Kontinente("Afrika", obj1_2008, obj1)
Kontinente("Südamerika", obj2_2008, obj2)
Kontinente("Europa", obj3_2008, obj3)
Kontinente("Nordamrika", obj4_2008, obj4)
Kontinente("Asien", obj5_2008, obj5)
Kontinente("Australien", obj6_2008, obj6);


/*Klick*/

document.querySelector(".africa").addEventListener("click" , function(){Kontinente("Afrika",obj1_2008, obj1);});
document.querySelector(".southamerica").addEventListener("click" , function(){Kontinente("Südamerika",obj2_2008, obj2);});
document.querySelector(".europe").addEventListener("click" , function(){Kontinente("Europa",obj3_2008, obj3);}); 
document.querySelector(".northamerica").addEventListener("click" , function(){Kontinente("Nordamrika",obj4_2008, obj4);}); 
document.querySelector(".asia").addEventListener("click" , function(){Kontinente("Asien",obj5_2008, obj5);});   
document.querySelector(".australia").addEventListener("click" , function(){Kontinente("Australien",obj6_2008, obj6);}); 
})}