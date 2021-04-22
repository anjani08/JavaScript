let popped = 0;

document.addEventListener('mouseover', function(e) {
	if(e.target.className === "balloon"){
		e.target.style.background = "#ededed";
		e.target.textContent = "POP!";
		popped++;
		removeEvent(e);
		checkAllPopped();
	}
});

function removeEvent(e){
	e.target.removeEventListener('mouseover',function(){
	})
};

function checkAllPopped(){
	if(popped === 25){
		console.log('all popped');
		let gallery = document.querySelector('#balloon-gallery');
		let message = document.querySelector('#noBalloons');

		gallery.innerHTML = '';
		message.style.display = 'block';
	}
}