// 739. Daily Temperatures
// Medium
// 11.8K
// 257
// Companies
// Given an array of integers temperatures represents the daily temperatures, 
// return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
// If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]
 

// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures_v1 = function(temperatures) {
    const days = [];
    let r = temperatures.length - 1;

    for(let i=0; i<temperatures.length; i++){
        const t=temperatures[i];

        r = temperatures.length - 1;

        while(r>i){
            if(temperatures[r]>t){
                days[i] = r - i;
                r--;
            }else{
                r--;
            }
        }
        if(days[i] === undefined){
            days[i] = 0;
        }
    }

    return days;
};

const ds = dailyTemperatures_v1([73,74,75,71,69,72,76,73]);
console.log(ds)
// ds.forEach(it => console.log(it));