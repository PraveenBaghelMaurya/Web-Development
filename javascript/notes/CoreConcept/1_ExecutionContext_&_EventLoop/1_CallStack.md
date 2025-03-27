## 🔥 Call Stack – JavaScript Execution Ka Hero  

### 🧐 Kya Hai Call Stack?  
Call Stack ek **data structure** hai jo **JavaScript ke function execution** ko manage karta hai. Yeh ek **LIFO (Last In, First Out)** principle pe kaam karta hai, matlab jo function **last mein aata hai, pehle execute hota hai**.  

---

### 🛠 Kaise Kaam Karta Hai?  
1️⃣ **Function call hota hai** → Stack ke top pe push hota hai.  
2️⃣ **Function execute hota hai** → Stack se remove ho jata hai.  
3️⃣ **Agar ek function doosre function ko call kare** → Naya function stack ke top pe aata hai.  
4️⃣ **Jab saare functions execute ho jayein** → Stack empty ho jata hai.  

---

### ✍ Example Code:  
```js
function first() {
  second();
  console.log("First function executed");
}

function second() {
  third();
  console.log("Second function executed");
}

function third() {
  console.log("Third function executed");
}

first();
```

---

### ⚡ Execution Step-by-Step:  
📌 `first()` call hua → **Stack pe push** 🟢  
📌 `first()` ne `second()` ko call kiya → **Stack pe push** 🟢  
📌 `second()` ne `third()` ko call kiya → **Stack pe push** 🟢  
📌 `third()` execute hua → **Stack se pop (remove)** 🔴  
📌 `second()` execute hua → **Stack se pop (remove)** 🔴  
📌 `first()` execute hua → **Stack se pop (remove)** 🔴  

👉 **Last function pehle remove hota hai** – isi wajah se isse **LIFO** kaha jata hai.

---

### 🚨 Stack Overflow Kya Hai?  
Agar ek function **khud ko infinite baar call kare** (recursive function bina base condition ke), toh **call stack full ho jata hai** aur **"Maximum call stack size exceeded" error** aa sakti hai.  

#### ❌ Example of Stack Overflow:  
```js
function infiniteRecursion() {
  infiniteRecursion(); // Yeh function khud ko baar-baar call karega
}

infiniteRecursion(); // 💥 Stack Overflow
```

---

### 🎯 Conclusion  
✅ Call Stack JavaScript execution manage karta hai.  
✅ Yeh synchronous execution ke liye zaroori hai.  
✅ Stack Overflow se bachne ke liye recursive functions ko sahi handle karein.  
✅ Debugging ke liye **Chrome DevTools → Call Stack Section** ka use karein.  

🧠 **Call Stack ka concept samajhna JavaScript ko deep level pe seekhne ke liye important hai!** 🚀