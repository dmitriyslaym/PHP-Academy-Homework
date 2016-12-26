window.onload = function() {
	var cardWrapper = document.getElementsByClassName('card-wrapper')[0];
	var counter = 0;
	cardWrapper.onclick = function() {
		counter++;
		if (counter % 2 != 0) {
			this.children[0].style.transform = "rotateY(-180deg)";
			this.children[1].style.transform = "rotateY(0deg)";
		}
		else {
			this.children[0].style.transform = "rotateY(0deg)";
			this.children[1].style.transform = "rotateY(180deg)";
		}
	};
};