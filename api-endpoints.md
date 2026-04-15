# Available Backend API Routes

Your backend is fully functional and populated with the dummy data from your frontend. Your MongoDB now has an Admin, Categories, and Products!

You can test these endpoints using your API Tester (running on `http://localhost:3000`):

### 1. Admin Authentication
- **POST** `/api/admin/login`
  - **Body (JSON):** `{ "username": "admin", "password": "123456" }`
  - *Returns a JWT Token. Use this token in the `Authorization: Bearer <token>` header for Protected routes.*

### 2. Categories
- **GET** `/api/categories` (Public) - *Gets all categories*
- **POST** `/api/categories` (Protected) - *Creates a category*
- **PUT** `/api/categories/:id` (Protected) - *Updates a category*
- **DELETE** `/api/categories/:id` (Protected) - *Deletes a category*

### 3. Products/Properties
- **GET** `/api/products` (Public) - *Gets all products*
- **GET** `/api/products/:id` (Public) - *Gets a single product*
- **POST** `/api/products` (Protected) - *Creates a product*
- **PUT** `/api/products/:id` (Protected) - *Updates a product*
- **DELETE** `/api/products/:id` (Protected) - *Deletes a product*

### 4. Demands (User submissions)
- **POST** `/api/demands` (Public) - *For frontend users submitting property to review*
- **GET** `/api/demands` (Protected) - *Admin reads all pending/approved demands*
- **PUT** `/api/demands/:id/status` (Protected) - *Admin approves/rejects a demand*
  - **Body (JSON):** `{ "status": "approved" }`
  - *Note: Approving a demand automatically converts it to a live Product!*

---
*(Note: I've left the `node server.js` running in your terminal so you can test immediately!)*
