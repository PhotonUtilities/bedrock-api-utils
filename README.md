# Player Score API

## Overview

This API allows you to manage player scores and player lists. It includes endpoints for setting and retrieving player data, and checking the server status.

## Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/TM-Grant6/bedrock-api-utils.git
   cd your-project
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**

   Edit `config/keys.js` to set your API keys:

   ```javascript
   module.exports = {
       KEY: 'your_private_key_here',
       REQUEST_KEY: 'your_request_key_here',
   };
   ```

   Edit `config/database.js` to set your MongoDB URI
   
   ```javascript
   const mongoose = require('mongoose');

   // should look like this mongodb+srv://<username>:<Database-password>@cluster0.3op26.mongodb.net/
   const MONGO_URI = 'uri_goes_here';

   const connectDB = async () => {
      try {
         wait mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
         console.log('Connected to MongoDB');
      } catch (err) {
         console.error('MongoDB connection error:', err);
         process.exit(1);
      }
   };

   module.exports = connectDB;
   ```

5. **Start the Server**

   ```bash
   node server.js
   ```

   The server will be available at `http://localhost:3000`.

## API Endpoints

### Set Player Score

**Endpoint:** `POST /api/setscore`

**Headers:**
- `Authorization: your_private_key_here`

**Body:**

   ```json
   {
     "name": "PlayerOne",
     "stats": {
       "kills": 10,
       "deaths": 2,
       "assists": 5
     }
   }
   ```

### Set Player List

**Endpoint:** `POST /api/setplayers`

**Headers:**
- `Authorization: your_private_key_here`

**Body:**

   ```json
   [
     "PlayerOne",
     "PlayerTwo",
     "PlayerThree"
   ]
   ```

### Get Player List

**Endpoint:** `GET /api/getplayers`

**Headers:**
- `Authorization: your_request_key_here`

### Get Player Score

**Endpoint:** `GET /api/getscore?name=PlayerOne`

**Headers:**
- `Authorization: your_request_key_here`

### Check Server Status

**Endpoint:** `GET /api/status`

## Notes

- Ensure MongoDB is running and accessible.
- Use the provided keys carefully and keep them secure.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
