#postit-restapi
###folder structure
```sh
├── package-lock.json
├── package.json
├── index.js
└── models
    ├── users.js
    │---- posts.js
    |--- comments.js
    ├── routes
    │---- users.js
    |---- posts.js
    |--- comments.js
    |----auth.js
  
package.json and package-lock.json contain metadata about our project.
index.js is the entry point and contains the logic our server to initialize and start it.

###Getting started
```
Clone the repository & change to the cloned folder

Using HTTPS
```sh
git clone https://github.com/Famousedoh/postit.git && cd famous-rentals
Using SSH
```sh
git clone git@github.com:famousedoh/postit.git && cd famous-rentals
Install dependencies
```
```
npm i
Start the server

In watch mode

npm run dev
Production

npm start
```
```
API Endpoints

GET /api/users => Get all users
GET /api/users/:id Get a user
GET /api/posts => Get all users
GET /api/users/:id/posts/:id => Get a user post
GET /api/comments=> Get all comments
GET /api/comments/:id Get a comment
POST /api/users => Add a new user
GET /api/users/:id Get a post
PUT /api/users/:id => Update a user
DELETE /api/users/:id => Delete a user
```
```
User schema
{
  id: int,
  email: string,
  username: string
}

Live url: https://postit-production-32e0.up.railway.app/
Database modelling url: https://dbdesigner.page.link/34X2g1LCNdFmkUJk6
