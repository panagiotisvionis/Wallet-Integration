# Wallet Integration Project

This project demonstrates the integration of a Web3 wallet (MetaMask) with a React frontend and a Node.js backend. It uses the Alchemy SDK for interacting with the Ethereum blockchain.

---

## **Setup Instructions**

### **2. Backend Setup**
Navigate to the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file and add your Alchemy API key:
```makefile
ALCHEMY_API_KEY=your-alchemy-api-key
```

Start the backend server:
```bash
node index.js
```

---

### **3. Frontend Setup**
Navigate to the frontend directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Start the React application:
```bash
npm start
```

The frontend will run on `http://localhost:3000`, and the backend will run on `http://localhost:3001`.

---

## **Usage**
1. Open the frontend in your browser: [http://localhost:3000](http://localhost:3000).
2. Enter an Ethereum address in the input field.
3. Click **"Get Transactions"** to fetch the transaction history for the provided address.

---

## **Troubleshooting**

- **CORS Issues**: Ensure the backend has CORS enabled by adding the following to `index.js`:
   ```javascript
   const cors = require('cors');
   app.use(cors());
   ```

- **Invalid API Key**: Verify that the correct Alchemy API key is used in the `.env` file.

- **MetaMask Connection**: Make sure MetaMask is installed and connected to the Sepolia Testnet.

---

## **Contributing**
Feel free to fork this repository and submit pull requests for any enhancements or bug fixes.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

