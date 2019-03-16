var rs = require('readline-sync');

var fNum1 = rs.question('1st Number: ');
var fNum2 = rs.question('2nd Number: ');
var action = rs.question('Enter the action{+,*,/,%,&,|}');

var dig1 = parseInt(fNum1, 2);
var dig2 = parseInt(fNum2, 2);

var result = dig1 + action + dig2

var result = eval(result);

console.log(result.toString(2));