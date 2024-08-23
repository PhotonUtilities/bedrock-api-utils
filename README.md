# Player Score API Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [API Endpoints](#api-endpoints)
   - [Set Player Score](#set-player-score)
   - [Set Player List](#set-player-list)
   - [Get Player List](#get-player-list)
   - [Get Player Score](#get-player-score)
   - [Check Server Status](#check-server-status)
5. [Error Handling](#error-handling)
6. [Running the Server](#running-the-server)

## Introduction

This API provides a way to manage player scores and player lists for a game. It allows you to:

- Set and update player scores.
- Set and update the player list.
- Retrieve the player list.
- Retrieve player scores.
- Check the server status.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/tm-grant6/bedrock-api.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd bedrock-api
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up your MongoDB URI:**

    Make sure you have a MongoDB URI. You can replace the placeholder URI in `config/database.js`.

5. **Set up your API keys:**

    Replace the `your_key_here` and `your_request_key_here` placeholders in `config/keys.js` with your own private and request key.

## Configuration

### MongoDB Connection

The database connection is handled in the `config/database.js` file. Ensure that your MongoDB URI is correctly set in this file:

```javascript
const MONGO_URI = 'your_mongo_db_uri';
```

### API Keys

API keys are stored in the `config/keys.js` file. Replace the placeholder keys with your actual keys:

```javascript
module.exports = {
    KEY: 'your_private_key_here',
    REQUEST_KEY: 'your_request_key_here'
};
```

## API Endpoints

### Set Player Score

**Endpoint:** `POST /api/setscore`

**Authorization:** Requires the private key in the `Authorization` header.

**Body Parameters:**

- `name` (string, required): The name of the player.
- `stats` (object, required): A map of stat names to their respective values.

**Example Request:**

```json
POST /api/setscore HTTP/1.1
Authorization: your_private_key_here
Content-Type: application/json

{
  "name": "PlayerOne",
  "stats": {
    "kills": 10,
    "deaths": 2,
    "assists": 5
  }
}
```

**Example Response:**

```json
HTTP/1.1 200 OK
{
  "message": "Score saved successfully"
}
```

### Set Player List

**Endpoint:** `POST /api/setplayers`

**Authorization:** Requires the private key in the `Authorization` header.

**Body Parameters:**

- An array of player objects.

**Example Request:**

```json
POST /api/setplayers HTTP/1.1
Authorization: your_private_key_here
Content-Type: application/json

[
  {
    "name": "PlayerOne",
    "stats": {
      "kills": 10,
      "deaths": 2,
      "assists": 5
    }
  },
  {
    "name": "PlayerTwo",
    "stats": {
      "kills": 8,
      "deaths": 4,
      "assists": 3
    }
  }
]
```

**Example Response:**

```json
HTTP/1.1 200 OK
{
  "message": "Player list updated"
}
```

### Get Player List

**Endpoint:** `GET /api/getplayers`

**Authorization:** Requires the request key in the `Authorization` header.

**Example Request:**

```json
GET /api/getplayers HTTP/1.1
Authorization: your_request_key_here
```

**Example Response:**

```json
HTTP/1.1 200 OK
[
  {
    "name": "PlayerOne",
    "stats": {
      "kills": 10,
      "deaths": 2,
      "assists": 5
    }
  },
  {
    "name": "PlayerTwo",
    "stats": {
      "kills": 8,
      "deaths": 4,
      "assists": 3
    }
  }
]
```

### Get Player Score

**Endpoint:** `GET /api/getscore`

**Query Parameters:**

- `name` (string, required): The name of the player.

**Example Request:**

```json
GET /api/getscore?name=PlayerOne HTTP/1.1
Authorization: your_request_key_here
```

**Example Response:**

```json
HTTP/1.1 200 OK
{
  "name": "PlayerOne",
  "stats": {
    "kills": 10,
    "deaths": 2,
    "assists": 5
  }
}
```

### Check Server Status

**Endpoint:** `GET /api/status`

**Description:** This endpoint checks if the server is running properly.

**Example Request:**

```json
GET /api/status HTTP/1.1
```

**Example Response:**

```json
HTTP/1.1 200 OK
{
  "status": "Server is running"
}
```

## Error Handling

The API returns standard HTTP status codes for errors. Common error responses include:

- `401 Unauthorized`: The authorization key is missing or invalid.
- `400 Bad Request`: The request is missing required parameters or is formatted incorrectly.
- `404 Not Found`: The requested resource does not exist.
- `500 Internal Server Error`: An error occurred on the server.

## Running the Server

To run the server, use the following command:

```bash
node app.js
```

The server will start on port `3000`, and you'll see output in the console indicating the server is listening.

Ensure that you have your private and request keys set up correctly. You can now make API requests to the server.