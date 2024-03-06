
'use strict';
/*
https://projecteuler.net/archives

Complete

https://projecteuler.net/problem=6

console.log();
*/

var sumOfSquare = 0;
var summer = 0
for(let i = 0; i < 101; i++){
  summer+=i;
  sumOfSquare += i**2;
}
summer = summer**2;

console.log(summer-sumOfSquare);




