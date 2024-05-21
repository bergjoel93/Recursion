# Recursion

This is a simple web app that has no GUI and instead run in the command line using node.js.

## How Mergesort works

---

Merge Sort is a divide and conquer recursively called function.
The algorithm is pretty basic and follows these instructions:

Algorithm Function MergeSort(Array){
If{
Array.size = 1, return Array and quit.
}
Else {
Sort the left half of the numbers.
Sort the right half of the numbers.
return Merge the sorted halves.
}
}

Algorithm Function Merge(Array-1, Array-2) {
First, get the sizes
m = size of Array-1
n = size of Array-2

    Then declare your pointers. i is the pointer for Array-1, j is the pointer for Array-2, and k is the pointer for a new Array or our Merged-Array.

    i = 0 // because we're starting at first element
    j = 0
    k = 0
    Merged-Array = [] // declare empty array

    Next use a while loop to stop the loop when either i or j become less than the size of the m and n sizes.
    while(i < m && j < n) {
        // compare the values of the of the pointers i and j. If one is bigger then that value is assigned to the Merged-Array first.
        if(A[i] < B[j]) {
            Merged-Array[k] = Array-1[i];
            Then incrememnt pointers used
            k++ and i ++
        }
        else
        {
            Merged-Array[k] = Array-2[j];
            Then incrememnt pointers used
            k++ and j ++
        }
    }

    Sometimes Array-1 or Array-2 might be larger, so if one of them is, we need to simply copy the rest of the values to the rest of Merged-Array.
    for (i; i < m; i++) {
    Merged-Array[k++] = Array-1[i];
    }
    for (j; j < n; j++) {
        Merged-Array[k++] = Array-2[j];
    }

    return Merged-Array;

}
