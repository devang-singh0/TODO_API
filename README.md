![image](https://github.com/devang-singh0/TODO_API/assets/100257042/955a2dfb-b7ab-4d8d-86fb-96bb03e4bfeb)


## 🔗 Important Links
[![LIVE AT](https://img.shields.io/badge/LIVE_AT-000?style=for-the-badge&logo=ko-fi&logoColor=white)](devang-todo-api.up.railway.app)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/devang-singh-b29353255/)
[![PORTFOLIO](https://img.shields.io/badge/portfolio-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://devang-singh0.github.io/portfolio/)


<blockquote style="background-color:red; color:white; padding:10px;">
  <h2>Refer to <a href="https://devang-todo-api.up.railway.app/" style="color:white; text-decoration:none;">this link</a> for better documentation.</h2>
</blockquote>



Todo API Documentation
======================

Welcome to the documentation for the Todo API! This API allows you to manage your todo list with ease, providing endpoints for creating, updating, deleting, and retrieving todos. Below, you'll find details about the available endpoints, request/response formats, and usage examples.

Base URL
--------

The base URL for the Todo API is <https://devang-todo-api.up.railway.app/>.

Endpoints
---------

### GET /todos

#### Description

Retrieve all todos.

#### Example Request


`GET /todos`

#### Example Response


`[
  {
    "id": 1,
    "title": "Complete homework",
    "completed": false
  },
  {
    "id": 2,
    "title": "Buy groceries",
    "completed": true
  }
]`

### POST /todos

#### Description

Create a new todo.

#### Request Body


`{
  "title": "Todo title",
  "completed": false
}`

#### Example Request


`POST /todos
Content-Type: application/json

{
  "title": "Do laundry",
  "completed": false
}`

#### Example Response


`{
  "id": 3,
  "title": "Do laundry",
  "completed": false
}`

### PUT /todos/:id

#### Description

Update an existing todo.

#### Request Parameters

-   `id`: ID of the todo to update.

#### Request Body


`{
  "title": "Updated todo title",
  "completed": true
}`

#### Example Request


`PUT /todos/3
Content-Type: application/json

{
  "title": "Do laundry",
  "completed": true
}`

#### Example Response


`{
  "id": 3,
  "title": "Do laundry",
  "completed": true
}`

### DELETE /todos/:id

#### Description

Delete a todo.

#### Request Parameters

-   `id`: ID of the todo to delete.

#### Example Request

`DELETE /todos/3`

#### Example Response

`204 No Content`

Usage
-----
You can use the Todo API to manage your todo list programmatically. Make requests to the provided endpoints using your preferred HTTP client, such as cURL or Postman, to interact with the API and perform CRUD operations on your todos.

Authentication
--------------

The Todo API does not require authentication. However, it's recommended to implement some form of authentication mechanism to secure access to the API endpoints in a production environment.

Author
------

This Todo API documentation is created and maintained by [Devang Singh](https://github.com/devang-singh0).
