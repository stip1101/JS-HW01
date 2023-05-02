'use strict';

let n = parseInt(prompt('Enter N number'));
let count = 0;
if (!isNaN(n) && n >= 0);
else {
    console.log('Enter correct number');
}
    for (let i = 1; i <= n; i++) {
      if (i % 5 === 0) {
        count++;
      }
    }console.log(`Numbers divisible by 5 and less than ${n}: ${count}`);
    