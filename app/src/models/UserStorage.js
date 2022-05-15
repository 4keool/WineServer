"use strict"

class UserStorage {
    static #users ={
        id: ["1", "2", "rys"],
        psword: ["1", "2", "1234"],
        name: ["11", "22", "ryu"],
    }

    static getUsers(...fields){
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field]
            }
            return newUsers
        }, {})
        return newUsers
    }
}

module.exports = UserStorage