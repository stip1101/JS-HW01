'use strict';

let n = parseInt(prompt('Enter N number'));
let count = 0;
for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i > 0) {
        console.log(i)
    }
}