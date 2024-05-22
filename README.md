# Backend-Task
Task Manager API


Start the server:
node index.js


*********** API Endpoints ************

Register User:
    POST localhost:3000/auth/register

    Request Body:
    {
        "username": "user1",
        "password": "password123"
    }

    Response:
    {
        "message": "User registered"
    }


Login User:

    POST localhost:3000/auth/login
    Logs in a user and returns a JWT token cookie.

    Request Body
    {
        "username": "user1",
        "password": "password123"
    }



Get All Tasks:

    POST localhost:3000/api/tasks
    Request Body:
    {
        "page": 1,
        "limit": 5
    }

    Response:
    [
        {
            "id": 1,
            "title": "Task 1",
            "description": "Description for Task 1"
        },
        {
            "id": 2,
            "title": "Task 2",
            "description": "Description for Task 2"
        }
    ]







