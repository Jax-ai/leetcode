/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // DEBUG: Initial input
    console.log("Input prices:", prices);

    let position = 0;
    let biggestAfter = 0;
    let maxProfit = 0;

    for(let position = 0; position < prices.length; position++) {

        let buy = prices[position];
        let sell = buy;

        for(let checkerPosition = position + 1; checkerPosition < prices.length; checkerPosition++) {

            sell = prices[checkerPosition];
            if(buy < sell && ((sell - buy) > maxProfit)) {

                maxProfit = sell - buy;
            }
        }
        
    }

    return maxProfit;

    
    // DEBUG: Final output (change this once your logic is complete)
    const result = null;
    console.log("Max profit:", result);
    return result;
};

// === DEBUG TEST CASES ===
console.log("Test Case 1");
maxProfit([2, 1, 4]); // Expected: 3

console.log("Test Case 1");
maxProfit([7, 1, 5, 3, 6, 4]); // Expected: 5

console.log("\nTest Case 2");
maxProfit([7, 6, 4, 3, 1]); // Expected: 0

console.log("\nTest Case 3");
maxProfit([2, 4, 1]); // Expected: 2

console.log("\nTest Case 4");
maxProfit([1, 2]); // Expected: 1
