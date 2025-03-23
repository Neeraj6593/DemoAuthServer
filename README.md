# Simple Authentication API (No Database)

## 🚀 Setup Instructions
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server:
   ```sh
   npm run dev
   ```

## 🔥 API Routes
- **POST /api/auth/signup** → Register a new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```
- **POST /api/auth/login** → Login user and get JWT
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```

Use **Postman** or **cURL** to test authentication.

**Note:** User data is stored **in-memory** and will be lost on restart.
