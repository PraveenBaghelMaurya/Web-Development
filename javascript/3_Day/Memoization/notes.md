Here's a simplified note on **Memoization in JavaScript** with easy language and icons.  

---

# 📌 **Memoization in JavaScript**  

## 🔍 **What is Memoization?**  
Memoization is a technique used to **speed up functions** by **storing** the results of expensive function calls and **reusing** them when the same inputs occur again.  

## 🎯 **Why Use Memoization?**  
✅ **Faster Execution** – Saves time by avoiding repeated calculations.  
✅ **Optimizes Recursion** – Helps in problems like Fibonacci and Dynamic Programming.  
✅ **Reduces Function Calls** – Improves efficiency by caching results.  

## 🛠 **How Memoization Works?**  
1. **Create a cache (object) to store results**.  
2. **Before computing, check if the result is in the cache**.  
3. **If found, return the cached result**.  
4. **If not found, compute, store in cache, and return the result**.  

## 📌 **Example: Memoized Fibonacci Function**  
```js
function memoizedFibonacci() {
    let cache = {}; // 🔹 Step 1: Create a cache

    return function fib(n) {
        if (n in cache) {  // 🔹 Step 2: Check cache
            return cache[n]; // 🔹 Step 3: Return cached result
        }
        if (n <= 1) return n;  // Base case
        cache[n] = fib(n - 1) + fib(n - 2); // 🔹 Step 4: Compute & store
        return cache[n];
    };
}

const fibonacci = memoizedFibonacci();
console.log(fibonacci(10)); // Output: 55
```
### 🔹 **How it Works?**
1️⃣ First call `fibonacci(10)`, it **computes** and stores results.  
2️⃣ Next call `fibonacci(10)`, it **returns from cache** (fast!).  

## ⚡ **Memoization vs Normal Recursion**  
🚀 **Memoized Version**  
- Faster  
- Stores previous results  
- No redundant calculations  

🐢 **Normal Recursion**  
- Slower  
- Repeats calculations  
- More function calls  

## 📌 **When to Use Memoization?**  
✅ Recursive functions (like Fibonacci, Factorial).  
✅ Repeated calculations in loops.  
✅ Expensive API calls (caching results).  

---
