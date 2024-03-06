/*
https://projecteuler.net/archives

https://projecteuler.net/problem=5

Complete.

console.log();
*/


nums = [11,12,13,14,15,16,17,18,19,20]

for(let i=1000; i < 1000000000; i++){
  if(i%11 ===0 && i%12 ===0 &&  i%13 ===0 &&  i%14 ===0 &&  i%15 ===0){
    if(i%16 ===0 && i%17 ===0 &&  i%18 ===0 &&  i%19 ===0 &&  i%20 ===0){
      console.log(i);
    }
  }
}


