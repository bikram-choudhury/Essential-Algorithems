# Best Time to Buy and Sell Stocks 
### [Leetcode#121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

### Description
You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

### Example:
**input:** prices = [7,1,5,3,6,4]

**output:** 5

**input:** prices = [7,6,4,3,1]

**Output:** 0

### Solution
We can solve this problem in two ways:

## 1. Brute-Force Approach (Time Complexity = O(n²))

The brute-force approach involves checking all possible pairs of days to find the maximum profit. This results in a nested loop:

- Outer loop (`i`) runs from day 0 to day n-1 (the day you buy).
- Inner loop (`j`) runs from day `i+1` to day n (the day you sell).

This results in checking every combination of buying and selling days, leading to a time complexity of O(n²).

## 2. Optimized Approach (Time Complexity = O(n))

We can solve this problem in linear time by keeping track of the minimum stock price seen so far and calculating the potential profit on each day.

### Key Insight:
For each day, the stock can only be sold on that day or a later day. By tracking the lowest price seen up to that day, we can calculate the profit for selling on the current day. The goal is to maximize this profit over all days.

Here’s how it works:
- Start with `min_price = ∞` and `max_profit = 0`.
- For each day `i`, compare the current stock price with the minimum price seen so far.
- If the current price is lower than `min_price`, update `min_price`.
- Calculate the potential profit for selling on day `i` (`profit = price[i] - min_price`).
- If the calculated profit is greater than `max_profit`, update `max_profit`.

### Example:

Given prices: `[1, 3, 2, 4]`

- **Day 1 (price = 1):**
  - `min_price = 1`
  - `sell price = 1`
  - `max_profit = 0`

- **Day 2 (price = 3):**
  - `min_price = 1`
  - `sell price = 3`
  - `profit = 3 - 1 = 2`
  - `max_profit = 2`

- **Day 3 (price = 2):**
  - `min_price = 1`
  - `sell price = 2`
  - `profit = 2 - 1 = 1`
  - `max_profit = 2` (No update as profit is less than previous max)

- **Day 4 (price = 4):**
  - `min_price = 1`
  - `sell price = 4`
  - `profit = 4 - 1 = 3`
  - `max_profit = 3`

### Final Result:
The maximum profit is `3`.

---

This approach reduces the problem to a single loop (`O(n)`) instead of checking all combinations (`O(n²)`).


<detail>
  
```js
  function findMaxProfit(prices) {
    let maxProfit = -Infinity, minPrice = Infinity, i =0;
    while(i < prices.length) {
        const price = prices[i];
        if(price < minPrice) minPrice = price;
        const profit = price - minPrice;
        if(profit > maxProfit) maxProfit = profit;
        i++;
    }
    return maxProfit < 0 ? 0: maxProfit;
}

console.log(findMaxProfit([7,1,5,3,6,4])); // 5
console.log(findMaxProfit([7,6,4,3,1])); // 0
```
</detail>
