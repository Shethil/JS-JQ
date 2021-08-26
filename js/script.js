function changeText() {
	document.getElementById("v1").innerHTML="Welcome";
	document.getElementsByClassName("c1")[0].innerHTML="Welcome";
	document.getElementsByClassName("c1")[0].style.color="red";
	document.getElementsByClassName("c1")[1].innerHTML="Welcome";
	document.getElementsByClassName("c1")[1].style.color="green";
	document.getElementsByClassName("c1")[2].innerHTML="Welcome";
	document.getElementsByClassName("c1")[2].style.color="blue";
}


function date() {
	document.getElementById("v2").innerHTML= Date();
}

function repetation() {
	var text = "Keep calm and carry on. \n"
	document.getElementById("v3").innerHTML= text.repeat(3);
}

function changeSize() {
	document.getElementById("v4").style.fontSize="50px";
}

function imgOne() {
	document.getElementById("img").src="images/1.jpg";
}

function imgTwo() {
	document.getElementById("img").src="images/2.jpg";
}

function imgThree() {
	document.getElementById("img1").src="images/4.jpg";
}

function imgFour() {
	document.getElementById("img2").src="images/1.jpg";
}

function imgFive() {
	document.getElementById("img2").src="images/2.jpg";
}