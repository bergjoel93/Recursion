/**
 * Write the fibonacci function using iteration.
 * Using iteration, write a function fibs which takes a number and returns an array containing that
 * many numbers from the Fibonacci sequence. Using an example input of 8, this function should
 * return the array [0, 1, 1, 2, 3, 5, 8, 13].
 */

function fib(num) {
  if (num <= 0) {
    console.error("Must be greater than 0");
    return;
  }

  if (num === 1) {
    return [0];
  }

  let f0 = 0; // the previous number initialized at 0.
  let f1 = 1;
  let solution = [f0, f1]; // the solution will be an array. initilaize empty array.

  // loop through. The iterations start at 2, because the first 2 are completed already.
  for (let i = 2; i < num; i++) {
    let next = f0 + f1;
    solution.push(next);
    f0 = f1;
    f1 = next;
  }

  return solution;
}
// type in node fibonacci.js to run in CLI.
console.log("Iterative fib:", fib(10));

/**
 * Write the same function except recursively.
 */

function fibsRec(num) {
  // base cases
  if (num == 1) return [0];
  if (num == 2) return [0, 1];

  let fibArr = fibsRec(num - 1);

  fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);

  return fibArr;
}

console.log("Recursive Fib:", fibsRec(6));
