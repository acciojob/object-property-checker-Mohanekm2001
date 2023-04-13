const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
 
	const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  return Object.prototype.hasOwnProperty.call(sampleObject, key);
}

console.log(hasKey("red")); // true
console.log(hasKey("blue")); // false
console.log(hasKey("white")); // true


}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
