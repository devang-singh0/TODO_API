#TODO API

**THIS API IS BUILD FOR ONLY EDUCATION PURPOSE, FRONTEND DEVELOPER CAN USE THIS ON THEIR TODO LIST PROJECT**

> FOR DOCUMENTATION REFER TO [HERE](https://devang-todo-api.up.railway.app/)




HERE'S THE BASIC OUTLINE OF SAME PAGE MENTIONED ABOVE


##Authentication


###bearer token Authentication is required for making any type of request on /todo

###bearer token Authentication is required for making PATCH and DELETE request on /user

###Email and Password for fields required for making GET and POST request on /user

##https://devang-todo-api.up.railway.app

**GET /user**

Generates Authentication Token for a registered user
Used for login

Example Request:
GET https://devang-todo-api.up.railway.app/user
{
 "email": "name@gmail.com",
 "password": "IAmTheBest"
}

Example Response:
{
 "status": "success",
 "token": "YOUR_TOKEN_HERE"
}

**POST /user**
Generates Authentication Token and makes a new user in DB
Used for registration

Example Request:
POST https://devang-todo-api.up.railway.app/user
{
 "email": "name@gmail.com",
 "password": "IAmTheBest"
}

Example Response:
{
 "status": "success",
 "token": "YOUR_TOKEN_HERE"
}

**PATCH /user**
Changes email or password or both for an existing user
Used for changing user credentials

Example Request:
PATCH https://devang-todo-api.up.railway.app/user
**Bearer Token Required
{
 "email": "name@gmail.com",
 "password": "IAmTheBest"
 "newToken": "newToken"   //for any further requests this token must be used for patched user
}

Example Response:
{
 "status": "success",
 "user": "UPDATED_DETAILS_OF_USER"
}

DELETE /user
Removes an existing user

Used for deleting user

Request Body:
{
 "email": "your@mail.com",    
 "password": "yourPasswords"   
}

Example Request:
DELETE https://devang-todo-api.up.railway.app/user
**Bearer Token Required
{
 "email": "your@mail.com",    
 "password": "yourPasswords"   
}

Example Response:
{
 "status": "success",
 "msg": "user deleted"
}



GET /todo
Returns all TODO's by the user logged in

Used to retrieve todo's

Example Request:
GET https://devang-todo-api.up.railway.app/todo
**Bearer Token Required
Example Response:
{
 "TODO": "ALL_YOUR_TODO ",
}

POST /todo
Creates a new todo

Used to make a new todo in DB

Request Body:
{
 "title": "title of your todo",
 "description": "description for the todo"
 "completed": true/false    //optional
}

Example Request:
POST https://devang-todo-api.up.railway.app/user
**Bearer Token Required
{
 "title": "myToDo1",
 "description": "description for myToDo1"
 "completed": false    //optional
}

Example Response:
{
 "status": "success",
 "todo": "YOUR_TODO"
}

PATCH /todo
Changes existing todo

Used for updating or completing a todo (completed: true)

Request Body:
{
 "title": "new title of your todo",
 "description": "new description for the todo"
 "todoId": "id of the todo"
 "completed": true/false    //optional
}

Example Request:
PATCH https://devang-todo-api.up.railway.app/user
**Bearer Token Required
{
 "completed": true,
}

Example Response:
{
 "status": "success",
 "todo": "UPDATED_DETAILS_OF_TODO"
}

DELETE /todo
Removes an existing todo

Used for deleting todo

Request Body:
Example Request:
DELETE https://devang-todo-api.up.railway.app/todo
**Bearer Token Required
Example Response:
{
 "status": "success",
 "msg": "todo deleted"
}

GET /todo/:id
Returns TODO by the user logged in with id

Used to retrieve todo

Example Request:
GET https://devang-todo-api.up.railway.app/todo
**Bearer Token Required
Example Response:
{
 "TODO": "YOUR_TODO ",
}
