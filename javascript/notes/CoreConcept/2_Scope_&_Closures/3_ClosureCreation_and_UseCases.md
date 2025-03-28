# 🚀 **Closures in JavaScript – Creation & Use Cases**  

## 🧐 **Closure Kya Hota Hai?**  
Closure **ek function hai jo apne lexical scope se variables ko "remember" karta hai**, chahe function execute hone ke baad bhi wo variables accessible rahein.  

✅ **JavaScript me, ek inner function hamesha apne outer function ke variables ko access kar sakta hai, chahe outer function execute ho chuka ho!**  

---

## 🔹 **Closure Creation – Basic Example**  
```js
function outer() {
  let count = 0; // 🏠 Lexical Scope
  
  return function inner() {
    count++; // 🔥 Inner function `count` ko access kar sakta hai!
    console.log(count);
  };
}

const counter = outer(); // `outer()` execute ho gaya, but closure `count` ko yaad rakhta hai!
counter(); // 1
counter(); // 2
counter(); // 3
```
🔹 **Explanation:**  
1️⃣ `outer()` execute hone ke baad bhi, `inner()` ke paas **`count` variable ka access hota hai**.  
2️⃣ **Closure memory me `count` variable ko "hold" karta hai**, isliye baar-baar function call karne pe `count` increase hota hai.  

---

## 🔥 **Use Cases of Closures**  

### ✅ **1. Data Privacy & Encapsulation (Avoid Global Variables)**  
Closures ka **sabse bada use private variables banana hai**, jise **bahar se directly modify nahi kiya ja sake!**  

```js
function createBankAccount() {
  let balance = 1000; // 🏦 Private Variable (Closure)
  
  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: ${amount}, New Balance: ${balance}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds!");
      } else {
        balance -= amount;
        console.log(`Withdrawn: ${amount}, Remaining Balance: ${balance}`);
      }
    },
    getBalance() {
      console.log(`Current Balance: ${balance}`);
    }
  };
}

const myAccount = createBankAccount();
myAccount.deposit(500); // Deposited: 500, New Balance: 1500
myAccount.withdraw(200); // Withdrawn: 200, Remaining Balance: 1300
myAccount.getBalance(); // Current Balance: 1300

console.log(myAccount.balance); // ❌ Undefined (Direct access blocked)
```
🔹 **Explanation:**  
1️⃣ `balance` ek private variable hai jo sirf `deposit()`, `withdraw()`, aur `getBalance()` ke andar accessible hai.  
2️⃣ **Closure ka use karke hum secure data encapsulation kar sakte hain!** 🔐  

---

### ✅ **2. Function Currying (Partial Function Application)**  
Closures ka use **currying (partial function application) me hota hai**, jisme ek function **multiple functions me break hota hai, jo predefined values hold kar sakte hain.**  

```js
function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiply(2); // 🔥 `x = 2` yaad rakhega
console.log(double(5)); // 10
console.log(double(10)); // 20

const triple = multiply(3); // 🔥 `x = 3` yaad rakhega
console.log(triple(5)); // 15
console.log(triple(10)); // 30
```
🔹 **Explanation:**  
1️⃣ `multiply(2)` ek closure return karta hai jo **`x = 2` hold karta hai**.  
2️⃣ `double(5)` execute karne par `2 * 5` return hota hai.  
3️⃣ **Closure ka use karke hum reusable functions bana sakte hain!**  

---

### ✅ **3. Once Function (Run Only Once)**
Agar hume ek function **sirf ek hi baar execute karna hai**, to closure ka use kar sakte hain.  

```js
function once() {
  let executed = false; // 🔒 Private Variable
  
  return function () {
    if (!executed) {
      console.log("Running function...");
      executed = true;
    } else {
      console.log("Already executed, can't run again!");
    }
  };
}

const runOnce = once();
runOnce(); // Running function...
runOnce(); // Already executed, can't run again!
runOnce(); // Already executed, can't run again!
```
🔹 **Explanation:**  
1️⃣ `executed` ek **private variable** hai jo **closure me hold hota hai**.  
2️⃣ **Pehli baar function execute ho jata hai, lekin dusri baar execute hone nahi deta!**  

---

### ✅ **4. Memoization (Performance Optimization)**
Closures ka use **memoization** ke liye hota hai, jo **expensive calculations ko cache karne ke kaam aata hai.**  

```js
function memoizedFactorial() {
  let cache = {}; // 🔥 Cache using Closure
  
  return function factorial(n) {
    if (n in cache) {
      console.log("Fetching from cache...");
      return cache[n];
    } else {
      console.log("Calculating...");
      let result = n <= 1 ? 1 : n * factorial(n - 1);
      cache[n] = result;
      return result;
    }
  };
}

const fact = memoizedFactorial();
console.log(fact(5)); // Calculating... 120
console.log(fact(6)); // Calculating... 720
console.log(fact(5)); // Fetching from cache... 120
```
🔹 **Explanation:**  
1️⃣ `cache` closure ke andar **private memory** me store hota hai.  
2️⃣ Agar same input dobara aaye, to **cache se directly return hota hai, calculation dobara nahi hoti!** ✅  

---

## 🔥 **Key Benefits of Closures**  

| **Use Case** | **Explanation** |
|-------------|---------------|
| **Data Privacy** 🔒 | Private variables banane ke liye, jo bahar access nahi ho sakte |
| **Currying** 🎯 | Ek function ko multiple functions me todne ke liye |
| **Once Functions** ✅ | Ek function ko sirf ek baar execute karne ke liye |
| **Memoization** 🚀 | Expensive calculations ko optimize karne ke liye |

---

## 🚀 **Conclusion**  
✅ **Closure ek function hai jo apne outer scope ke variables ko "remember" karta hai, chahe outer function execute ho chuka ho.**  
✅ **Closures ka use data privacy, currying, function optimization, aur memoization me hota hai.**  
✅ **Agar closures ka sahi use karein, to JavaScript me memory efficient aur optimized code likh sakte hain.**  

🧠 **Agar yeh concept samajh liya, to aap JavaScript Closures ke master ban gaye!** 🚀🔥