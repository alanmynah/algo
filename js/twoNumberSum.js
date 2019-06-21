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
                // you have to provide compareFn to sort, because JS sort casts values to string
                // so [3,4,30] becomes [3,30,4]
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
            // the num is new, add it to the hashtable
            nums[num] = true;
        }
    }
    // we didn't find anything.
    return [];
}

// O(nlogn) time | O(1) space
// sort is O(nlogn), loop is O(n/2) - hence the sort's BigO is taken | values are not stored
function twoNumberSum(array, targetSum) {
    // in v8 uses timsort, worst case is O(nlogn)
    // sort the values
    array.sort((a, b) => a - b);

    // take leftmost value
    let leftIndex = 0;
    // and rightmost value
    let rightIndex = array.length - 1;

    while (leftIndex < rightIndex) {
        // sum left and and right
        const runningSum = array[leftIndex] + array[rightIndex]
        // if matches the target
        if (runningSum === targetSum) {
            // bingo, no need to sort, it's already done
            return [array[leftIndex], array[rightIndex]]
          // if the running sum is less
        } else if (runningSum < targetSum) {
            // take next item from the left side
            leftIndex++;
          // so the running sum is more
        } else {
            // take next item from the right, so going this <-- way
            rightIndex--;
        }
    }
    // oops didn't find anything
    return []
}
