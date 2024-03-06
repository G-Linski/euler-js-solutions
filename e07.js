/*
https://projecteuler.net/archives

https://projecteuler.net/problem=7

Complete,

console.log();
*/


function isPrime(num){

  let limit = Math.ceil(Math.sqrt(num));
  if (num%2 ===0 || num%3===0 || num%5===0 || num===1 || num===0){
    return false;
  }

  for(let i=7; i < limit+1; i+=2){
    if (num%i===0){
      return false;
    }

  }
  return true;
}



var primeCount = 3;
startVal = 7;
while(primeCount < 10001){
  if (isPrime(startVal)){
    primeCount+=1;
    console.log(startVal,primeCount);
  }
  startVal+=2;

}







