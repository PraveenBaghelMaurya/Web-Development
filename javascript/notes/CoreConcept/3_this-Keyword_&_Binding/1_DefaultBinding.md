# 🚀 **Default Binding (`this` in Global/Window Scope) in JavaScript**  

## 🧐 **`this` Keyword Kya Hai?**  
`this` keyword **JavaScript me kisi function ke execution context ko refer karta hai.**  

✅ **`this` ka value depend karta hai function kaise call ho raha hai!**  

---

## 🔹 **1. Default Binding – Jab Function Directly Call Hota Hai**  
Jab koi function **directly call hota hai (kisi object ke bina), to `this` global object ko refer karta hai.**  

✅ **Browser me:** `this = window`  
✅ **Node.js me:** `this = global`  

### ✍ **Example (Default Binding in Browser)**
```js
function show() {
  console.log(this); // ✅ `window` object ko refer karega
}

show(); // `this` === window
```
🔹 **Output (Browser)**  
```
Window {...}  (Global Object)
```
🔹 **Explanation:**  
1️⃣ Function **`show()` directly call ho raha hai**, isliye `this` **global scope (window) ko refer karega.**  

---

## 🔹 **2. Default Binding in Strict Mode (`use strict`)**  
Jab `use strict` mode enable hota hai, to `this` **undefined hota hai**, kyunki **strict mode global object ko default binding se allow nahi karta.**  

### ✍ **Example (Strict Mode)**
```js
"use strict";

function show() {
  console.log(this); // ❌ `undefined` (Strict mode me default binding allowed nahi hai)
}

show();
```
🔹 **Output:**  
```
undefined
```
🔹 **Explanation:**  
1️⃣ `"use strict"` mode me, **default binding `window` ya `global` object ko nahi milega, isliye `this = undefined` ho jata hai.**  

---

## 🔹 **3. Default Binding in Node.js (`global`)**  
Node.js me **global object `global` hota hai, lekin default binding different behave karti hai.**  

### ✍ **Example (Default Binding in Node.js)**
```js
function show() {
  console.log(this); // ✅ `global` nahi, balki `undefined` milega (Node.js behavior)
}

show();
```
🔹 **Output (Node.js)**  
```
undefined
```
🔹 **Explanation:**  
1️⃣ **Node.js me, global scope me `this` `undefined` hota hai**, unlike browser where `this = window`.  

---

## 🔥 **Key Differences: Default Binding in Browser vs. Node.js**  

| Environment | **Default Binding (`this`)** |
|------------|---------------------------|
| **Browser (Normal Mode)** | ✅ `this = window` |
| **Browser (`use strict`)** | ❌ `this = undefined` |
| **Node.js (Function Scope)** | ❌ `this = undefined` |
| **Node.js (Global Scope - REPL)** | ✅ `this = global` |

---

## 🎯 **Conclusion**  
✅ **Default Binding me `this` global object (`window` ya `global`) ko refer karta hai, jab function directly call hota hai.**  
✅ **Strict mode (`"use strict"`) me default binding `undefined` ho jati hai.**  
✅ **Node.js me, function scope me `this` `undefined` hota hai, par REPL mode me `this = global`.**  

🧠 **Agar yeh concept samajh liya, to aap JavaScript me `this` ka behavior samajhne ke liye ek level upar hain!** 🚀🔥