var number = +prompt('Укажите число возводимое в степень');
var power = +prompt('Укажите степень')

function pow(x, n){
	var result = 1;
	for (var i = 0; i < n; i++) {
	result = result * x;
	}
return result;
}

var numberRaisedToPower = pow(number, power);
console.log("Number raised to a power", numberRaisedToPower);