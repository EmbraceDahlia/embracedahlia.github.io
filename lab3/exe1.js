'use strict'

//regular function
function computeSumOfSquares(nums) {
    let sumOfSquares = 0;
    nums.forEach(n => sumOfSquares += (n * n));
    return sumOfSquares;
}
let numbers = [1, 2, 3];
console.log(`Sum of squares for [${numbers}]: `, computeSumOfSquares(numbers));

//arrow function
const printOddNumbersOnlyFunction = (nums) => {
    console.log(`Odd numbers of the array [${numbers}]: `,
        nums.filter(num => (num % 2) !== 0).join(","));
}
numbers = [1, 2, 3, 4, 5, 6];
printOddNumbersOnlyFunction(numbers);

//function expression
const printFibo = function (n, a, b) {
    if (n <= 0) return;
    const fibo = [];
    if (n >= 1) fibo.push(a);
    if (n >= 2) fibo.push(b);
    while (fibo.length < n) {
        fibo.push(fibo.at(-2) + fibo.at(-1));
    }
    console.log(`${n} fibonacci number starting from ${a},${b}: ` + fibo.join(","));
}
printFibo(10, 1, 2);



