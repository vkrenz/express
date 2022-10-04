const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.send('User New Form')
})

router.post('/', (req, res) => {
    res.send('Create New User')
})

/** 
 * @see Always make sure to put dynamic routes BELOW any static routes! 
 * */

router.route('/id')
    .get((req, res) => {

    })
    .put((req, res) => {

    })
    .delete((req, res) => {

    })

/** 
 * @see param is a type of middleware inside JS.
 * @see middleware is what runs between the request being sent to your server and the actual response being returned.
 * @see @param next moves onto the next peice of middleware.
*/

router.param('id', (req, res, next, id) => {

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