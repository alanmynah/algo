// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
// If any two numbers in the input array sum up to the target sum, the function should return them in an array,
// in sorted order. If no two numbers sum up to the target sum, the function should return an empty array.
// Assume that there will be at most one pair of numbers summing up to the target sum.

// Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
// Sample output: [-1, 11]

// O(n^2) time | O(1) space
// 2 loops | values are not stored.
function twoNumberSum(array, targetSum) {
    // take every number in the array (except the last one)
    for (let i = 0; i < array.length - 1; i++) {
        // take every following number in the array (so obvs not the first, but incl the last one)
        for (let j = i + 1; j < array.length; j++) {
            // if the two selected numbers give the needed sum
            if (array[i] + array[j] === targetSum) {
                // return the two numbers in a sorted array
                return [array[i], array[j]].sort((a, b) => a - b);
            }
        }
    }
    // return [] if no numbers in the array add up to the required sum
    return [];
}

// O(n) time | O(n) space
// 1 loop | values are stored in nums{}
function twoNumberSum(array, targetSum) {
    // keep a track on values that we see
    let nums = {};
    // loop through every num
    for (let num of array) {
        // check if the difference between a current num and targetSum is already in nums
        if (targetSum - num in nums) {
            // it is, bingo, we've got our pair. sort it.
            return [targetSum - num, num].sort((a, b) => a - b);
        } else {
            // the num is new, add it to the hashmap
            nums[num] = true;
        }
    }
    // we didn't find anything.
    return [];
}
