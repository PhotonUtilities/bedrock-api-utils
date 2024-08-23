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
   git clone https://github.com/your-repo/your-project.git
   cd your-project
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**

   Edit `config/keys.js` to set your MongoDB URI and API keys:

   ```javascript
   module.exports = {
       KEY: 'your_private_key_here',
       REQUEST_KEY: 'your_request_key_here',
       MONGO_URI: 'your_mongo_db_uri'
   };
   ```

4. **Start the Server**

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
