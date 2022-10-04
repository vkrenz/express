/**
 * @version 1.2
 * @date 3/10/2022
 * @see {@link https://www.youtube.com/watch?v=SccSCuHhOw0}
 */

const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(logger)

app.get('/', (req, res) => {
    console.log("Hello World!")
    res.render('index', {
        text: 'World!'
    })
})

const userRouter = require('./routes/users')
app.use('/users', userRouter)

/**
 * @function logger
 * @description middleware function
 * @see all middleware take req, res, next.
 */
 function logger(req, res, next) {
    console.log(`Current URL: ${req.originalUrl}`)
    next()
}

app.listen(8080)