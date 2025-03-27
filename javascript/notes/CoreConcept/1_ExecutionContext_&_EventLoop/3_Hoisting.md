## 🚀 **Hoisting (var, let, const) – JavaScript Ka Chhupa Magic!**  

### 🧐 **Hoisting Kya Hai?**  
Hoisting ek **JavaScript mechanism** hai jisme **variables aur functions execution se pehle memory me allocate ho jate hain**.  

**JavaScript engine automatically variables aur functions ko top pe le aata hai** execution se pehle, isliye hum unhe define karne se pehle bhi access kar sakte hain.  

🚨 **Lekin dhyan dein!** `var`, `let`, aur `const` hoist to hote hain, **par inka behavior alag hota hai**!  

---

## 🔹 **1. Hoisting with `var` (Undefined Problem)**
✅ `var` variables hoist hote hain, **lekin unka default value `undefined` hota hai**.  

### ✍ **Example:**  
```js
console.log(a); // ❓ undefined (Hoisted but not assigned)
var a = 10;
console.log(a); // ✅ 10
```
🔹 **Behind the Scenes (How JavaScript Sees It)**  
```js
var a; // Hoisting: Memory me "undefined" assign hota hai
console.log(a); // undefined
a = 10; // Ab value assign hoti hai
console.log(a); // 10
```

📌 **Conclusion:** `var` hoist hota hai, par default `undefined` milta hai.

---

## 🔹 **2. Hoisting with `let` & `const` (TDZ - Temporal Dead Zone)**
❌ `let` aur `const` bhi hoist hote hain, **par unhe initialization se pehle access nahi kar sakte**.  
❌ Yeh **Temporal Dead Zone (TDZ)** me hote hain jab tak unhe initialize nahi kiya jaye.  

### ✍ **Example:**  
```js
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // ✅ 20
```
🔹 **Behind the Scenes (How JavaScript Sees It)**  
```js
let b; // Hoisting: Memory reserve hoti hai, par value assign nahi hoti
console.log(b); // ❌ TDZ error (b is not initialized yet)
b = 20; // Ab value assign hoti hai
console.log(b); // 20
```

📌 **Conclusion:**  
✅ `let` aur `const` bhi hoist hote hain, **par jab tak unhe assign nahi kiya jata, tab tak unhe access nahi kar sakte**.  

---

## 🔹 **3. Hoisting with Function Declarations**  
✅ **Function declarations poore function ke saath hoist hote hain**.  

### ✍ **Example:**  
```js
console.log(add()); // ✅ "Function executed!"

function add() {
  return "Function executed!";
}
```
🔹 **Behind the Scenes (How JavaScript Sees It)**  
```js
function add() { 
  return "Function executed!"; 
} // Function pura memory me store hota hai

console.log(add()); // ✅ No error
```

📌 **Conclusion:** Function declarations **hoist hoke pura function store kar leti hain**, isliye unhe pehle call karna possible hota hai.  

---

## 🔹 **4. Hoisting with Function Expressions (`var`, `let`, `const`)**
❌ **Function expressions hoist to hote hain, par access nahi kiye ja sakte!**  

### ✍ **Example (var function expression):**  
```js
console.log(sum); // ❓ undefined
console.log(sum()); // ❌ TypeError: sum is not a function

var sum = function () {
  return "Sum executed!";
};
```
### ✍ **Example (let/const function expression):**  
```js
console.log(multiply); // ❌ ReferenceError: Cannot access 'multiply' before initialization

let multiply = function () {
  return "Multiply executed!";
};
```
📌 **Conclusion:** Function expressions ka behavior **unke variables (`var`, `let`, `const`) ke hisaab se decide hota hai**.

---

## 🎯 **Final Summary (var vs. let vs. const)**
| Feature | `var` | `let` | `const` |
|---------|------|------|------|
| **Hoisting** | ✅ Hoist hota hai | ✅ Hoist hota hai | ✅ Hoist hota hai |
| **Initial Value** | `undefined` | **TDZ (No value)** | **TDZ (No value)** |
| **Before Initialization Access?** | ✅ Allowed (undefined milega) | ❌ Not Allowed (Error) | ❌ Not Allowed (Error) |
| **Reassignment Allowed?** | ✅ Yes | ✅ Yes | ❌ No |

---

## 🚀 **Conclusion**  
✅ **JavaScript har variable aur function ko pehle hi memory me reserve kar leta hai (Hoisting).**  
✅ `var` hoist hota hai, **par "undefined" assign hota hai**.  
✅ `let` aur `const` bhi hoist hote hain, **par jab tak initialize nahi hote, tab tak unhe access nahi kar sakte (TDZ problem)**.  
✅ **Function declarations hoist hoke pura function store karti hain, isliye unhe pehle call kiya ja sakta hai.**  
✅ **Function expressions ka behavior unke assigned variable ke behavior jaisa hota hai.**  

🧠 **Hoisting ka concept clear ho gaya toh aapka JavaScript debugging aur execution model samajhna aur easy ho jayega!** 🚀🔥