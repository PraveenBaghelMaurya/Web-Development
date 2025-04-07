🔥 **"Express.js Se HTML Serve Karna with 📁 Public Folder – Professional Style!"**

---

**📌 Introduction:**  
Jab bhi real-world project banate ho, toh tumhari HTML, CSS, JS files usually ek folder mein hoti hain – jise commonly `public` folder kehte hain.  
Aaj hum dekhenge kaise **Express.js** ke saath `res.sendFile()` use karke **public folder ke andar se HTML file serve** karte hain. ⚙️📄

---

## 🏗️ Folder Structure:

```
project-folder/
├── public/
│   └── index.html
└── server.js
```

---

## 📄 Step 1: `index.html` (Inside `public` Folder)

👉 `public/index.html` mein likho:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Express + Public</title>
</head>
<body>
  <h1>🏠 Hello from Public Folder</h1>
  <p>This file is served using res.sendFile()</p>
</body>
</html>
```

---

## 🧠 Step 2: `server.js` Using `res.sendFile()` with Public Folder

```js
const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

// 🛣️ Serve index.html from public folder
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath);
});

app.listen(PORT, () => {
    console.log("🚀 Server is running on PORT", PORT);
});
```

---

## 📦 Step-by-Step Explanation:

| Line of Code                                  | Meaning 🔍                         |
|----------------------------------------------|-----------------------------------|
| `path.join(__dirname, 'public', 'index.html')` | `public/index.html` ka full path banta hai |
| `res.sendFile(filePath)`                     | HTML file ko client ko bhejta hai |
| `app.get('/')`                                | Jab user `/` pe aaye, tab HTML file serve karo |

---

## ✅ Output:

Run karo:

```bash
node server.js
```

🔗 Browser mein open karo:

```
http://localhost:4444/
```

🟢 Output on Page:
```
🏠 Hello from Public Folder
This file is served using res.sendFile()
```

---

## 🧠 Key Takeaways:

- 📁 `public` folder mein HTML file rakhna is clean and professional.
- 📤 `res.sendFile()` se tum kisi bhi location se file serve kar sakte ho.
- 📍 `path.join()` best practice hai har OS ke liye file path banane ke liye.
- 🔐 Ye technique simple landing pages, static UI serve karne ke liye use hoti hai.

---

### 🆚 Bonus Tip: Difference Between `sendFile()` vs `express.static()`

| Feature              | `res.sendFile()`                          | `express.static()`                            |
|----------------------|-------------------------------------------|------------------------------------------------|
| Manual or Automatic  | 🛠️ Manually specific file serve            | ⚡ Automatically serve public folder content    |
| Use-case             | Serve specific file                       | Serve all static assets (HTML, CSS, JS, images) |
| Example              | `res.sendFile('public/index.html')`      | `app.use(express.static('public'))`            |

---

Agle step mein chalo:
- 📥 Static assets (CSS, images) kaise serve karte hain?
- 🧩 Express Routing + Static pages?
- 🌐 Serve 404 page if route not found?

