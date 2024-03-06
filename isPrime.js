
/*
Doesn't work on numbers less than 7.


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


