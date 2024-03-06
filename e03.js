/*
https://projecteuler.net/archives

https://projecteuler.net/problem=3

Complete,
Note: this just prints out the last prime factor


600851475143

console.log();
*/


function isPrime(num){

  let limit = Math.ceil(Math.sqrt(num));
  if (num%2 ===0 || num%3===0 || num%5===0 || num===1 || num===0){
    return false;
  }

  for(let i=7; i < limit; i+=2){
    if (num%i===0){
      return false;
    }

  }
  return true;
}


let upTo = Math.ceil(Math.sqrt(600851475143));

for (let i = 9; i < upTo; i+=2){
  if(isPrime(i) && 600851475143%i===0){
    console.log(i);
  }
}







