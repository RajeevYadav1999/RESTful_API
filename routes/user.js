const express = require('express');

const router = express.Router();
const {handleGetAllusers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser} = require("../controller/user")


//? routes

router.get('/', handleGetAllusers);

router.post('/', handleCreateNewUser)  //?create a user


router.route('/:id').get(handleGetUserById)    //created route to write same routes function in same place
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)

module.exports = router;