const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4041

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const users = [{id: 1, name: "Nikhil", email: "nikhil@mail.com"}]

app.get('/', (req, res) => {
    res.send('Your app is live')
})

app.get('/users', (req, res) => {
    res.json({ok: true, users})
})

app.listen(port, () => {
    console.log(`Your app is live on port:${port}`)
})
