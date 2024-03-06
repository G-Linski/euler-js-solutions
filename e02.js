/*
https://projecteuler.net/problem=2

Completed


console.log();
*/

function fibonacci(limit){
  let lead = 1;
  let lag = 1;
  let temp = 1;
  let ans = 0;

  console.log(1);
  console.log(1);

  while(lead < limit){
    temp=lead;
    lead = lead+lag
    lag = temp;

    if (lead > limit){
      break;
    }
    if (lead%2===0){
      ans+=lead;
    }
    console.log(lead)

  }
  return ans;

}



console.log(fibonacci(4000000))




