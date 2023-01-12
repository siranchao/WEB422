
//@controller: fetch all user data
//@route GET /api/users
const allUsers = (req, res) => {
    res.status(200).json({
        message: "fetching all user data",
        data: null
    })
}


//@controller: fetch one user data by id
//@route GET /api/users/id
const getUserById = (req, res) => {
    const id = req.params.id
    res.status(200).json({
        message: "fetching user data by id",
        data: id,
    })
}


//@controller: register a new user
//@route POST /api/users/register
const registerUser = (req, res) => {
    const newUser = {
        "id": req.body.id,
        "name": req.body.name,
        "username": req.body.username,
        "email": req.body.email
    }

    //newUsers.push(newUser)

    res.status(200).json({
        message: "new user added",
        data: newUser
    })
}


module.exports = { allUsers, getUserById, registerUser }