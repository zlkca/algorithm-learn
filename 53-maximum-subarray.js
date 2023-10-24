// 53. Maximum Subarray
// Medium
// 32.3K
// 1.4K
// Companies
// Given an integer array nums, find the 
// subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:
// [-2, -1, -4, 0, -1, 1, 2, -3, 1]
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
// [5, 9, 8, 15, 23]
// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }

    var prevMax = 0;
    var max = -Infinity;

  for (var i = 0; i < nums.length; i++) {
    // Compare previous contiguous sum with current number
    prevMax = prevMax < 0 ? nums[i] : prevMax + nums[i]; // Math.max(prevMax + nums[i], nums[i]); // 
    // Check if the current prev is the greatest sum 
    max = Math.max(max, prevMax);
  }
  return max;
};
