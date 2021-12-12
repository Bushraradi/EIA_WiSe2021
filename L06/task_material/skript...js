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
    /*Aufgabe 06*/
    window.addEventListener("load", function () {
        /*Afrika*/
        function Kontinente(country, country08, country18) {
            document.getElementById("emission08").innerHTML = country18.toFixed(1);
            document.querySelector(".kontinent").innerHTML = country;
            document.getElementById("worldemission").innerHTML = Math.round(100.0 * ((100 / alles) * country08)) / 100.0 + "%";
            document.getElementById("growth").innerHTML = Math.round(100 * (((country18 / country08) * 100) - 100)) / 100 + "%";
            document.getElementById("absolutegrowth").innerHTML = Math.round(country18 - country08).toFixed(1);
            document.getElementById("chart").setAttribute("style", "height: ".concat((100 * (((country18 / country08) * 100) - 100)) / 100, "%"));
        }
        document.querySelector(".africa").addEventListener("click", function () { Kontinente("Afrika", obj1_2008, obj1); });
        document.querySelector(".southamerica").addEventListener("click", function () { Kontinente("Südamerika", obj2_2008, obj2); });
        document.querySelector(".europe").addEventListener("click", function () { Kontinente("Europa", obj3_2008, obj3); });
        document.querySelector(".northamerica").addEventListener("click", function () { Kontinente("Nordamrika", obj4_2008, obj4); });
        document.querySelector(".asia").addEventListener("click", function () { Kontinente("Asien", obj5_2008, obj5); });
        document.querySelector(".australia").addEventListener("click", function () { Kontinente("Australien", obj6_2008, obj6); });
    });
})(L06 || (L06 = {}));
//# sourceMappingURL=skript...js.map