const User = require('../models/User');

const getAllUsers = (req, res) => {
    try {
        const users = User.findAll()
        res.status(200).json(users)
    } catch (error) {
        console.error('Error:', error)
        res.status(500).send('An error occured while getting all users. Please try again later.')
    }
}

const createUser = (req, res) => {
    const {username, email, hobbies} = req.body;
    try {
        const newUser = new User({
            username,
            email,
            hobbies
        })

        newUser.save();
        res.status(200).send('Created user')
    } catch (error) {
        console.error('Error creating user:', error)
        res.status(500).send('An error occured while creating a user. Please try again later.')
    }
}

const findUserById = (req, res) => {
    const userId = req.params.id;

    if (!userId) {
        res.status(400).send('userId must be provided')
    }

    try {
        const user = User.findById(userId)

        if (user == null) {
            return res.status(404).send('User not found')
        }

        res.status(200).json(user)
    } catch (error) {
        console.error('An error occured while finding a user by their id:', error)
        res.status(500).send('An error occured while finding user by their id. Please try again later.')
    }
}

module.exports = {
    getAllUsers,
    createUser,
    findUserById
}