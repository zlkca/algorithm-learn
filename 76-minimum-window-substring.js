// 76. Minimum Window Substring
// Solved
// Hard
// Topics
// Companies
// Hint
// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
 

// Follow up: Could you find an algorithm that runs in O(m + n) time?

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const mapT = {}, mapS = {};
    for(let v of t){
        if(mapT[v]){
            mapT[v]++;
        }else{
            mapT[v] = 1;
        }
    }

    const includedSubMap = (m, sub) => {
        // console.log(m);
        // console.log(sub);
        for(k in sub){
            if(m[k]=== undefined || m[k] < sub[k]){
                return false;
            }
        }
        return true;
    }

    let minLen = 0, l=0, r=0;
    let subStr = '';
    let ans = '';
    while(r<s.length){
        let c = s[r];
        subStr += c;

        if(mapS[c]){
            mapS[c]++;
        }else{
            mapS[c] = 1;
        }
        // console.log(subStr);
        while(includedSubMap(mapS, mapT)){
            if(minLen === 0 || minLen > subStr.length){
                minLen = subStr.length;
                ans = subStr;
            }

            c = s[l];
            if(mapS[c]!==undefined){
                mapS[c]--;
            }
            l++;
            subStr = subStr.slice(1);
        }
        
        r++;
    }
    return ans;
};