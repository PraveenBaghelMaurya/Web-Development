# 🚀 **Event Loop Mechanics (Browser vs. Node.js)**  

### 🧐 **Event Loop Kya Hai?**  
Event Loop **JavaScript ka core mechanism** hai jo asynchronous tasks ko handle karta hai. **JavaScript single-threaded hoti hai**, par Event Loop ki wajah se hum **async operations (setTimeout, Promises, API calls)** efficiently execute kar sakte hain.  

🔹 **JavaScript Runtime Environment me Event Loop ka kaam hai:**  
✅ **Call Stack aur Task Queues ko manage karna**  
✅ **Asynchronous operations execute karna**  
✅ **UI rendering ya background I/O operations handle karna**  

---

## 🔹 **Event Loop Workflow (Browser & Node.js Dono Me Common Hai!)**  

1️⃣ **Call Stack (Execution Stack)**  
   - Yahaan synchronous JavaScript code execute hota hai.  
   - Agar kisi function ka execution complete ho jaye, toh wo stack se remove ho jata hai.  

2️⃣ **Web APIs (Browser) / C++ APIs (Node.js)**  
   - Yahaan asynchronous tasks jaate hain jaise `setTimeout`, `fetch()`, `I/O Operations`, etc.  

3️⃣ **Task Queue (Macrotask Queue)**  
   - Yahaan asynchronous tasks complete hone ke baad callback store hota hai.  
   - `setTimeout()`, `setInterval()`, I/O, UI rendering yahan queue me jaate hain.  

4️⃣ **Microtask Queue (Higher Priority)**  
   - Yahaan Promises (`Promise.then()`, `MutationObserver`, `process.nextTick`) queue me store hote hain.  
   - **Yeh hamesha Macrotask Queue se pehle execute hote hain!**  

5️⃣ **Event Loop**  
   - **Call Stack khali hone ke baad** Event Loop **Microtask Queue ko pehle execute karta hai**.  
   - Agar Microtask Queue empty ho, toh Event Loop **Macrotask Queue** se ek task execute karta hai.  

---

## 🔥 **Browser vs. Node.js: Event Loop Differences**  

### 🖥 **1. Browser Event Loop**  
✅ Browser me **Web APIs ka use hota hai** (DOM, Timers, Fetch, etc.)  
✅ **UI rendering ko optimize karne ke liye** Event Loop execution ke beech me rendering hoti hai.  
✅ **Task Queues:**  
   - 🟢 **Macrotask Queue:** `setTimeout`, `setInterval`, `I/O`, `MessageQueue`, `XHR`  
   - 🔴 **Microtask Queue:** `Promise.then()`, `MutationObserver`  

### ✍ **Browser Example:**  
```js
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```
### 🔹 **Output:**  
```
Start  
End  
Promise  
setTimeout  
```
🔹 **Explanation:**  
1️⃣ **Synchronous code (`console.log("Start")` & `console.log("End")`) stack me execute hota hai.**  
2️⃣ **Promise.then() Microtask Queue me jata hai.**  
3️⃣ **setTimeout callback Macrotask Queue me jata hai.**  
4️⃣ **Call Stack empty hone ke baad pehle Microtask Queue execute hota hai (`Promise`).**  
5️⃣ **Microtasks complete hone ke baad Task Queue execute hota hai (`setTimeout`).**  

---

## 🖥 **2. Node.js Event Loop (Advanced)**
✅ **Node.js me Event Loop ke 6 phases hote hain:**  
1️⃣ **Timers Phase** → `setTimeout()`, `setInterval()` execute hote hain.  
2️⃣ **Pending Callbacks** → I/O se related callbacks execute hote hain.  
3️⃣ **Idle, Prepare** → Internal Node.js operations ke liye (ignore kar sakte hain).  
4️⃣ **Poll Phase** → I/O operations yahan execute hote hain (file system, network requests).  
5️⃣ **Check Phase** → `setImmediate()` yahan execute hota hai.  
6️⃣ **Close Callbacks** → `socket.on("close", callback)` jaise close events yahan handle hote hain.  

✅ **Microtask Queue ka behavior Browser se thoda alag hota hai:**  
   - Node.js me Microtasks (Promises, `process.nextTick()`) **har phase ke baad execute hote hain**.  
   - **`process.nextTick()` hamesha Microtask Queue me sabse pehle execute hota hai!**  

---

### ✍ **Node.js Example (Event Loop Behavior):**
```js
const fs = require("fs");

console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

fs.readFile(__filename, () => {
  console.log("File Read Complete");
});

setImmediate(() => console.log("setImmediate"));

Promise.resolve().then(() => console.log("Promise"));

process.nextTick(() => console.log("process.nextTick"));

console.log("End");
```
### 🔹 **Output (Node.js Event Loop Order)**  
```
Start  
End  
process.nextTick  
Promise  
setTimeout / setImmediate (Order depend karta hai)  
File Read Complete  
```

🔹 **Explanation:**  
1️⃣ **Synchronous code (`console.log("Start")` & `console.log("End")`) sabse pehle execute hota hai.**  
2️⃣ **`process.nextTick()` hamesha pehle execute hota hai.**  
3️⃣ **Promise.then() Microtask Queue me aata hai, isliye ye `setTimeout()` aur `setImmediate()` se pehle execute hota hai.**  
4️⃣ **`setTimeout()` aur `setImmediate()` ek hi phase me execute hote hain, but `setImmediate()` zyadatar pehle chalta hai agar Poll phase me koi I/O task ho.**  
5️⃣ **File read hone ke baad Poll Phase me "File Read Complete" print hota hai.**  

---

## 🔥 **Browser vs. Node.js: Key Differences**  

| Feature | **Browser** | **Node.js** |
|---------|------------|-------------|
| **Event Loop Phases** | Simple (Call Stack, Microtask Queue, Macrotask Queue) | 6 Phases (Timers, I/O, Check, etc.) |
| **Microtask Execution** | Call Stack empty hone ke baad execute hota hai | Har Event Loop Phase ke baad execute hota hai |
| **High Priority Microtask** | `Promise.then()` | `process.nextTick()` |
| **Timers (`setTimeout`)** | Macrotask Queue me jata hai | Timers Phase me execute hota hai |
| **I/O Handling** | Web APIs use hoti hain | C++ APIs aur Poll Phase use hota hai |

---

## 🎯 **Conclusion**  
✅ **Event Loop asynchronous operations ko manage karta hai.**  
✅ **Browser me Microtask Queue pehle execute hota hai, fir Macrotask Queue.**  
✅ **Node.js me Event Loop ke 6 phases hote hain jo execution control karte hain.**  
✅ **Node.js me `process.nextTick()` sabse high-priority hota hai!**  
✅ **Understanding Event Loop helps in debugging, performance optimization, and writing efficient async code.**  

🧠 **Agar yeh concept samajh liya, toh aap JavaScript aur Node.js ke async execution ke master ban jaoge!** 🚀🔥