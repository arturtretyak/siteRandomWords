var words = [];

function saveTextToMassiveWords(argument) {
	if (argument=="Enter") {
		words[words.length] = document.getElementById("myText").value;
		document.getElementById("myText").value = null;
		console.log(words);
	}
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var wordAfter;
var wordsAfter = [];
function writen(){
	var randomNumber = getRandomInt(words.length);
	var word = words[randomNumber];
	while(word == wordAfter && words.length != 0 && words.length != 1){
		if (word == wordAfter && words.length == 2) {
			word = words[getRandomInt(words.length)];
			break;
		}
		word = words[getRandomInt(words.length)]
	}
	wordAfter = word;
	if (words.length != 0) {
		document.getElementById("hernaasd").innerHTML = word;
	}
}

var table = document.getElementById("textOfList");
function writeList(){
		document.getElementById("textOfList").style.display='block';
		document.getElementById("textOfList").deleteRow(0);
		table = document.getElementById("textOfList");
		var row  = table.insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = words;

}
function funcHide(){
	document.getElementById("textOfList").style.display='none';
}