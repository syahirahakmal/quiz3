const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)
  
    res.send('login')
  })

app.get('/', (req, res) => {
    res.send('Hello UTeM')
  })

app.get('/bye', (req, res) => {
    res.send('bye ')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})