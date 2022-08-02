var list = [["あ","a"],
["か","ka"],
["さ","sa"],
["た","ta"],
["な","na"],
["は","ha"],
["ま","ma"],
["や","ya"],
["ら","ra"],
["わ","wa"],
["が","ga"],
["ざ","za"],
["だ","da"],
["ば","ba"],
["ぱ","pa"],
["い","i"],
["き","ki"],
["し","shi"],
["ち","chi"],
["に","ni"],
["ひ","hi"],
["み","mi"],
["り","ri"],
["ゐ","wi"],
["ぎ","gi"],
["じ","ji"],
["ぢ","ji"],
["び","bi"],
["ぴ","pi"],
["う","u"],
["く","ku"],
["す","su"],
["つ","tsu"],
["ぬ","nu"],
["ふ","fu"],
["む","mu"],
["ゆ","yu"],
["る","ru"],
["ぐ","gu"],
["ず","zu"],
["づ","zu"],
["ぶ","bu"],
["ぷ","pu"],
["え","e"],
["け","ke"],
["せ","se"],
["て","te"],
["ね","ne"],
["へ","he"],
["め","me"],
["れ","re"],
["ゑ","we"],
["げ","ge"],
["ぜ","ze"],
["で","de"],
["べ","be"],
["ぺ","pe"],
["お","o"],
["こ","ko"],
["そ","so"],
["と","to"],
["の","no"],
["ほ","ho"],
["も","mo"],
["よ","yo"],
["ろ","ro"],
["を","wo"],
["ん","n"],
["ご","go"],
["ぞ","zo"],
["ど","do"],
["ぼ","bo"],
["ぽ","po"]
];

var entry;
var streak = 0;

function swap(a,b){
	var t = list[a];
	list[a] = list[b];
	list[b] = t;
}

function scramble(){
	for(i = 0;i < 1000; i++){
		swap(Math.round(Math.random()*72),Math.round(Math.random()*72));
	}
}

scramble()

var rand;

function init(){
	rand = Math.round(Math.random()*72);
	setTimeout(function(){
	document.getElementById("entry").innerHTML = list[rand][0];}, 100);
	setTimeout(function (){for(i = 0; i < list.length; i++){
		document.getElementById("cheatsheet").innerHTML += list[i][0] + " -> "+ list[i][1] + "<br>";
	}},0);
}

init();

function check(){
 entry = document.getElementById("output").value;
  if(entry.toUpperCase() == list[rand][1].toUpperCase()){
   streak++;
   document.getElementById("result").innerHTML = "RIGHT. Your streak is " + streak;
   document.getElementById("output").value = "";
   init();
  }else{
	document.getElementById("result").innerHTML = "FALSE the right answer was:" + list[rand][1];
   document.getElementById("output").value = "";
	streak = 0;
	init();
 }}
