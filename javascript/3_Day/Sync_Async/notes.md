# 📌 **Synchronous vs Asynchronous in JavaScript**  

## 🔍 **What is Synchronous (Sync)?**  
Synchronous code **executes line by line**, **waiting** for each task to complete before moving to the next.  

### ✅ **Key Features of Sync Code**  
- Executes **in order** (one task at a time).  
- **Blocks** further execution until the current task is done.  
- **Slower** if tasks take too long.  

### 📌 **Example of Synchronous Code**  
```js
console.log("Step 1");  
console.log("Step 2");  
console.log("Step 3");
```
### 🛠 **Output**  
```
Step 1
Step 2
Step 3
```
👉 Each line **executes sequentially**.

---

## 🚀 **What is Asynchronous (Async)?**  
Asynchronous code **does not wait** for a task to finish before moving to the next one.  

### ✅ **Key Features of Async Code**  
- Executes **without blocking** other operations.  
- Uses **callbacks, promises, or async/await**.  
- Faster and more efficient for **time-consuming tasks** like API calls.  

### 📌 **Example of Asynchronous Code (setTimeout)**
```js
console.log("Step 1");  

setTimeout(() => {
    console.log("Step 2 (Delayed)");  // Runs after 2 seconds
}, 2000);

console.log("Step 3");
```
### 🛠 **Output**  
```
Step 1
Step 3
Step 2 (Delayed)
```
👉 `setTimeout()` **does not block execution**, so "Step 3" runs **before** "Step 2".  

---

## ⚡ **Synchronous vs Asynchronous**  
| Feature        | Synchronous (Sync) | Asynchronous (Async) |
|---------------|-----------------|------------------|
| Execution Order | One at a time (Blocking) | Non-blocking |
| Speed         | Slower for long tasks | Faster for long tasks |
| Example       | Simple loops, calculations | API calls, file reading |
| Usage         | When order matters | When waiting is needed |

---

## 🔄 **How to Handle Async in JavaScript?**
### 🔹 **1. Using Callbacks**
A function is **passed as an argument** and runs after the task is done.
```js
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback();
    }, 2000);
}

fetchData(() => console.log("Processing data..."));
```

### 🔹 **2. Using Promises**
Promises handle async tasks **without nesting callbacks**.
```js
let fetchData = new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 2000);
});

fetchData.then((data) => console.log(data));
```

### 🔹 **3. Using Async/Await (Best Way)**
```js
async function getData() {
    console.log("Fetching data...");
    let result = await new Promise((resolve) => setTimeout(() => resolve("Data loaded!"), 2000));
    console.log(result);
}

getData();
```

---

## 🎯 **Conclusion**  
- ✅ **Use synchronous** for simple tasks.  
- ✅ **Use asynchronous** for API calls, databases, or long operations.  
- ✅ **Use async/await** for cleaner and more readable async code.  

🔥 **Now you know when to use sync vs async in JavaScript!** 🚀