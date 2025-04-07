💥 **"Serve HTML Like a Pro: Express.js + sendFile() Magic!"**

---

**📌 Introduction:**  
Jab tum **Node.js + Express.js** se web server banate ho, toh sirf text ya JSON hi nahi, **HTML pages** bhi serve kar sakte ho browser ko.  
Aaj ka goal hai: Tumhara diya hua code ka example use karke **HTML page browser mein display karna**! 🧑‍💻🌐

---

## ✅ Code Example :

```js
const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath);
});

app.listen(PORT, () => {
    console.log("🚀 Server had created with PORT", PORT);
});
```

---

## 🧾 Step-by-Step Explanation:

| 🔢 Step | 🔍 Description |
|--------|----------------|
| `express` | 📦 Express framework import kar rahe ho |
| `path` | 📁 File path build karne ke liye Node module |
| `app.get('/')` | 🚪 Jab koi root URL pe aaye (`/`), toh kya bhejna hai |
| `path.join(__dirname, 'index.html')` | 🧭 Current directory ke andar `index.html` ka full path |
| `res.sendFile(...)` | 📤 Client ko HTML file bhejna |
| `app.listen(...)` | 🎧 Server ko specific PORT pe listen karwana |

---

## 📁 Folder Structure Banana (Very Important):

```
project-folder/
├── index.html
└── server.js
```

---

## 🧪 Create an HTML File (`index.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Express HTML Serve</title>
</head>
<body>
  <h1>🚀 Hello from Express!</h1>
  <p>This HTML page is served via sendFile()</p>
</body>
</html>
```

---

## 🚀 Run Your Project:

```bash
node server.js
```

🔗 Open this in browser:

```
http://localhost:4444
```

🟢 Output:
> 🚀 Hello from Express!  
> This HTML page is served via sendFile()

---

## 🧠 Key Takeaways:

- ✅ `sendFile()` se tum kisi bhi file ko browser mein bhej sakte ho.
- 📁 `path.join(__dirname, 'file')` is best practice for cross-platform file paths.
- 📄 HTML file ko easily serve kiya ja sakta hai using Express.
- 🎯 Useful for making: Landing Pages, Forms, Static Sites, Maintenance pages, etc.

---

💡 **Pro Tip:**  
Agar tum multiple static files serve karna chahte ho (like `style.css`, `script.js`), toh add this:

```js
app.use(express.static(__dirname));
```

---

Bolo boss! Agla topic kya ho?  
- 📥 Form handling?
- 🧩 Dynamic templates (EJS)?
- 🛒 Build a mini website with routing?

