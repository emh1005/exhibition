//display us/uk options
var usbtn = document.getElementById("usbtn");
var us = document.getElementById("us");

var ukbtn = document.getElementById("ukbtn");
var uk = document.getElementById("uk");

var country = document.getElementById("country");

var allBtn = document.querySelectorAll(".button > a");
var cards = document.getElementsByClassName("cards");
/*
usbtn.onclick = function() {
	us.style.display = "block";
	usbtn.style.background = "#103256";
	usbtn.style.color = "#fff";
	usbtn.style.width = "80px";
	usbtn.style.height = "80px"; //omg what to do with rwd?????
	usbtn.style.fontSize = "19px";
	ukbtn.style.width = "80px";
	ukbtn.style.height = "80px";
	ukbtn.style.fontSize = "19px"; //omg what to do with rwd?????
	uk.style.display = "none";
	ukbtn.style.background = "#D9E9F9";
	ukbtn.style.color = "#000";
}

ukbtn.onclick = function() {
	uk.style.display = "block";
	ukbtn.style.background = "#103256";
	ukbtn.style.color = "#fff";
	ukbtn.style.width = "80px";
	ukbtn.style.height = "80px"; //omg what to do with rwd?????
	ukbtn.style.fontSize = "19px";
	usbtn.style.width = "80px";
	usbtn.style.height = "80px"; //omg what to do with rwd?????
	usbtn.style.fontSize = "19px";
	us.style.display = "none";
	usbtn.style.background = "#D9E9F9";
	usbtn.style.color = "#000";
	us.classList.remove("clicked");
	for(var i=0; i< y.length;i++) {
		y[i].classList.remove("selected");
	}
}*/

var ushsbtn = document.getElementById("ushsbtn");
var usugbtn = document.getElementById("usugbtn");
var uspgbtn = document.getElementById("uspgbtn");
var ustalkbtn = document.getElementById("ustalkbtn");
var ushs = document.getElementById("ushs");
var usug = document.getElementById("usug");
var uspg = document.getElementById("uspg");
var ustalk = document.getElementById("ustalk");

var ukhsbtn = document.getElementById("ukhsbtn");
var ukugbtn = document.getElementById("ukugbtn");
var ukpgbtn = document.getElementById("ukpgbtn");
var uktalkbtn = document.getElementById("uktalkbtn");
var ukhs = document.getElementById("ukhs");
var ukug = document.getElementById("ukug");
var ukpg = document.getElementById("ukpg");
var uktalk = document.getElementById("uktalk");

/*var x = document.querySelectorAll(".button.us > a");*/
/*
ushsbtn.onclick = function() {
	us.classList.add("clicked");
	ushsbtn.classList.add("selected");
	/* for(var i=0; i< x.length;i++){
    	x[i].style.width = "80px";
    	x[i].style.height = "80px";
    	x[i].style.fontSize = "19px";
		x[i].style.background = "#D9E9F9";
		x[i].style.color = "#000";
 }

	ushs.style.display = "block";
	/*ushsbtn.style.background = "#103256";
	ushsbtn.style.color = "#fff";
	ushsbtn.style.fontSize = "19px";
}*/

var clickAction = function(a, b, btn) {
	a.classList.add("clicked");
	btn.classList.add("selected");
	for(var j=0; j< cards.length;j++) {
		cards[j].style.display = "none";
		/*cards[j].style.opacity = "0";
		cards[j].style.visibility = "hidden";*/
	}
	b.style.display = "block";
	/*b.style.opacity = "1";
	b.style.visibility = "visible";*/
}

usbtn.onclick = function() {
	uk.classList.remove("clicked");
	for(var i=0; i< allBtn.length;i++) {
		allBtn[i].classList.remove("selected");
	}
	clickAction(country, us, usbtn);
	us.style.display = "block";
	uk.style.display = "none";
	/*uk.style.opacity = "0";
	uk.style.visibility = "hidden";
	uk.style.display = "none";*/
}

ukbtn.onclick = function() {
	us.classList.remove("clicked");
	for(var i=0; i< allBtn.length;i++) {
		allBtn[i].classList.remove("selected");
	}
	clickAction(country, uk, ukbtn);
	uk.style.display = "block";
	us.style.display = "none";
	/*us.style.opacity = "0";
	us.style.visibility = "hidden";
	us.style.display = "none";*/
}

ushsbtn.onclick = function() {
	clickAction(us, ushs, ushsbtn);
}

ukhsbtn.onclick = function() {
	clickAction(uk, ukhs, ukhsbtn);
}


//popup modal for schools and events
var modal = document.getElementById("asu");

var btn = document.getElementById("temp");

var close = document.getElementById("close");

btn.onclick = function() {
	modal.classList.remove("fade-out");
	modal.classList.add("fade-in");
	modal.style.display = "block";
	/*modal.style.opacity = "1";
	modal.style.visibility = "visible";*/
}

close.onclick = function() {
	modal.classList.remove("fade-in");
	modal.classList.add("fade-out");
	modal.style.display = "none";
	/*modal.style.opacity = "0";
	modal.style.visibility = "hidden";*/
}

/* idk why it doesn't work, supposed to close window when click anywhere outside, optional
window.onclick = function(event){
	if (event.target == modal) {
		modal.style.display = "none";
	}
}*/

//popup for cart
var cart = document.getElementById("cart");

var cartbtn = document.getElementById("carticon");

var closecart = document.getElementById("closecart");

var modaloverlay = document.getElementById("modaloverlay");

cartbtn.onclick = function() {
	modaloverlay.classList.remove("fade-out");
	modaloverlay.classList.add("fade-in");
	modaloverlay.style.display = "block";
	cart.classList.remove("fade-out");
	cart.classList.add("fade-in");
	cart.style.display = "block";
}

closecart.onclick = function() {
	modaloverlay.classList.remove("fade-in");
	modaloverlay.classList.add("fade-out");
	modaloverlay.style.display = "none";
	cart.classList.remove("fade-in");
	cart.classList.add("fade-out");
	cart.style.display = "none";
}



//add to shopping cart
var addschool = document.getElementById("ugasu");
var tempy = document.getElementById("tempy");
var deleteschool = "deleteschool";

addschool.onclick = function() {
	tempy.insertAdjacentHTML('afterend', '<li id="deleteschool"><span class="product">asu</span><span class="delete" onclick="document.getElementById(deleteschool).remove();">&times;</span></li>');
}

var deleteproduct = document.getElementById("deleteproduct");
var deletebtn = document.getElementById("deletebtn");

deletebtn.onclick = function() {
	deleteproduct.remove();
}



topbutton = document.getElementById("topBtn");
var sticky = document.getElementById("sticky");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}