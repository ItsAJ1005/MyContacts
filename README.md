# myContacts 📇

Welcome to the myContacts project! This application allows you to manage your contacts with ease. Below you will find instructions on how to set up the project and perform basic CRUD (Create, Read, Update, Delete) operations.

## Table of Contents 📜
- [Installation](#installation)
- [Usage](#usage)
- [CRUD Operations](#crud-operations)
  - [Create a Contact](#create-a-contact)
  - [Read Contacts](#read-contacts)
  - [Update a Contact](#update-a-contact)
  - [Delete a Contact](#delete-a-contact)
- [Contributing](#contributing)

## Installation ⚙️

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/myContacts.git

2. **Navigate to the project directory:**
   ```bash
   cd myContacts
3. **Install the dependencies:**
    ```bash
   npm install
4. **Set up environment variables:**  
Create a .env file in the root directory and add the following variables:

    ```bash
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    ACCESS_TOKEN_SECRET=your_secret_key
5. **Start the application:**
    ```bash
    npm start
# Usage 🚀
Once the application is running, you can access it at http://localhost:5000. The application interface allows you to add, view, update, and delete contacts.
# CRUD Operations  🔄
## Create a Contact ✏️
To create a new contact, send a POST request to /api/contacts with the contact details in the request body. Ensure you include a valid JWT token in the Authorization header.

### Request:
```
POST /api/contacts
Content-Type: application/json
Authorization: Bearer your_jwt_token

{
  "name": "Harsh",
  "email": "harsh@example.com",
  "phone": "123-456-7890"
}
```
### Response:
```
201 Created
{
  "_id": "contact_id",
  "name": "Harsh",
  "email": "harsh@example.com",
  "phone": "123-456-7890",
  "user_id": "user_id"
}

```
## Read Contacts 📖
To retrieve all contacts, send a GET request to /api/contacts with a valid JWT token in the Authorization header.
### Request:
```
GET /api/contacts
Authorization: Bearer your_jwt_token

```

### Response:
```
200 OK
[
  {
    "_id": "contact_id",
    "name": "Harsh",
    "email": "harsh@example.com",
    "phone": "123-456-7890",
    "user_id": "user_id"
  },
  ...
]
```
To retrieve a single contact, send a GET request to /api/contacts/:id with a valid JWT token in the Authorization header.
### Request:
```
GET /api/contacts/:id
Authorization: Bearer your_jwt_token
```
### Response:
```
200 OK
{
  "_id": "contact_id",
  "name": "Harsh",
  "email": "harsh@example.com",
  "phone": "123-456-7890",
  "user_id": "user_id"
}
```
## Update a Contact:🔄
To update an existing contact, send a PUT request to /api/contacts/:id with the updated contact details in the request body. Ensure you include a valid JWT token in the Authorization header.
### Request:
```
PUT /api/contacts/:id
Content-Type: application/json
Authorization: Bearer your_jwt_token

{
  "name": "Jogo",
  "email": "jogo@example.com",
  "phone": "987-654-3210"
}
```
### Response:
```
200 OK
{
  "_id": "contact_id",
  "name": "Jogo",
  "email": "jogo@example.com",
  "phone": "987-654-3210",
  "user_id": "user_id"
}
```
## Delete a Contact 🗑️
To delete a contact, send a DELETE request to /api/contacts/:id with a valid JWT token in the Authorization header.
### Request:
```
DELETE /api/contacts/:id
Authorization: Bearer your_jwt_token
```
### Response:
```
200 OK
{
  "_id": "contact_id",
  "name": "Harsh",
  "email": "harsh@example.com",
  "phone": "123-456-7890",
  "user_id": "user_id"
}
```

## Contributing 🤝

Contributions are welcome! Personally, I AJ Harsh Vardhan likes it when you contribute. Please create a pull request with your changes and ensure your code follows the project's coding standards.
