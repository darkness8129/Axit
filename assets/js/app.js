"use strict";
window.onload = function(){
	document.getElementById("defaultOpen").click();
}

function open__item(event, item) {
	var i, slider__item, slid;
	slider__item = document.getElementsByClassName('slider__item');
	slid = document.getElementsByClassName('slid');

	for (i = 0; i < slider__item.length; i++) {
		slider__item[i].style.display = "none";
		console.log(slider__item[i]);
	}
	for (i = 0; i < slid.length; i++) {
    	slid[i].className = slid[i].className.replace(" active", "");
  	}

	document.getElementById(item).style.display = "grid";
	event.currentTarget.className += " active";

}

function show__top(){
	var top__card = document.getElementById("top__card");
	var card__header2 = document.getElementById("card__header2");
	top__card.style.display = "block";
	card__header2.style.paddingBottom=0;
	card__header2.style.borderBottom="none";

}
function hide__top(){
		top__card.style.display = "none";
		card__header2.style.paddingBottom=10+"px";
		card__header2.style.borderBottom="5px solid #ff8b38";

}

