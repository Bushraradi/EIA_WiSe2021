
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



