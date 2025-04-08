 ## 📌 What is File Dependency in Express?

Jab tumhara Express app **multiple files me divided hota hai**, toh har file **kisi dusri file pe dependent hoti hai** to perform its task.

💬 **Ek file dusri file ka use karti hai** (via `require()` or `import`) — yeh hi hai **file dependency**.

---

## ⚙️ Common File Types in Express Projects

| Folder/File         | Role                                      | Depends On                     |
|---------------------|-------------------------------------------|--------------------------------|
| `app.js` / `server.js` | Main entry file                          | Routes, Middleware              |
| `/routes/`          | Define URL paths                          | Controllers                    |
| `/controllers/`     | Handle business logic                     | Models, Services               |
| `/models/`          | Database schema (MongoDB/SQL)             | None (used by Controllers)     |
| `/middlewares/`     | Custom middlewares (auth, logger, etc.)   | Sometimes Controllers/Utils    |
| `/services/`        | Utility or reusable logic                 | Models, APIs, etc.             |

---

## 📁 Example Structure

```
project/
├── app.js
├── routes/
│   └── userRoutes.js
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
```

---

## 🔗 File Dependency Flow:

```text
app.js → routes → controllers → models
```

1. **`app.js`** loads **routes**
2. **`routes`** connect to **controllers**
3. **`controllers`** use **models** to interact with DB

---

## 💻 Code Example

### 🔹 `app.js`

```js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/user', userRoutes); // Load route

app.listen(4444, () => console.log("Server running"));
```

---

### 🔹 `routes/userRoutes.js`

```js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUser); // File dependency on controller
module.exports = router;
```

---

### 🔹 `controllers/userController.js`

```js
const userModel = require('../models/userModel');

exports.getUser = (req, res) => {
    const data = userModel.getData(); // Dependent on model
    res.send(data);
};
```

---

### 🔹 `models/userModel.js`

```js
exports.getData = () => {
    return { name: "Praveen", role: "Web Developer" };
};
```

---

## 🚨 Important Tips

- ❌ **Avoid circular dependencies** (fileA → fileB → fileA)
- ✅ Maintain one-way dependency (Top to bottom)
- 🔁 Reuse logic via helper/service files
- 🔍 Visualize file dependency using tools like:
  ```bash
  npx madge --image graph.svg .
  ```

---

## ✅ Key Takeaways:

- File dependency = ek file doosri file pe dependent hai to run properly
- Follow flow: `app.js → routes → controllers → models`
- Keep it **modular, reusable and clean**
- Avoid **tight coupling** between unrelated files

---

💬 **Bonus Analogy**:  
"Jaise ek hotel me waiter (route) chef (controller) ko order deta hai, aur chef ingredients (model) se kaam karta hai!" 🍲🍽️

---

Agle topics chalo:
- 🔧 Middleware ka breakdown?
- ⚙️ MVC architecture ka practical example?
- 🚀 Folder structure for large apps?

