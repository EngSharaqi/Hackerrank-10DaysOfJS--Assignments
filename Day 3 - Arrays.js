/*
Complete the getSecondLargest function in the editor below.

getSecondLargest has the following parameters:

int nums[n]: an array of integers
Returns

int: the second largest number in nums
Input Format

The first line contains an integer, n, the size of the nums array.
The second line contains n space-separated numbers that describe the elements in nums.
*/
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var x = new Set(nums);
    x.delete(Math.max(...x));
    return Math.max(...x);
}
