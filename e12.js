'use strict';
/*
https://projecteuler.net/archives

https://projecteuler.net/problem=12


console.log();
*/


function genTriangleNum(triNum){
  let total = 1;
  for (let i = 2; i < triNum; i++){
    total+=i;
  }
  return total;
}



for (let i = 1; i<100; i++){
  let x = genTriangleNum(i);
  console.log(x);
}


