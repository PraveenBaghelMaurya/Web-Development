# 🚀 **Lexical Scope vs. Dynamic Scope – JavaScript Execution ka Secret**  

## 🧐 **Scope Kya Hota Hai?**  
Scope **ek variable ki accessibility define karta hai** – yani koi variable **kahaan declare hua hai aur kahaan use ho sakta hai**.  

🔹 JavaScript me **2 tarah ka scope hota hai:**  
1️⃣ **Lexical Scope (Static Scope)** – JavaScript ka asli scope system ✅  
2️⃣ **Dynamic Scope** – JavaScript me nahi hota, par kuch languages me hota hai ❌  

---

## 🔹 **1. Lexical Scope (Static Scope) – JavaScript ka Rule**  
✅ **Lexical scope ka matlab hai ki ek variable ka scope uske declaration ke basis pe decide hota hai, execution ke basis pe nahi.**  
✅ Yeh **nested functions me bhi kaam karta hai** – inner function **apne outer function ke variables ko access kar sakta hai**.  
✅ **JavaScript me hamesha Lexical Scoping hoti hai!**  

### ✍ **Example:**
```js
function outer() {
  let a = 10;

  function inner() {
    console.log(a); // ✅ Outer function ka `a` mil jayega
  }

  inner();
}

outer();
```
🔹 **Output:**  
```
10
```
🔹 **Explanation:**  
1️⃣ `inner()` function ke andar `a` directly defined nahi hai.  
2️⃣ **JavaScript Lexical Scope ke rule follow karta hai, isliye `a` ko outer function me dhoondhta hai.**  
3️⃣ `a` outer function (`outer()`) me mil gaya, to value **print ho gayi!** ✅  

### 🛠 **JavaScript Ka Execution Model (Scope Chain)**  
Jab JavaScript kisi variable ko dhoondhti hai, to wo **inner function → outer function → global scope** tak jaati hai. Is process ko **Scope Chain** kehte hain.  

#### ✍ **Example (Scope Chain Working):**  
```js
let a = 100;

function outer() {
  let b = 50;

  function inner() {
    let c = 25;
    console.log(a, b, c);
  }

  inner();
}

outer();
```
🔹 **Output:**  
```
100 50 25
```
🔹 **Explanation:**  
1️⃣ `inner()` ke paas **directly `c` available hai**.  
2️⃣ `b` uske parent function (`outer()`) me mil gaya.  
3️⃣ `a` global scope me mila.  
4️⃣ **Lexical Scope ke wajah se inner function outer scope ke variables access kar sakta hai!** ✅  

---

## 🔹 **2. Dynamic Scope – JavaScript Me Nahi Hota!**  
❌ **Dynamic Scope me variable ki value uske definition ke basis pe nahi, balki uske execution context ke basis pe decide hoti hai.**  
❌ JavaScript **Dynamic Scope support nahi karta!**  
✅ **Dynamic Scope aisi languages me hota hai jo `this` ko dynamically resolve karti hain, jaise Python, Perl, Bash.**  

### ✍ **Example (Agar JavaScript me Dynamic Scope Hota to)**  
```js
var a = 100;

function outer() {
  var a = 50;
  inner();
}

function inner() {
  console.log(a); // ❌ Agar Dynamic Scope hota, to `a = 50` print hota
}

outer();
```
🔹 **Lexical Scope ke rule ke wajah se output hoga:**  
```
100  // (Global `a`)
```
🔹 **Agar JavaScript me Dynamic Scope hota to output hota:**  
```
50  // (Execution context ka `a`)
```
🔹 **Lekin JavaScript me hamesha Lexical Scope hota hai, isliye `a` global scope se aayega!** ✅  

---

## 🔥 **Key Differences: Lexical Scope vs. Dynamic Scope**  

| Feature | **Lexical Scope (JavaScript)** ✅ | **Dynamic Scope (JavaScript Me Nahi)** ❌ |
|---------|---------------------------------|-----------------------------------|
| **Definition** | Scope **variable ke declare hone ki jagah** se decide hota hai | Scope **variable ke execution context** pe depend karta hai |
| **Access Rule** | **Inner function outer function ke variables access kar sakta hai** | **Jo function last execute hua uske variables use honge** |
| **Scope Chain** | **Scope Chain ke through variable resolution hota hai** | **Function execution history ke basis pe variable resolve hota hai** |
| **JavaScript Support?** | ✅ **Yes** (Default JavaScript Behavior) | ❌ **No** (JavaScript me nahi hota) |
| **Example Languages** | **JavaScript, C, C++** | **Python, Bash, Perl** |

---

## 🎯 **Conclusion**  
✅ **JavaScript Lexical Scope use karta hai, jisme variables ka scope unke declaration ke basis pe decide hota hai.**  
✅ **Lexical Scope ke wajah se inner functions outer functions ke variables access kar sakte hain.**  
✅ **Dynamic Scope JavaScript me nahi hota, balki execution ke basis pe scope decide karta hai (Python, Bash, Perl me hota hai).**  
✅ **Scope Chain concept samajhna JavaScript ke closures aur execution model samajhne ke liye important hai.**  

🧠 **Agar yeh concept clear ho gaya, toh aap JavaScript scoping ke master ban gaye!** 🚀🔥