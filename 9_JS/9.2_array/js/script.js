var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var newName = 'Marian'

var allNames = femaleNames.concat(maleNames);
console.log(allNames);
 
if (allNames.indexOf(newName) === -1) {
	var allplus1Names = allNames.push(newName);
	console.log(allNames);
} else {
	alert('podaj imię, które się nie powtarza');
}
