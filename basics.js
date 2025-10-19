let num = 8
let x = 1 
while (x<=num) {
  if (x === num) break;
  console.log(x);
  x++
}

let num2 = 1

while (num2<=20) {
  if (num2 % 2 === 0)  {
    num2++
    continue;
  }
  console.log(num2);
  num2++
}

// кое как понял 