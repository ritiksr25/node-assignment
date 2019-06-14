const express = require('express');
const router = express.Router();

//load controller file
const userController = require('../../../controllers/users_controller');

//add user
router.post('/add', userController.addUser);
//update user
router.post('/update/:id', userController.updateUser);
//delete user
router.get('/delete/:id', userController.deleteUser);
//view a user
router.get('/view/:id', userController.view);
//view all users
router.get('/all', userController.allUsers);
//comment on other user
router.post('/comment/:to/:by', userController.comment);
//view comments of a user
router.get('/view-comments/:id', userController.viewComments);

//export router
module.exports = router;
