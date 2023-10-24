// 3. Longest Substring Without Repeating Characters
// Solved
// Medium
// Topics
// Companies
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    if (str.length === 0)
        return 0;
 
    if (str.length === 1)
        return 1;
 
    // if string length is more than 2
    let maxLength = 0;
    let visited = new Array(256).fill(false);

        // left and right pointer of sliding window
        let left = 0, right = 0;
        while (right < str.length) {
     
            // if character is visited
            if (visited[str.charCodeAt(right)]) {
     
                // The left pointer moves to the right while
                // marking visited characters as false until the
                // repeating character is no longer part of the
                // current window.
                while (visited[str.charCodeAt(right)]) {
                    visited[str.charCodeAt(left)] = false;
                    left++;
                }
            }
     
            visited[str.charCodeAt(right)] = true;
     
            // The length of the current window (right - left + 1)
            // is calculated and the answer is updated accordingly.
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        }
     
        return maxLength;
};