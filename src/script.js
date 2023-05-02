'use strict';

let n = parseInt(prompt('Enter N number'));
let count = 0;

if (!isNaN(n)) {
    for (let i = 1; i < n; i++) {
      if (i % 5 === 0) {
        count++;
      }
    }
    console.log(`Numbers divisible by 5 and less than ${n}: ${count}`);
} else {
    console.log('Enter correct number');
}