// 121. Best Time to Buy and Sell Stock
// Easy
// 28.8K
// 978
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

var maxProfit = function(prices) {
    if(prices.length < 2){
        return 0;
    }
    let l = 0;
    let r = 1;
    let maxProfit = 0;

    while(r<prices.length){
        if(prices[l] < prices[r]){
            profit = prices[r] - prices[l];
            maxProfit = maxProfit < profit ? profit : maxProfit;
        }else{
            l = r;
        }
        r++;
    }

    return maxProfit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitV2 = function(prices) {
    if(prices.length < 2){
        return 0;
    }
    let minPrice = prices[0];
    let maxProfit = 0;
    for(let i=1; i<prices.length; i++){
        if(prices[i]<minPrice){
            minPrice = prices[i];
        }
        const profit = prices[i] - minPrice;
        if(maxProfit<profit){
            maxProfit = profit;
        }
    }
    return maxProfit;
};

var maxProfitV1 = function(prices) {
    let maxProfit = 0;
    for(let i=0; i<prices.length-1; i++){
        for(let j=i; j<prices.length; j++){
            if(prices[j] > prices[i]){
                const profit = prices[j] - prices[i];
                if( profit > maxProfit){
                    maxProfit = profit;
                }
            }
        }
    }
    return maxProfit;
};