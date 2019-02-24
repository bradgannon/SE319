var rs = require('readline-sync');

var fNum1 = rs.question('1st Number: ');
var fNum2 = rs.question('2nd Number: ');
var fNum3 = rs.question('3rd Number: ');
var fNum4 = rs.question('4th Number: ');

var fNum1Fact = factorial(fNum1);
var fNum2Sum = sumDigits(fNum2);
var fNum3Reverse = reverse(fNum3);
var fNum4Pal = palindrome(fNum4);
console.log('Factorial of the 1st number is = ' + fNum1Fact);
console.log('The Sum of all the digits of the 2nd number = ' + fNum2Sum);
console.log('The Reverse of the 3rd number is = ' + fNum3Reverse);
console.log('Is the 4th Number a Palindrome(True/False)? = ' + fNum4Pal);

function factorial(num) {
	if (num < 0)
		return -1;
	
	else if (num == 0)
		return 1;
	
	else {
		return (num * factorial(num - 1));
	}
}

function sumDigits(num) {
	var sum = 0;
	
	while (num) {
		sum += num % 10;
		num = Math.floor(num / 10);
	}
	
	return sum;
}

function reverse(num) {
	num = num + "";
	return num.split("").reverse().join("");
}

function palindrome(num) {
	num = num + ""; // Now a string
	var index = num.length - 1;
	
	for (var i = 0; i <= index; i++) {
		if (num.charAt(i) != num.charAt(index))
			return false;
		index--;
	}
	return true;
}
	