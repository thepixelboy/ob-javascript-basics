let factorial = 1;
let i = 1;

while (true) {
  if (i > 10) {
    break;
  }
  
  factorial = factorial * i;
  i++;
}

console.log(factorial);