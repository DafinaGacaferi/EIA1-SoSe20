"use strict";
var europa = 4965.7 + 4616.4 + 4705.8 + 4615.2 + 4541.5 + 4436.9 + 4202 + 4191.6 + 4247.3 + 4278.7 + 4209.3;
var nordamerika = 6600.4 + 6139.9 + 6375.8 + 6262.8 + 5998.9 + 6167 + 6268.9 + 6048.7 + 5938.3 + 5920.5 + 6035.6;
var afrika = 1028 + 1041.9 + 1072.1 + 1073.7 + 1107.1 + 1134.4 + 1167.1 + 1174.5 + 1192.1 + 1207 + 1235.5;
var asien = 12954.7 + 13246.6 + 13986.8 + 14860.1 + 15308.8 + 15660.2 + 15787.7 + 15877 + 15984 + 16274.3 + 16274.1;
var südamerika = 1132.6 + 1093.1 + 1164.2 + 1215.5 + 1262 + 1308.9 + 1331.3 + 1321.7 + 1294.7 + 1279.2 + 1261.5;
var australien = 1993 + 1875.7 + 1939.1 + 2035.2 + 2063.2 + 2014.7 + 2027.6 + 1986.8 + 1997.4 + 2001.3 + 2100.5;
var welt = europa + nordamerika + afrika + asien + südamerika + australien;
var euw = (europa / welt) * 100;
var naw = (nordamerika / welt) * 100;
var afw = (afrika / welt) * 100;
var asw = (asien / welt) * 100;
var saw = (südamerika / welt) * 100;
var auw = (australien / welt) * 100;
var euver = 4965.7 - 4209.3;
var naver = 6600.4 - 6035.6;
var afver = 1235.5 - 1028;
var asver = 16274.1 - 12954.7;
var saver = 1261.5 - 1132.6;
var auver = 2100.5 - 1993;
var eupro = (euver / 4965.7) * 100;
var napro = (naver / 6600.4) * 100;
var afpro = (afver / 1028) * 100;
var aspro = (asver / 12954.7) * 100;
var sapro = (saver / 1132.6) * 100;
var aupro = (auver / 1993) * 100;
console.log(`Die Emission von Europa ist: ${europa} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Europa damit ${euw}%`);
console.log(`Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ${eupro}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${euver} kg CO2`);
console.log(`Die Emission von NordAmerika ist: ${nordamerika} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt verursacht NordAmerika damit ${naw}%`);
console.log(`Für NordAmerika hat sich 2018 im Vergleich zu 2008 die Emission um ${napro}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${naver} kg CO2`);
console.log(`Die Emission von Afrika ist: ${afrika} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Afrika damit ${afw}%`);
console.log(`Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ${afpro}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${afver} kg CO2`);
console.log(`Die Emission von Asien ist: ${asien} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Asien damit ${asw}%`);
console.log(`Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ${aspro}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${asver} kg CO2`);
console.log(`Die Emission von SüdAmerika ist: ${südamerika} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt verursacht SüdAMerika damit ${saw}%`);
console.log(`Für SüdAmerika hat sich 2018 im Vergleich zu 2008 die Emission um ${sapro}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${saver} kg CO2`);
console.log(`Die Emission von Australien ist: ${australien} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Australien damit ${auw}%`);
console.log(`Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ${aupro}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${auver} kg CO2`);
//# sourceMappingURL=Emissionswerte.js.map