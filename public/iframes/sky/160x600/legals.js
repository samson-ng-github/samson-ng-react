function createLegals() {
	var labelContainer = document.getElementById('legal-label');
	labelContainer.innerHTML = data.legalsButton;
	labelContainer.addEventListener('click', _handleLabelContainerClick, false);

	var legalTextContainer = document.getElementById('legal');
	legalTextContainer.innerHTML = '<p class="legal-copy legal-copy-mobile">' + data.legalsCopy + '</p>';

	var close = document.createElement('div');
	close.setAttribute('id', 'close-button');
	close.innerHTML = 'X';
	document.getElementById('legal').appendChild(close);
}

function _handleLabelContainerClick(event) {
	var labelContainer = document.getElementById('legal-label');
	labelContainer.style.opacity = 0;
	labelContainer.removeEventListener('click', _handleLabelContainerClick);
    var distance = document.getElementById('legal').offsetHeight;
    if(document.getElementById('legal').offsetHeight > stage.canvas.height){
        distance = stage.canvas.height - separationLegalTop;
        document.getElementById('legal').style.height = distance + 'px';
		document.getElementById('legal').style.width = document.getElementById('canvas').style.width;

    }
	TweenMax.to(document.getElementById('legal'), 0.3, {y:'-=' + (distance)});
	document.getElementById('close-button').addEventListener('click', _handleCloseButtonClick, false);
}

function _handleCloseButtonClick(event) {
	var labelContainer = document.getElementById('legal-label');
	labelContainer.style.opacity = 1;
	labelContainer.addEventListener('click', _handleLabelContainerClick, false);
    var distance = document.getElementById('legal').offsetHeight;
    if(document.getElementById('legal').offsetHeight > stage.canvas.height){
        distance = stage.canvas.height - separationLegalTop;
    }
    TweenMax.to(document.getElementById('legal'), 0.3, {y:'+=' + (distance)});
	document.getElementById('legal').style.width = document.getElementById('canvas').style.width;

    document.getElementById('close-button').removeEventListener('click', _handleCloseButtonClick);
}
