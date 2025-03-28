# 🚀 **Block Scope (`let`/`const`) vs. Function Scope (`var`)**  

## 🧐 **Scope Kya Hota Hai?**  
Scope **define karta hai ki ek variable kahaan accessible hoga aur kahaan nahi.** JavaScript me **3 tarah ke scopes hote hain:**  

1️⃣ **Global Scope** – Poore program me accessible 🏠  
2️⃣ **Function Scope** – Sirf function ke andar accessible 🎯  
3️⃣ **Block Scope** – Sirf `{}` curly braces ke andar accessible 🔒  

---

## 🔹 **1. Function Scope (`var`) – Sirf Function Ke Andar Kaam Karega**  
✅ `var` **sirf function ke andar accessible hota hai**, chahe use kisi bhi block `{}` me declare karein.  
✅ Iska scope **poore function me rehta hai, aur yeh block `{}` ka respect nahi karta.**  

### ✍ **Example (Function Scope of `var`):**
```js
function test() {
  if (true) {
    var a = 10; // ✅ Function ke kisi bhi part me accessible hoga
  }
  console.log(a); // ✅ 10 (No Error)
}

test();
console.log(a); // ❌ ReferenceError: a is not defined (Function ke bahar nahi hai)
```
🔹 **Explanation:**  
1️⃣ `var a` **sirf function scope ka hota hai, isliye function ke kisi bhi block `{}` me access ho sakta hai.**  
2️⃣ Function ke bahar `a` accessible nahi hai.  

---

## 🔹 **2. Block Scope (`let`/`const`) – Sirf `{}` Ke Andar Kaam Karega**  
✅ `let` aur `const` **block `{}` ke andar hi accessible hote hain**.  
✅ Agar block ke bahar access karne ki koshish ki to **Error aayega**.  

### ✍ **Example (Block Scope of `let`/`const`):**
```js
function test() {
  if (true) {
    let b = 20;
    const c = 30;
    console.log(b, c); // ✅ 20, 30
  }
  console.log(b, c); // ❌ ReferenceError: b is not defined
}

test();
```
🔹 **Explanation:**  
1️⃣ `b` aur `c` sirf `{}` ke andar hi accessible hain.  
2️⃣ `{}` ke bahar access karne ki koshish karne par **ReferenceError aayega!**  

---

## 🔥 **Key Differences: Block Scope vs. Function Scope**  

| Feature | **Function Scope (`var`)** | **Block Scope (`let`/`const`)** |
|---------|--------------------|---------------------|
| **Scope** | Sirf function ke andar accessible | Sirf `{}` ke andar accessible |
| **Hoisting** | Hoist hota hai aur `undefined` assign hota hai | Hoist hota hai but **TDZ (Temporal Dead Zone) error** deta hai |
| **Redeclaration Allowed?** | ✅ Allowed | ❌ Not Allowed in Same Scope |
| **Reassignment Allowed?** | ✅ Allowed | ✅ `let` me allowed, ❌ `const` me nahi |
| **Access Before Declaration?** | ❌ Possible but `undefined` milega | ❌ Possible nahi, ReferenceError aayega |
| **Use Case** | Function-level variables ke liye | Block-level variables ke liye |

---

## 🔥 **Example (Mixing `var`, `let`, `const`)**
```js
function example() {
  var x = 10;
  let y = 20;
  const z = 30;

  if (true) {
    var x = 100; // ✅ Allowed (Same function scope)
    let y = 200; // ✅ Allowed (Block scope)
    const z = 300; // ✅ Allowed (Block scope)
    console.log(x, y, z); // 100, 200, 300
  }

  console.log(x, y, z); // 100, 20, 30 (x change hua, y & z nahi)
}

example();
```
🔹 **Explanation:**  
1️⃣ `var x` **poore function me accessible hai, isliye uski value change ho gayi**.  
2️⃣ `let y` aur `const z` **block ke andar redefine ho gaye**, lekin function ke bahar unki original values hi hain.  

---

## 🚀 **Best Practices**
✅ **Hamesha `let` ya `const` use karein, `var` avoid karein!**  
✅ **Jo value change nahi honi chahiye, usko `const` se declare karein.**  
✅ **Block scope variables safer aur predictable hote hain.**  

---

## 🎯 **Conclusion**  
✅ **`var` function scope hota hai, aur poore function me accessible hota hai.**  
✅ **`let` aur `const` block `{}` scope hota hai, aur sirf uske andar accessible hota hai.**  
✅ **`const` immutable hai, `let` mutable hai, aur `var` unpredictable ho sakta hai.**  
✅ **JavaScript me modern coding ke liye `let` aur `const` best practice hai!**  

🧠 **Agar yeh concept samajh liya, to aap JavaScript scoping me pro ban gaye!** 🚀🔥