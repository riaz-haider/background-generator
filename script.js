import {without} from 'lodash';
console.log(without);
var mycss = document.querySelector("h3");
var mycolor1 = document.querySelector(".color1");
var mycolor2 = document.querySelector(".color2");
var mybody = document.getElementById("gradient");

function setgradient() {

    var newGradient = "linear-gradient(to right, " + mycolor1.value +  ", " +  mycolor2.value + ")";
	mybody.style.background = newGradient;

	mycss.textContent = mybody.style.background + ";";
}

mycolor1.addEventListener("input", setgradient);
mycolor2.addEventListener("input", setgradient);