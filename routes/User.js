const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    createUser,
    findUserById
} = require('../controllers/User');

router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/:id', findUserById)

module.exports = router;