// PART 1

var number = +prompt('Enter number');
var power = +prompt('Enter power');

function pow(x, n){
	var result = 1;
	for (var i = 0; i < n; i++){
		result = result * x;
	}
	return result;
}
var numberRaisedToPower = pow(number, power);
console.log('Number rised to a power', numberRaisedToPower);


// PART 2

var arr = [];
for (var i = 0; i < 5; i++) {
	arr[i] = prompt('Enter user name');
}
console.log('array =', arr);

var userName = prompt('Enter your name');
var flag = false;

for (var i = 0; i < arr.length; i++) {
	if (arr[i] === userName){
		flag = true;
	}
}
if (flag) {
	alert(userName + ', you have succesfully entered.')
} else {
	alert('Wrong user name.')
}