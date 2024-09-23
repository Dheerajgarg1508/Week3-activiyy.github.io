// Challenge 1: Mutate the array to [6, 5, 4, 3, 2, 1, 0]
let arr = [1, 2, 3, 4, 5];
arr.unshift(6); // Add 6 to the beginning
arr.push(0);    // Add 0 to the end
arr.reverse();   // Reverse the array
console.log(arr); // Output: [6, 5, 4, 3, 2, 1, 0]

// Challenge 2: Combine arr1 and arr2 into arr3 without duplicate 5
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = arr1.slice(0, 4).concat(arr2);
console.log(arr3);
