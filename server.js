/**
 * @version 1.1
 * @see {@link https://www.youtube.com/watch?v=SccSCuHhOw0}
 */

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log("Hello World!");
    res.render('index', {
        text: 'World!'
    })
})

const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(8080)