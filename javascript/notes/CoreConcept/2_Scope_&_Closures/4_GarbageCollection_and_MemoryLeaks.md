# 🚀 **Garbage Collection & Memory Leaks in JavaScript**  

## 🧐 **Memory Management in JavaScript**  
JavaScript me memory **allocate (reserve)** aur **deallocate (free)** hoti hai automatically. JavaScript Engine **Garbage Collection** ka use karta hai jo unused memory ko free karta hai.  

✅ **Memory Lifecycle:**  
1️⃣ **Memory Allocation** – Jab variables, objects, ya functions create hote hain.  
2️⃣ **Memory Usage** – Jab execution ke dauraan memory use hoti hai.  
3️⃣ **Garbage Collection (Memory Cleanup)** – Jab unused memory ko free kiya jata hai.  

---

## 🔹 **1. Garbage Collection – Kaise Kaam Karta Hai?**  
JavaScript **Automatic Garbage Collection** use karta hai jisme **unused objects delete ho jate hain taaki memory free ho sake**.  

✅ **Garbage Collection Algorithms:**  
1️⃣ **Reference Counting** – Agar kisi object pe koi reference nahi hai, to wo memory se delete ho jata hai.  
2️⃣ **Mark-and-Sweep (Modern Approach)** – **JS Engine sabhi accessible objects ko mark karta hai aur unreachable objects ko delete karta hai.**  

### ✍ **Example (Automatic Garbage Collection)**
```js
function createObject() {
  let obj = { name: "Praveen" }; // ✅ Memory allocate
  return obj;
}

let person = createObject(); // ✅ `person` reference hold kar raha hai
person = null; // ❌ `person` ka reference remove, Garbage Collector delete karega
```
🔹 **Explanation:**  
1️⃣ `createObject()` me `{ name: "Praveen" }` memory me allocate hota hai.  
2️⃣ `person = null;` karne se object ka **koi reference nahi bacha**, to **Garbage Collector isse free kar dega!**  

---

## 🔥 **2. Memory Leaks – JavaScript Performance Killer!**  
Memory Leak tab hota hai jab **koi object ya variable unnecessarily memory occupy karta rahta hai** aur Garbage Collector use delete nahi karta.  

🔴 **Memory Leak hone se:**  
✅ **Application slow ho jati hai**  
✅ **Unwanted memory consumption hoti hai**  
✅ **Browser crash ho sakta hai**  

---

## 🔹 **Common Causes of Memory Leaks & Solutions**  

### 🛑 **1. Unused Global Variables**  
Global variables **garbage collection se bach jate hain**, kyunki ye kabhi unreachable nahi hote.  

### ✍ **Bad Practice (Memory Leak)**
```js
var globalVar = []; // ❌ Global memory leak

function addData() {
  globalVar.push(new Array(1000000).join("*")); // Heavy data store
}
setInterval(addData, 1000); // ❌ Global array kabhi free nahi hoga!
```
### ✅ **Solution: Avoid Unnecessary Global Variables**
```js
function processData() {
  let localData = new Array(1000000).join("*"); // ✅ Local Scope (Automatic Cleanup)
}
setInterval(processData, 1000);
```
✅ **Local variables function end hone ke baad Garbage Collector clean kar sakta hai!**  

---

### 🛑 **2. Detached DOM Elements**  
DOM elements remove ho jate hain, par unka JavaScript reference abhi bhi exist karta hai.  

### ✍ **Bad Practice (Memory Leak)**
```js
let btn = document.getElementById("myButton");
btn.addEventListener("click", function () {
  console.log("Clicked!");
});
document.body.removeChild(btn); // ❌ DOM se remove, par event listener memory me rahega!
```
### ✅ **Solution: Remove Event Listeners Properly**
```js
let btn = document.getElementById("myButton");
function handleClick() {
  console.log("Clicked!");
}
btn.addEventListener("click", handleClick);

// ✅ Remove Event Listener Before Deleting Element
btn.removeEventListener("click", handleClick);
document.body.removeChild(btn);
```
✅ **Event listeners delete hone ke baad memory properly free ho jayegi!**  

---

### 🛑 **3. Closures Holding Unwanted Memory**  
Closures me **outer function ke variables memory me store hote hain, jo kabhi kabhi unnecessary memory leak cause kar sakte hain.**  

### ✍ **Bad Practice (Memory Leak)**
```js
function outer() {
  let bigArray = new Array(1000000).join("*"); // ❌ Heavy data
  
  return function inner() {
    console.log(bigArray); // ❌ bigArray memory me hold rahega
  };
}

const closureFunc = outer();
closureFunc(); // `bigArray` abhi bhi memory me hai, chahe use zaroorat na ho!
```
### ✅ **Solution: Nullify Unnecessary References**
```js
function outer() {
  let bigArray = new Array(1000000).join("*");
  
  return function inner() {
    console.log(bigArray);
    bigArray = null; // ✅ Memory release
  };
}

const closureFunc = outer();
closureFunc();
```
✅ **`bigArray = null;` se memory properly release ho jayegi!**  

---

### 🛑 **4. setInterval Without Clearing**  
Agar `setInterval()` memory me unnecessary objects hold karta rahe, to **memory leak ho sakta hai!**  

### ✍ **Bad Practice (Memory Leak)**
```js
let count = 0;

let interval = setInterval(() => {
  count++;
  console.log("Running...", count);
}, 1000);

// ❌ `clearInterval()` nahi diya to yeh kabhi stop nahi hoga!
```
### ✅ **Solution: Use `clearInterval()` Properly**
```js
let count = 0;
let interval = setInterval(() => {
  count++;
  console.log("Running...", count);

  if (count === 5) {
    clearInterval(interval); // ✅ Memory release
  }
}, 1000);
```
✅ **`clearInterval(interval);` use karne se memory properly free ho jayegi!**  

---

## 🔥 **5. Debugging & Fixing Memory Leaks**  
Agar aapko **memory leak detect karni ho**, to **Chrome DevTools** ka use karein:  

✅ **Step 1:** Open Chrome **DevTools (`F12`)**  
✅ **Step 2:** Go to **Memory Tab**  
✅ **Step 3:** Click on **"Heap Snapshot"**  
✅ **Step 4:** Take a snapshot, then interact with your app  
✅ **Step 5:** Take another snapshot & compare memory usage  

---

## 🚀 **Conclusion**  
✅ **JavaScript automatic Garbage Collection use karta hai, jo unused memory ko free karta hai.**  
✅ **Memory leaks tab hote hain jab objects ya variables unnecessarily memory hold karte hain.**  
✅ **Global variables, detached DOM elements, closures, aur `setInterval()` properly handle karne chahiye.**  
✅ **Chrome DevTools ka use karke memory leaks detect aur fix kar sakte hain.**  

🧠 **Agar yeh concept samajh liya, to aap JavaScript performance optimization me pro ban gaye!** 🚀🔥