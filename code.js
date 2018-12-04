// This is a comment!
/*

Something

*/
var good = 1;
var downloadStatus;
var dogStatus = good;


let thisBoolean = true;
const thisNumber = Math.random();
const thisString = "Kodiak is very good";
let thisArray = ["purple", "monkey", "dishwasher"];
thisArray.push ("sexmachine");


function readFromInput () {
	const theInput = document.getElementById ("dogbutt");
	if (theInput) {
		const theEmailValue = theInput.value.trim();
		const emailIsValid = (theEmailValue.indexOf("@") !== -1);
		if (emailIsValid === true) {
			alert ("Good jorb!");
		} else {
			alert ("You dumb idiot.");
		}
	} else {
		console.warn ("Can't find input!");
	}
}

const listOfStuff = [5, 35, 420, 69, 42, 29];

const filteredStuff = listOfStuff.filter (function (value) {
	return (value%2 === 0); 
})

console.log (filteredStuff);

// Current method

for (let i = 0; i < listOfStuff.length; i++) {
	const indexValue = listOfStuff [i];
	// console.log (indexValue);
}

// New Method

listOfStuff.map (function(value, x) {
	// console.log (value, x);
}
)

function bunchOfButts (howManyButts) {
console.log ("You have " + howManyButts + " butts.")
}

var myLifeTotal = 20;

function displayLifeTotal () {
	const theSpan = document.getElementById ("liferoo");
	if (theSpan) {
		theSpan.innerHTML = myLifeTotal;
	}
}

function modifyLifeTotal (lifenumber) {
	myLifeTotal = (myLifeTotal + lifenumber);
	displayLifeTotal();
}

displayLifeTotal ();

