const {v4: uuid} = require('uuid')
const users = [];

class User {
    constructor(data) {
        //Checking the type of objects, arrays, and null with typeof all returns 'object'
        //so here we are making sure that the data is an object, NOT an array, and NOT null - meaning it is only an object
        //If the data does not meet those conditions, then the data is set to an empty object
        this._data = typeof data == 'object' && !Array.isArray(data) && data !== null ? data : {};
        this._data._id = uuid()
    }

    save() {
        users.push(this._data)
    }

    static findById(id) {
        const itemIndex = users.findIndex(item => item._id = id)
        if (itemIndex === -1) return null
        
        return users[itemIndex]
    }

    static findAll() {
        return users
    }
}

module.exports = User;