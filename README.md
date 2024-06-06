# NodeJS Timestamp API

A simple Node.js app to create and retrieve timestamp files.

## Features

- **Create Timestamp File**: Generates a text file with the current timestamp.
- **Retrieve Timestamp Files**: Lists all timestamp files and their contents.

### Base URL
- `https://nodejs-timestamp-task.onrender.com/`

### Endpoints

- **Create Timestamp File**
  - `GET /current-time`
  - Creates a file with the current timestamp.
  - **Response**:
    ```json
    {
      "currenttime": "06-06-2024-21-11-02"
    }
    ```

- **Retrieve All Timestamp Files**
  - `GET /all-time`
  - Retrieves all timestamp files and their contents.
  - **Response**:
    ```json
    {
      "allTimestamp": [
          "06-06-2024-21-11-02",
          "06-06-2024-21-12-03",
          ...
      ]
    }
    ```

### Postman Documentation

For detailed API documentation, visit the [Postman Documentation](https://documenter.getpostman.com/view/35034228/2sA3XJjjNh).

## Technologies Used

- Express
- Node.js
- date-fns
