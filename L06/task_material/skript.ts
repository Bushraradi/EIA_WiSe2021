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

/*Afrika*/

var aFR : number = Math.round(100.0*((100/alles)*obj1)) / 100.0;
var afR : number = Math.round(100*(((obj1/obj1_2008)*100) - 100))/100;
var afr : number = Math.round(100*(obj1 - obj1_2008))/100;

console.log('Die Emission von Afrika ist: '  + obj1 + 'kg CO2. Relativ zur Gesamtemission der Welt verursacht Afrika damit '  + aFR + '%. ') 
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um '  + afR + '% verändert. ')
console.log('im Vergleich zu 2008 sind das ' + afr + 'kg CO2')


/*Südamerika*/

var SA : number = Math.round(100.0*((100/alles)*obj2)) / 100.0;
var sA : number = Math.round(100*(((obj2/obj2_2008)*100) - 100))/100;
var Sa : number = Math.round(100*(obj2 - obj2_2008))/100;

console.log('Die Emission von Südamerika ist: '  + obj2 + 'kg CO2. Relativ zur Gesamtemission der Welt verursacht Südamerika damit '  + SA + '%. ') 
console.log('Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um '  + sA + '% verändert. ')
console.log('im Vergleich zu 2008 sind das ' + Sa + 'kg CO2')


/*Europa*/


var EU : number = Math.round(100.0*((100/alles)*obj3)) / 100.0;
var Eu : number = Math.round(100*(((obj3/obj3_2008)*100) - 100))/100;
var eU : number = Math.round(100*(obj3 - obj3_2008))/100;

console.log('Die Emission von Europa ist: '  + obj3 + 'kg CO2. Relativ zur Gesamtemission der Welt verursacht Europa damit '  +EU + '%. ') 
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um '  + Eu + '% verändert. ')
console.log('im Vergleich zu 2008 sind das ' + eU + 'kg CO2')

/*Nordamerika*/

var NA : number = Math.round(100.0*((100/alles)*obj4)) / 100.0;
var Na : number = Math.round(100*(((obj4/obj4_2008)*100) - 100))/100;
var na : number = Math.round(100*(obj4 - obj4_2008))/100;

console.log('Die Emission von Nordamerika ist: '  + obj4 + 'kg CO2. Relativ zur Gesamtemission der Welt verursacht Nordamerika damit '  + NA + '%. ') 
console.log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um '  + Na + '% verändert. ')
console.log('im Vergleich zu 2008 sind das ' + na + 'kg CO2.')

/*Asien*/

var AS : number = Math.round(100.0*((100/alles)*obj5)) / 100.0;
var aS : number = Math.round(100*(((obj5/obj5_2008)*100) - 100))/100;
var As : number = Math.round(100*(obj5 - obj5_2008))/100;

console.log('Die Emission von Asien ist: '  + obj5 + 'kg CO2. Relativ zur Gesamtemission der Welt verursacht Asien damit '  + AS + '%. ') 
console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um '  + aS + '% verändert. ')
console.log('im Vergleich zu 2008 sind das ' + As + 'kg CO2')


/*Australien*/

var AU : number = Math.round(100.0*((100/alles)*obj6)) / 100.0;
var aU : number = Math.round(100*(((obj6/obj6_2008)*100) - 100))/100;
var Au : number = Math.round(100*(obj6 - obj6_2008))/100;

console.log('Die Emission von Australien ist: '  + obj6 + 'kg CO2. Relativ zur Gesamtemission der Welt verursacht Australien damit '  + AU + '%. ') 
console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um '  + aU + '% verändert. ')
console.log('im Vergleich zu 2008 sind das ' + Au + 'kg CO2')


/*Aufgabe 06*/

window.addEventListener("load", function () { 


/*Afrika*/
function Africa (): void {
    document.getElementById("titleRegion").innerHTML="Africa";
    document.getElementById("emission08").innerHTML=obj1.toFixed(1);
    document.getElementById("kontinent").innerHTML="Africa";
    document.getElementById("worldemission").innerHTML=aFR.toFixed(1);
    document.getElementById("growth").innerHTML= afR.toFixed(1);
    document.getElementById("absolutegrowth").innerHTML=afr.toFixed(1);
    
}
document.querySelector(".africa").addEventListener("click" , Africa);

/*Südamerika*/
function Suedamerika (): void {
    document.getElementById("titleRegion").innerHTML="South America";
    document.getElementById("emission08").innerHTML=obj2.toFixed(1);
    document.getElementById("kontinent").innerHTML="South America";
    document.getElementById("worldemission").innerHTML=SA.toFixed(1);
    document.getElementById("growth").innerHTML=sA.toFixed(1);
    document.getElementById("absolutegrowth").innerHTML=Sa.toFixed(1);
}
document.querySelector(".southamerica").addEventListener("click" , Suedamerika);

/*Europa*/
    function Europa () {
    document.getElementById("titleRegion").innerHTML="Europe";
    document.getElementById("emission08").innerHTML=obj3.toFixed(1);
    document.getElementById("kontinent").innerHTML="Europe";
    document.getElementById("worldemission").innerHTML=EU.toFixed(1);
    document.getElementById("growth").innerHTML=Eu.toFixed(1);
    document.getElementById("absolutegrowth").innerHTML=eU.toFixed(1);
}
document.querySelector(".europe").addEventListener("click" , Europa);   

/*Nordamerika*/
function Nordamerika () {
    document.getElementById("titleRegion").innerHTML="NorthAmerica";
    document.getElementById("emission08").innerHTML=obj4.toFixed(1);
    document.getElementById("kontinent").innerHTML="North America";
    document.getElementById("worldemission").innerHTML=NA.toFixed(1);
    document.getElementById("growth").innerHTML=Na.toFixed(1);
    document.getElementById("absolutegrowth").innerHTML=na.toFixed(1);
}


/*Asien*/
function Asien () {
    document.getElementById("titleRegion").innerHTML="Asia";
    document.getElementById("emission08").innerHTML=obj5.toFixed(1);
    document.getElementById("kontinent").innerHTML="Asia";
    document.getElementById("worldemission").innerHTML=AS.toFixed(1);
    document.getElementById("growth").innerHTML=aS.toFixed(1);
    document.getElementById("absolutegrowth").innerHTML=As.toFixed(1);
}

/*Austarlien*/
function Australien () {
    document.getElementById("titleRegion").innerHTML="Australia";
    document.getElementById("emission08").innerHTML=obj6.toFixed(1);
    document.getElementById("kontinent").innerHTML="Australia";
    document.getElementById("worldemission").innerHTML=AU.toFixed(1);
    document.getElementById("growth").innerHTML=aU.toFixed(1);
    document.getElementById("absolutegrowth").innerHTML=Au.toFixed(1);
}

/*Klick*/
document.querySelector(".nouthamerica").addEventListener("click" , Nordamerika);
document.querySelector(".asia").addEventListener("click" , Asien);
document.querySelector(".australia").addEventListener("click" , Australien);


})};