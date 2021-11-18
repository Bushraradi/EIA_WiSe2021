var L06;
(function (L06) {
    /*alles von A05*/
    /*Afrika*/
    var obj1 = 1235.5;
    var obj1_2008 = 1028;
    /*Südamerika*/
    var obj2 = 1261.5;
    var obj2_2008 = 1132.6;
    /*Europa*/
    var obj3 = 4209.3;
    var obj3_2008 = 4965.7;
    /*Nordamerika*/
    var obj4 = 6035.6;
    var obj4_2008 = 6600.4;
    /*Asien*/
    var obj5 = 16274.1;
    var obj5_2008 = 12954.7;
    /*Australien*/
    var obj6 = 2100.5;
    var obj6_2008 = 1993;
    /*Gesamt*/
    var alles = obj1 + obj2 + obj3 + obj4 + obj5 + obj6;
    /*Afrika*/
    var aFR = Math.round(100.0 * ((100 / alles) * obj1)) / 100.0;
    var afR = Math.round(100 * (((obj1 / obj1_2008) * 100) - 100)) / 100;
    var afr = Math.round(100 * (obj1 - obj1_2008)) / 100;
    console.log('Die Emission von Afrika ist: ' + obj1 + 'kg CO2. Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + aFR + '%. ');
    console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + afR + '% verändert. ');
    console.log('im Vergleich zu 2008 sind das ' + afr + 'kg CO2');
    /*Südamerika*/
    var SA = Math.round(100.0 * ((100 / alles) * obj2)) / 100.0;
    var sA = Math.round(100 * (((obj2 / obj2_2008) * 100) - 100)) / 100;
    var Sa = Math.round(100 * (obj2 - obj2_2008)) / 100;
    console.log('Die Emission von Südamerika ist: ' + obj2 + 'kg CO2. Relativ zur Gesamtemission der Welt verursacht Südamerika damit ' + SA + '%. ');
    console.log('Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + sA + '% verändert. ');
    console.log('im Vergleich zu 2008 sind das ' + Sa + 'kg CO2');
    /*Europa*/
    var EU = Math.round(100.0 * ((100 / alles) * obj3)) / 100.0;
    var Eu = Math.round(100 * (((obj3 / obj3_2008) * 100) - 100)) / 100;
    var eU = Math.round(100 * (obj3 - obj3_2008)) / 100;
    console.log('Die Emission von Europa ist: ' + obj3 + 'kg CO2. Relativ zur Gesamtemission der Welt verursacht Europa damit ' + EU + '%. ');
    console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + Eu + '% verändert. ');
    console.log('im Vergleich zu 2008 sind das ' + eU + 'kg CO2');
    /*Nordamerika*/
    var NA = Math.round(100.0 * ((100 / alles) * obj4)) / 100.0;
    var Na = Math.round(100 * (((obj4 / obj4_2008) * 100) - 100)) / 100;
    var na = Math.round(100 * (obj4 - obj4_2008)) / 100;
    console.log('Die Emission von Nordamerika ist: ' + obj4 + 'kg CO2. Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ' + NA + '%. ');
    console.log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + Na + '% verändert. ');
    console.log('im Vergleich zu 2008 sind das ' + na + 'kg CO2.');
    /*Asien*/
    var AS = Math.round(100.0 * ((100 / alles) * obj5)) / 100.0;
    var aS = Math.round(100 * (((obj5 / obj5_2008) * 100) - 100)) / 100;
    var As = Math.round(100 * (obj5 - obj5_2008)) / 100;
    console.log('Die Emission von Asien ist: ' + obj5 + 'kg CO2. Relativ zur Gesamtemission der Welt verursacht Asien damit ' + AS + '%. ');
    console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + aS + '% verändert. ');
    console.log('im Vergleich zu 2008 sind das ' + As + 'kg CO2');
    /*Australien*/
    var AU = Math.round(100.0 * ((100 / alles) * obj6)) / 100.0;
    var aU = Math.round(100 * (((obj6 / obj6_2008) * 100) - 100)) / 100;
    var Au = Math.round(100 * (obj6 - obj6_2008)) / 100;
    console.log('Die Emission von Australien ist: ' + obj6 + 'kg CO2. Relativ zur Gesamtemission der Welt verursacht Australien damit ' + AU + '%. ');
    console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + aU + '% verändert. ');
    console.log('im Vergleich zu 2008 sind das ' + Au + 'kg CO2');
    /*Aufgabe 06*/
    window.addEventListener("load", function () {
        /*Afrika*/
        function Africa() {
            document.getElementById("titleRegion").innerHTML = "Africa";
            document.getElementById("emission08").innerHTML = obj1.toFixed(1);
            document.getElementById("kontinent").innerHTML = "Africa";
            document.getElementById("worldemission").innerHTML = aFR.toFixed(1);
            document.getElementById("growth").innerHTML = afR.toFixed(1);
            document.getElementById("absolutegrowth").innerHTML = afr.toFixed(1);
        }
        /*Südamerika*/
        function Suedamerika() {
            document.getElementById("titleRegion").innerHTML = "South America";
            document.getElementById("emission08").innerHTML = obj2.toFixed(1);
            document.getElementById("kontinent").innerHTML = "South America";
            document.getElementById("worldemission").innerHTML = SA.toFixed(1);
            document.getElementById("growth").innerHTML = sA.toFixed(1);
            document.getElementById("absolutegrowth").innerHTML = Sa.toFixed(1);
        }
        /*Europa*/
        function Europa() {
            document.getElementById("titleRegion").innerHTML = "Europe";
            document.getElementById("emission08").innerHTML = obj3.toFixed(1);
            document.getElementById("kontinent").innerHTML = "Europe";
            document.getElementById("worldemission").innerHTML = EU.toFixed(1);
            document.getElementById("growth").innerHTML = Eu.toFixed(1);
            document.getElementById("absolutegrowth").innerHTML = eU.toFixed(1);
        }
        /*Nordamerika*/
        function Nordamerika() {
            document.getElementById("titleRegion").innerHTML = "NorthAmerica";
            document.getElementById("emission08").innerHTML = obj4.toFixed(1);
            document.getElementById("kontinent").innerHTML = "North America";
            document.getElementById("worldemission").innerHTML = NA.toFixed(1);
            document.getElementById("growth").innerHTML = Na.toFixed(1);
            document.getElementById("absolutegrowth").innerHTML = na.toFixed(1);
        }
        /*Asien*/
        function Asien() {
            document.getElementById("titleRegion").innerHTML = "Asia";
            document.getElementById("emission08").innerHTML = obj5.toFixed(1);
            document.getElementById("kontinent").innerHTML = "Asia";
            document.getElementById("worldemission").innerHTML = AS.toFixed(1);
            document.getElementById("growth").innerHTML = aS.toFixed(1);
            document.getElementById("absolutegrowth").innerHTML = As.toFixed(1);
        }
        /*Austarlien*/
        function Australien() {
            document.getElementById("titleRegion").innerHTML = "Australia";
            document.getElementById("emission08").innerHTML = obj6.toFixed(1);
            document.getElementById("kontinent").innerHTML = "Australia";
            document.getElementById("worldemission").innerHTML = AU.toFixed(1);
            document.getElementById("growth").innerHTML = aU.toFixed(1);
            document.getElementById("absolutegrowth").innerHTML = Au.toFixed(1);
        }
        /*Klick*/
        document.getElementById(".africa").addEventListener("click", Africa);
        document.getElementById(".southamerica").addEventListener("click", Suedamerika);
        document.getElementById(".europe").addEventListener("click", Europa);
        document.getElementById(".nouthamerica").addEventListener("click", Nordamerika);
        document.getElementById(".asia").addEventListener("click", Asien);
        document.getElementById(".australia").addEventListener("click", Australien);
    });
})(L06 || (L06 = {}));
;
//# sourceMappingURL=skript.js.map