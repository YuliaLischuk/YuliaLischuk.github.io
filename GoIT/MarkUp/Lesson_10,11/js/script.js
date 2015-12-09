var number = +prompt('Укажите число возводимое в степень');
var power = +prompt('Укажите степень')

debugger;

var result = 1;

for (var i = 0; i < power; i++) {
	result = result * number;
};

console.log (result);
