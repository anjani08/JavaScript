function changeAlphabet(){
	var alphabet = document.getElementById('alpha').value;
	var code = alphabet.charCodeAt(0)
	var p = document.createElement("p");
	document.body.appendChild(p);
	p.id="nextAlpha";

	if(isCharALetter(alphabet)){
		if((code>=65 && code<90)||(code>=97&& code <122)){
			code=code+1;
		}
		else if(code==90){
			code=65;
		}
		else if(code==122){
			code=97;
		}
		var result = String.fromCharCode(code);
	//p.innerText = "Next Alphabet = " + result;
	}
	else alert('Enter a Alphabet');

	document.getElementById('nextAlpha').innerText = "Next Alphabet  : " +result;

}

changeAlphabet();

function isCharALetter(char){
	return(/[a-zA-Z]/).test(char)
}