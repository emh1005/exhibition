// check cookie enable
var cookieEnable = areCookiesEnabled();
var shoppingCart = new Set();
//display us/uk options
var usbtn = document.getElementById("usbtn");
var us = document.getElementById("us");

var ukbtn = document.getElementById("ukbtn");
var uk = document.getElementById("uk");

var country = document.getElementById("country");

var allBtn = document.querySelectorAll(".button > a");
var cards = document.getElementsByClassName("cards");

var btnAction = function(a, b, btn) {
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
var cardList = {};
var testCheck = false;
var addToCart = function(e) {
	var schoolName = e.target.parentNode.parentNode.parentNode.name;
	if (cookieEnable) {
		appendCookie('schools', schoolName);
//	} else {  // no cookie, add to cart directly
//		addItemToList(tempy, schoolName);
	}
	shoppingCart.add(schoolName);
	testCheck = true;
	alert(schoolName+" 已新增至清單!");
}
var cardClick = function(e) {
	if (testCheck) {
		testCheck = false;
		return;
	}
	var schoolName = e.target.parentNode.parentNode.id;
	var schoolObj = schoolData.find(function(item, index, array){
		return item.id === schoolName;
	});
	modal.name = schoolObj.name;
	modal.getElementsByClassName("schoolimg")[0].setAttribute("src", 'img/'+schoolObj.img);
	modal.getElementsByClassName("tableName")[0].innerHTML = schoolObj.name;
	modal.getElementsByClassName("tableIntro")[0].innerHTML = schoolObj.intro;
	modal.getElementsByClassName("tableRank")[0].innerHTML = schoolObj.rank;
	modal.getElementsByClassName("tableMajor")[0].innerHTML = schoolObj.major;
	modal.getElementsByClassName("tableExtra")[0].innerHTML = schoolObj.extra;
	modal.classList.remove("fade-out");
	modal.classList.add("fade-in");
	modal.style.display = "block";
	/*modal.style.opacity = "1";
	modal.style.visibility = "visible";*/
}
var clickAction = function(ct, type) {
	var a = document.getElementById(ct);
	var btn = document.getElementById(type+'btn');
	var card = document.getElementById(type);
	var aLink = document.querySelectorAll("."+ct+" > a");
	for(var i=0; i< aLink.length;i++) {
		aLink[i].classList.remove("selected");
	}
	a.classList.add("clicked");
	btn.classList.add("selected");
	for(var j=0; j< cards.length;j++) {
		cards[j].style.display = "none";
	}
	if (!cardList[type]) { // card not exist
		// get a list of school and create cards
		var myList = schoolData.filter(function(item, index, array){
			return item.type === type;
		});
		var templateNode = document.getElementById('template');
		for (var i=0; i< myList.length; i++) {
			var obj = myList[i];
			var myNode = templateNode.cloneNode(true);
			myNode.id = obj.id;
			myNode.name = obj.name;
			myNode.getElementsByClassName("cardImg")[0].setAttribute("src", 'img/'+obj.cardimg);
			myNode.getElementsByClassName("cardName")[0].innerHTML = obj.name;
			myNode.getElementsByClassName("cardRank")[0].innerHTML = obj.cardrank;
//			myNode.getElementsByClassName("tableExtra")[0].innerHTML = obj.extra;
			myNode.getElementsByClassName("addbtn")[0].onclick = addToCart;
			myNode.onclick = cardClick;
			card.appendChild(myNode);
		}
		cardList[type] = true;
	}
	card.style.display = "block";
}

usbtn.onclick = function() {
	uk.classList.remove("clicked");
	for(var i=0; i< allBtn.length;i++) {
		allBtn[i].classList.remove("selected");
	}
	btnAction(country, us, usbtn);
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
	btnAction(country, uk, ukbtn);
	uk.style.display = "block";
	us.style.display = "none";
	/*us.style.opacity = "0";
	us.style.visibility = "hidden";
	us.style.display = "none";*/
}

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
ushsbtn.onclick = function() {
	clickAction("us", "ushs");
}
usugbtn.onclick = function() {
	clickAction("us", "usug");
}
uspgbtn.onclick = function() {
	clickAction("us", "uspg");
}
ustalkbtn.onclick = function() {
	clickAction("us", "ustalk");
}
ukhsbtn.onclick = function() {
	clickAction("uk", "ukhs");
}
ukugbtn.onclick = function() {
	clickAction("uk", "ukug");
}
ukpgbtn.onclick = function() {
	clickAction("uk", "ukpg");
}
uktalkbtn.onclick = function() {
	clickAction("uk", "uktalk");
}

//popup modal for schools and events
var modal = document.getElementById("schoolModal");
//var btn = document.getElementById("temp");
var close = document.getElementById("close");

closeModal = function() {
	modal.classList.remove("fade-in");
	modal.classList.add("fade-out");
	modal.style.display = "none";
	/*modal.style.opacity = "0";
	modal.style.visibility = "hidden";*/
}
close.onclick = closeModal;

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

var tempy = document.getElementById("tempy");

cartbtn.onclick = function() {
	modaloverlay.classList.remove("fade-out");
	modaloverlay.classList.add("fade-in");
	modaloverlay.style.display = "block";
	cart.classList.remove("fade-out");
	cart.classList.add("fade-in");
	cart.style.display = "block";
	// add to cart for cookie case
	var schoolList = Array.from(shoppingCart);
	if (cookieEnable) {
		var schools = getCookie('schools');
		if (schools && schools.length > 0) {
			schoolList = schools.split(',');
		}  // else no cookie set
	}
	for (var i=0; i<schoolList.length; i++) {
		addItemToList(tempy, schoolList[i]);
	}

}

closeForm = function() {
	modaloverlay.classList.remove("fade-in");
	modaloverlay.classList.add("fade-out");
	modaloverlay.style.display = "none";
	cart.classList.remove("fade-in");
	cart.classList.add("fade-out");
	cart.style.display = "none";
	while (tempy.firstChild) {
		tempy.removeChild(tempy.firstChild);
	}
}
closecart.onclick = closeForm;


//add to shopping cart
var addschool = document.getElementById("ugasu");
var deleteschool = "deleteschool";

function addItemToList(list, item) {
	var li = document.createElement("li");
	var dataSpan = document.createElement('span')
	dataSpan.setAttribute("class", "product");
	dataSpan.innerHTML = item;
	var deleteSpan = document.createElement('span')
	deleteSpan.setAttribute("class", "delete");
	deleteSpan.innerHTML = '&times';
	li.appendChild(dataSpan);
	li.appendChild(deleteSpan);
//  li.appendChild(document.createTextNode("asu"));
	list.appendChild(li);
	deleteSpan.onclick = function(e) {
		e.target.parentNode.remove();
		var value = e.target.parentNode.innerText;
		removeCookie("schools", value);
		shoppingCart.delete(value);
	};
}

addschool.onclick = function(e) {
//	tempy.insertAdjacentHTML('afterend', '<li id="deleteschool"><span class="product">asu</span><span class="delete" onclick="document.getElementById(deleteschool).remove();">&times;</span></li>');
	var schoolName = e.target.parentNode.parentNode.name;
	if (cookieEnable) {
		appendCookie('schools', schoolName);
//	} else {  // no cookie, add to cart directly
//		addItemToList(tempy, schoolName);
	}
	shoppingCart.add(schoolName);
	closeModal();
}

var deleteproduct = document.getElementById("deleteproduct");
var deletebtn = document.getElementById("deletebtn");

deletebtn.onclick = function() {
	deleteproduct.remove();
}

var topbutton = document.getElementById("topBtn");
var linebutton = document.getElementById("linebtn");
var sticky = document.getElementById("sticky");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
    linebutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
    linebutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// ---------- function for submit form ---------
function submitForm() {
var schools = document.getElementById("tempy").getElementsByTagName("li");
document.getElementById("schools").value = liAsString(schools);
deleteCookie('schools');
shoppingCart.clear();
closeForm();
}

// get all li as string
function liAsString(liObj) {
	var result="";
	if (liObj.length < 1)
		return result;	//no data
	result = liObj[0] + ',';
	for(var i=1; i<liObj.length; i++) {
		// remove duplicates
		if (liObj.indexOf(liObj[i]) == i)  //check for duplicate, where new one never appeared before
			result = ','+liObj[i].textContent+result;
    };
	return result;
}

// ------------ cookie ---------
// check if cookie is enabled
function areCookiesEnabled() {
    try {
      document.cookie = 'cookietest=1';
      var cookiesEnabled = document.cookie.indexOf('cookietest=') !== -1;
      document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
      return cookiesEnabled;
    } catch (e) {
      return false;
    }
}

// get all cookies in a name/value map
function getAllCookies() {
    var cookieMap = {};
    var cookieArray = document.cookie.split(';');
    for (var i=0; i < cookieArray.length; ++i) {
		if (cookieArray[i] && cookieArray[i].length > 0) {
			cookie = cookieArray[i].trim().split('=');
			cookieMap[cookie[0]] = cookie[1];
		}
    }
    
    return cookieMap;
}

function getCookie(name) {
    var value = getAllCookies()[name];
    if (value) {
        value = decodeURIComponent(value);
    }
    return value;
}

// set or add a cookie
function setCookie(name, value) {
	setEncodedCookie(name, encodeURIComponent(value));
}
function setEncodedCookie(name, value) {
	var cookie = 'max-age=2592000; path=/';
//	var cookieMap = getAllCookies();
//	if (Object.keys(cookieMap).length == 0)
		cookie = name +'='+ value + '; '+ cookie;
//	else {
//		cookieMap[name] = value;
//		for (var i in cookieMap) {
//			cookie = i+'='+ cookieMap[i] + '; '+cookie
//		}
//	}
	document.cookie = cookie;
}

// append value to existing cookie, create one if not exist
function appendCookie(name, value) {
    var oldValue = getAllCookies()[name];
    if (oldValue) {
        value = oldValue+','+ value;
    }
	setCookie(name, value);
}
function removeCookie(name,value) {
    var oldValue = getCookie(name);
    if (oldValue) {
		var newValue = '';
		var items = oldValue.split(',');
		for (var i=0; i < items.length; ++i) {
			if (items[i].trim() != value)
				newValue += ","+items[i];
		}
		if (newValue) {
			setCookie(name, newValue.substring(2));
		} else {
			deleteCookie(name);
		}
	}
}

// delete a cookie
function deleteCookie(name) {
	document.cookie = name +"=; expires=Thu, 01-Jan-1970 00:00:01 GMT";
}
