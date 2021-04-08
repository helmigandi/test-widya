# REST API Test
- Bisa melakukan pembuatan akun
- Bisa melakukan login
- Menyimpan data user di database
- Bisa mengakses profile dengan header token JWT, response berbentuk JSON

## USAGE
- Make sure you have Node.js and npm in your computer and then run `npm install`.
- Make sure you connect to internet because I use MongoDB Atlas as Database.

## RESTful endpoints
### POST /register

> Create user and save to the database

_URL Link_
```
http://localhost:3000/register
```

_Request Body_
```
{
	"name": "<User's name>",
	"email": "<User's email>",
	"password": "<User's password>",
	"gender": "<User's gender>"
}
```

_Response(201)_
```
{
  "name": "<User's saved name>",
	"email": "<User's saved email>",
}
```

_Response(400- bad request)_
```
{
  "message": "Invalid email / password"
}
```

_Response (500)_
```
{
  "message": "<Error message from server>"
}
```
---

### POST /login

> Login user after register

_URL Link_
```
http://localhost:3000/login
```

_Request Body_
```
{
  "email": "<User's email>",
  "password": "<User's password>"
}
```

_Response(200)_
```
{
    "access_token": "<User's access_token>"
}
```

_Response(400- bad request)_
```
{
  "message": "Invalid email / password"
}
```

_Response (500)_
```
{
  "message": "<Error message from server>"
}
```
---

### GET /user

> Get user data

_URL Link_
```
http://localhost:3000/user
```

_Request Header_
```
{
  "access_token": "<user access_token>"
}
```

_Response (200)_
```
{
  "_id": "<User's name>"
	"name": "<User's name>",
	"email": "<User's email>",
	"password": "<User's password>",
	"gender": "<User's gender>"
}
```

_Response(401- Unauthorized)_
```
{
  "message": "Invalid Authentication, The requested page needs a username and a password."
}
```

_Response(403- Forbidden)_
```
{
  "message": "Forbidden access, You are not authorized to access the file.",
}
```

_Response (500)_
```
{
  "message": "<Error message from server>"
}
```
