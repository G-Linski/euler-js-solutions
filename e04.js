/*
https://projecteuler.net/archives

https://projecteuler.net/problem=4

Try with regex?


console.log();
*/

function reverseString(str){
  var revString = '';
  for(let i = str.length-1; i >-1;i--){
    a = str[i];
    var temp = revString+a;
    var revString = temp;
  }
  return revString;
}

var maxi = 0;

for(i=100;i<1000;i++){
  for(j=100;j<1000;j++){
    let total = i*j;
    if(total > 99999){
      let str = total.toString();
      revStr = reverseString(str);
      if (str === revStr){
        if (total > maxi){
          var maxi = total;
          console.log(str,revStr);
        }
      }

    }
    
  }
}


console.log(reverseString('Gabe'));






