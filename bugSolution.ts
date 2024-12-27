function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let num1: number = 5;
let num2: number = 3;
let result1 = add(num1, num2); // result1 is 8

let num3: number = 10;
let num4: number = 4;
let result2 = subtract(num3, num4); // result2 is 6

console.log(result1, result2); 