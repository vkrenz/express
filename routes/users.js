const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.render("users/new", {
        fname: "placeholder text"
    })
})

router.post('/', (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push({ firstName: req.body.fname })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log(`Error: User [${req.body.fname}] is not valid.`)
        res.render('users/new', {
            fname: req.body.fname
        })
    }
    res.send("Hi")
    // By default... express cannot access body.
    // See server.js for express.urlencoded middleware.
    console.log(req.body.fname)
})

/** 
 * @see Always make sure to put dynamic routes BELOW any static routes! 
 * */

router.route("/:id")
    .get((req, res) => {
        console.log(`Current User: ${req.user}`)
        res.send(`Get User With ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User With ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`)
    })

const users = [
    { name: 'Victor' },
    { name: 'John' }
]

/** 
 * @see param is a type of middleware inside JS.
 * @see middleware is what runs between the request being sent to your server and the actual response being returned.
 * @see @param next moves onto the next peice of middleware. (.get())
*/
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

// router.get('/:id', (req, res) => {
//     res.send(`Get User With ID ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     res.send(`Update User With ID ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     res.send(`Delete User With ID ${req.params.id}`)
// })

module.exports = router