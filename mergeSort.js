/**
 * This is a mergeSort algorithm created from scratch. It is a recursive method. It works by dividing the array into two pieces over and over again until the two pieces are of size 1, then it merges them. The merge function only works for partially sorted arrays.
 */

// Testing mergSort

let testArray = [
  34, 7, 23, 32, 5, 62, 32, 73, 43, 17, 3, 12, 91, 45, 39, 28, 67, 4, 31, 56,
];
console.log("MergeSort:", mergeSort(testArray));
/**
 *
 * @param {Array} arr
 * @returns Sorted Array
 */

/////////merge Sort Function//////
function mergeSort(arr) {
  // Base Case
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2); // Use integer division and floor to find midpoint.
  // create a left and right array -  splits array into two halves.

  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // recursivly call the mergeSort function
  left = mergeSort(left);
  right = mergeSort(right);

  // merge the left and right side.
  return merge(left, right);
}

/**
 *
 * @param {Array} A - Array A
 * @param {Array} B - Array B
 * @param {Number} m - Size of Array A
 * @param {Number} n - size of Array B
 */

function merge(A, B) {
  // get the sizes
  let m = A.length;
  let n = B.length;

  // declare variables i, j, and k. Initialize to 0. These are our pointers. i to A, j to B, and k to new array C which will be our final merged array.
  let i = 0;
  let j = 0;
  let k = 0;
  let c = [];

  // while loop that stops when i and j hit the size limit of Array A and B.
  while (i < m && j < n) {
    // compare the first values of pointer i and j.
    if (A[i] < B[j]) {
      c[k++] = A[i++];
    } else {
      c[k++] = B[j++];
    }
  }
  // If the elements of A or B are greater the rest of them are copied to array C.
  for (i; i < m; i++) {
    c[k++] = A[i];
  }
  for (j; j < n; j++) {
    c[k++] = B[j];
  }

  return c;
}

// Test merge()
// let a = [1, 5, 8, 13];
// let b = [2, 3, 4, 9, 10, 12];

// let c = merge(a, b);

// console.log(c);
