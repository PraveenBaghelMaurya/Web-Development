🔥 **"Express.js Mein Routing Ka Jadoo: Static, Dynamic & Params Full Explained!"**

---

**📌 Introduction:**  
Jab tum ek website ya API banate ho, toh **routes** define karne padte hain — ye batate hain ki user kis URL pe kya dekhega.  
Aaj hum sikhenge:  
- ✨ **Routing kya hota hai**  
- 🌀 **Dynamic routing**  
- 📦 **URL parameters (params)**  
Sab kuch **Express.js** mein with real code & Hinglish explanation! 💻🌐

---

## 🧭 1. What is Routing?

📌 **Routing** means:  
_"User ne kisi particular URL par request bheji, toh us URL ke response mein kya bhejna hai, wo decide karna."_

### 🔧 Example – Static Route:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🏠 Welcome to Home Page');
});

app.get('/about', (req, res) => {
  res.send('📖 About Us Page');
});

app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
```

---

## 🔄 2. What is Dynamic Routing?

🌀 Jab tum kisi route mein **changing values** accept karte ho, use **dynamic route** kehte hain.

### 🔧 Example – Dynamic Route with Params:

```js
app.get('/user/:username', (req, res) => {
  const user = req.params.username;
  res.send(`👤 Welcome, ${user}`);
});
```

### 🔍 Test URL:

```
http://localhost:3000/user/praveen
```

🟢 Output:
```
👤 Welcome, praveen
```

---

## 📦 3. Multiple Params:

Tum multiple values bhi URL se access kar sakte ho.

### 🔧 Example:

```js
app.get('/product/:category/:id', (req, res) => {
  const { category, id } = req.params;
  res.send(`📦 Category: ${category} | Product ID: ${id}`);
});
```

🧪 Test URLs:

```
http://localhost:3000/product/electronics/101
```

🟢 Output:
```
📦 Category: electronics | Product ID: 101
```

---

## 🧪 Bonus: Query Params vs URL Params

| Feature         | URL Params (`/user/:id`)     | Query Params (`/user?id=123`)    |
|-----------------|------------------------------|----------------------------------|
| Structure       | Part of route                | After `?` in URL                 |
| Use             | Unique identifiers           | Filters, sorting, etc.           |
| Access in code  | `req.params.id`              | `req.query.id`                   |

### 🔧 Example with Query Param:

```js
app.get('/search', (req, res) => {
  const keyword = req.query.keyword;
  res.send(`🔍 You searched for: ${keyword}`);
});
```

🧪 Test:
```
http://localhost:3000/search?keyword=laptop
```

🟢 Output:
```
🔍 You searched for: laptop
```

---

## 🧠 Key Takeaways:

- 📍 **Static Routes**: Same response for same path.
- 🌀 **Dynamic Routes**: Path ke part ko variable banate ho (e.g., `:id`, `:username`)
- 🧾 **req.params**: URL path se value nikalta hai.
- 🧪 **req.query**: URL ke query string se value leta hai (after `?`).
- 🛠️ Useful for building user profile pages, product details, filtering, etc.

---

📦 **Ready Project Folder Banane ke Steps:**

```bash
mkdir express-routing
cd express-routing
npm init -y
npm install express
touch server.js
```

🖊 Paste the above code and try different routes!

---

Agle step mein chaho toh:
- 🧩 Middleware with routes
- 🛒 REST API (CRUD) with MongoDB
- 📁 File structure of large apps

