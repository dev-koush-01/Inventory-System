# 🛒 Inventory Management System (Retail)

A simple backend project for managing inventory data in a retail business. Built with **Node.js**, **Express**, and **MySQL**. This project demonstrates basic CRUD operations and can be tested via API tools like **Thunder Client** or **Postman**.

---

## 📁 Features

- ✅ Add new inventory items
- 📄 View all inventory records
- ✏️ Update product quantity and price
- ❌ Delete a product
- 🔐 Environment variable support using `.env`

---

## 🚀 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MySQL
- **ORM/Driver**: mysql2
- **Environment Management**: dotenv

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/dev-koush-01/Inventory-System.git
cd Inventory-System
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

Create a `.env` file in the root folder:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=inventory_db
PORT=3000
```

### 4. Create MySQL Database

Run the SQL script provided in `Inveentory_DB_Script.sql` to create your database and tables.

You can use **MySQL Workbench** or the CLI:

```sql
-- Example using MySQL Workbench
-- Open the script and run the query

source path/to/Inventory_DB_Script.sql;
```

---

## ▶️ Run the server

```bash
npm run dev
```

The server will start on `http://localhost:3000`.

---

## 🧪 API Endpoints

Test these endpoints using **Thunder Client** or **Postman**.

| Method | Endpoint    | Description             |
| ------ | ----------- | ----------------------- |
| GET    | /items      | Get all inventory items |
| GET    | /items/\:id | Get item by ID          |
| POST   | /items      | Add a new item          |
| PUT    | /items/\:id | Update item by ID       |
| DELETE | /items/\:id | Delete item by ID       |

---

## 📂 Project Structure

```
.
├── server.js
├── .env
├── package.json
├── Inventory_DB_Script.sql
└── README.md
```

---

## 💡 Author

**Koushik Chandra**

---

## 📜 License

This project is for academic and demo purposes. You can modify and use it as needed.

```