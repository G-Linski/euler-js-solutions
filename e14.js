
'use strict';
/*

Complete

https://projecteuler.net/archives

https://projecteuler.net/problem=14

console.log();
*/


function collatz(number){

  if (number===1){
    return 1;
  }

  let totalLoops = 1;
  let breaker = 0;

  while (number!=1){
    if (number%2 === 0){
      number = (number/2);
    }
    else{
      number = (number*3)+1;
    }
    totalLoops+=1;
    
  }
  return totalLoops;
}

let longestSequence = 0;
let startingNumber = 0;

for (let i = 1; i<1000000;i++){
  let ans = collatz(i);
  if (ans > longestSequence){
    longestSequence = ans;
    startingNumber = i;
  }
}
console.log(startingNumber);
console.log(longestSequence);















