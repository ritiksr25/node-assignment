# node-assignment
API to create, update, delete, view users and also comment, view comment, etc.

# Features:
1. Add user
2. Update user
3. Delete user
4. View all users
5. View a user
6. View users who love coding
6. Comment on a user's profile
7. View comments of a user

# Routes/API Endpoints: 
1. /api/v1 GET test route for welcome message
2. /api/v1/coding GET Displays list of users who have coding in their interests
3. /api/v1/users/add POST Create a new user (body: name(required), email(required), phone, address, designation, interests(required))
4. /api/v1/users/update/:id POST Update a user (body: name(required), email(required), phone, address, designation, interests(required))
5. /api/v1/users/delete/:id GET Delete a user
6. /api/v1/users/all GET Displays list of all users
7. /api/v1/users/view/:id GET View a specific user by its id
8. /api/v1/users/comment/:to/:by POST Create a comment (to: id of user on which (by: id of user who is commenting) comments)
9. /api/v1/users/view-comments/:id GET View comments by a specific user.

# Heroku Link: 
https://nodeassignmentapi.herokuapp.com/api/v1