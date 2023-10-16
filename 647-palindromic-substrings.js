// 647. Palindromic Substrings
// Medium
// 9.7K
// 203
// Companies
// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.
// Accepted
// 629.2K
// Submissions
// 927.4K
// Acceptance Rate
// 67.8%

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
   let count = 0;
   for(let i=0; i<s.length; i++){
    count += countPalindromes(s, i, i);
    count += countPalindromes(s, i, i+1);
   }
   return count;
};

// count from middle
const countPalindromes = (s, l, r) => {
    let count = 0;
    let len = s.length;
    while(l>=0 && r<len && s[l] == s[r]){
        count++;
        l--;
        r++;
    }
    return count;
}
