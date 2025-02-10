"use strict";
/* exported countdown */
function countdown(num) {
    const numbers = [];
    let currentNum = 10;
    while (currentNum >= 1) {
        numbers.push(currentNum);
        currentNum--;
    }
    return numbers;
    console.log(currentNum);
}
