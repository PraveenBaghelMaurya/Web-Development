## 🚀 **Task Queue vs. Microtask Queue – JavaScript Event Loop Ka Secret**  

### 🧐 **JavaScript Asynchronous Execution**  
JavaScript ek **single-threaded** language hai, iska matlab ek time pe sirf ek hi kaam ho sakta hai. Par fir bhi **asynchronous operations** (setTimeout, Promises, API calls) kaise kaam karte hain? 🤔  

✅ **Answer:** Event Loop, jo **Task Queue aur Microtask Queue** ka use karta hai!  

---

## 🔹 **Task Queue (Macrotask Queue) 🕑**  
✅ Task Queue me **asynchronous tasks** queue me add hote hain.  
✅ **Callbacks** (setTimeout, setInterval, I/O, DOM events) yaha store hote hain.  
✅ Jab **Call Stack empty hoti hai**, tab Event Loop **Task Queue se ek task uthata hai aur execute karta hai**.  

### ✍ **Example:**  
```js
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

console.log("End");
```
🔹 **Output:**  
```
Start  
End  
Inside setTimeout  
```
🔹 **Explanation:**  
1️⃣ `console.log("Start")` execute hua. ✅  
2️⃣ `setTimeout(() => console.log("Inside setTimeout"), 0)` **Task Queue me gaya**. ✅  
3️⃣ `console.log("End")` execute hua. ✅  
4️⃣ **Call Stack empty hote hi Event Loop ne Task Queue se callback uthaya aur execute kiya**. ✅  

---

## 🔹 **Microtask Queue (Priority Queue) ⚡**  
✅ **Microtask Queue high-priority queue hoti hai**.  
✅ **Promises (Promise.then, MutationObserver, process.nextTick(Node.js)) yaha store hote hain**.  
✅ **Microtasks hamesha Macrotasks (Task Queue) se pehle execute hote hain!**  

### ✍ **Example:**  
```js
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Inside Promise");
});

console.log("End");
```
🔹 **Output:**  
```
Start  
End  
Inside Promise  
Inside setTimeout  
```
🔹 **Explanation:**  
1️⃣ `console.log("Start")` execute hua. ✅  
2️⃣ `setTimeout` ka callback **Task Queue me gaya**. ✅  
3️⃣ `Promise.then` ka callback **Microtask Queue me gaya**. ✅  
4️⃣ `console.log("End")` execute hua. ✅  
5️⃣ **Event Loop ne Microtask Queue se "Inside Promise" execute kiya (kyunki Microtask Queue pehle execute hoti hai).** ✅  
6️⃣ **Ab Task Queue se "Inside setTimeout" execute hua.** ✅  

---

## 🔥 **Key Differences: Task Queue vs. Microtask Queue**  

| Feature | **Task Queue (Macrotask Queue)** | **Microtask Queue** |
|---------|----------------------------------|---------------------|
| **Tasks Store Karta Hai** | `setTimeout`, `setInterval`, I/O, DOM Events | `Promise.then`, `MutationObserver`, `process.nextTick(Node.js)` |
| **Execution Order** | **Call Stack empty hone ke baad execute hota hai** | **Task Queue se pehle execute hota hai (higher priority)** |
| **Priority** | **Low Priority** (Microtasks ke baad) | **High Priority** (Hamesha pehle execute hoga) |
| **Example** | `setTimeout(() => console.log("Task Queue"), 0);` | `Promise.resolve().then(() => console.log("Microtask Queue"));` |

---

## 🚀 **Final Execution Order (Golden Rule)**
1️⃣ **Call Stack** ke saare synchronous tasks execute hote hain. ✅  
2️⃣ **Microtask Queue ke saare pending tasks execute hote hain** (Promises, MutationObserver). ✅  
3️⃣ **Agar Microtask Queue empty ho, toh Event Loop Task Queue se ek task uthata hai** aur execute karta hai. ✅  
4️⃣ **Step 2 & 3 loop hota rehta hai** jab tak saare tasks execute ho jayein. 🔄  

---

## 🎯 **Conclusion**  
✅ **Microtasks (Promises, MutationObserver) hamesha pehle execute hote hain.**  
✅ **Task Queue (setTimeout, setInterval) Microtasks ke baad execute hota hai.**  
✅ **JavaScript Event Loop Microtask Queue ko highest priority deta hai.**  
✅ **Debugging aur Performance optimize karne ke liye Microtask aur Task Queue ka samajhna important hai!**  

🧠 **Agar yeh concept samajh liya, toh aap JavaScript ke Asynchronous Execution ke master ban jaoge!** 🚀🔥