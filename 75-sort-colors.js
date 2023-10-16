// 75. Sort Colors
// Medium
// 16.9K
// 582
// Companies
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.
 

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?

// Accepted
// 1.6M
// Submissions
// 2.7M
// Acceptance Rate
// 60.6%

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    if(nums.length === 1){
        return nums;
    }

    if(nums.length === 2 && nums[0]<= nums[1]){
        return nums;
    }

    let head = 0;
    let tail = nums.length - 1;
    let i = 0;

    while(i<=tail){
        if(nums[i] === 0){
            if(i !== head){
                let t = nums[head];
                nums[head] = nums[i];
                nums[i] = t;
            }
            head++;
            i++;
        }else if(nums[i] === 1){
                i++;
        }else{
            let t = nums[tail];
            nums[tail] = nums[i];
            nums[i] = t;
            tail--;
        }
    }
};