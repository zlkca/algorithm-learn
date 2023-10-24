// 209. Minimum Size Subarray Sum
// Medium
// 11.8K
// 355
// Companies
// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
 
// [2, 5, 6, 8, 12, 15 ]
// [0, 1, 2, 3, 4, 5]

// [8, 12, 15]
// [2, 8]
// [3, 3]

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
 

// Follow up: If you have figured out the O(n) solution, 
// try coding another solution of which the time complexity is O(n log(n)).

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen_slidingwindow = function(target, nums) {
    if(nums.length === 1){
        return nums[0] > target ? 1 : 0
    }

    let l=0, r=0, sum=0;
    let minLength = 0;

    while(r<nums.length){
        sum += nums[r];

        while(sum >= target){
            const len = r - l + 1;
            if(minLength == 0 || minLength > len){
                minLength = len;
            }
            
            sum -=nums[l];
            l++;
        }

        r++;
    }
};

var minSubArrayLen_precompute = function(target, nums) {
    if(nums.length === 1){
        return nums[0] > target ? 1 : 0
    }

    let l=0, r=0, sum=0;
    let minLength = nums.length;

    while(r<nums.length){
        if(sum+nums[r] === target){
            const len = r - l  + 1;
            minLength = minLength > len ? len : minLength;
        }else{
            sum += nums[r];
            while(sum-nums[l]>target){
                sum -=nums[l];
                l++;
            }
        }
    }

    return minLength;
};