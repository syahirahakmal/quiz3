let dBusers=[
  {
  
      username: "soo",
      password: "12345",
      name: "soo",
      email: "soo@utem.edu.my"
  },
  {
      username: "syahirah",
      password: "123@abc",
      name: "syahirah",
      email: "syahirahsaupi3007@gmail.com"
  },
  {
      username: "amir",
      password: "amircute",
      name: "amir afzal",
      email: "amirwin966@gmail.com"
  },
  ]
  
  function register(RegUsername,RegPassword,RegName, RegEmail, RegPhonenum){
  
      dBusers.push({
  
          username: RegUsername,
          password: RegPassword,
          email: RegEmail,
          name: RegName,
          phonenumber: RegPhonenum
      })
  }

  function generateToken(userData){
    const token = jwt.sign(
      userData, '123@abc',
      { expiresIn :60}
    );
    return token
  }

  function verifyToken(req, res, next){
    let header = req.headers.authorization
    console.log(header)

    let token = header.split(' ')[1]

    jwt.verify(token, '123@abc', function(err, decoded){
      if (err){
        res.send("Invalid Token")
      }

      req.user = decoded
      next()
    });
  }
  

const express = require('express')
const app = express()
const port = 3000
const jwt = require('jsonwebtoken');

app.use(express.json())


app.post('/login', (req, res) => {
    console.log(req.body)

    let result = login(req.body.username, req.body.password)

    let token = generateToken(result)

    res.send(token)
  })

  app.post('/register',(req,res) => {

    let result = register(req.body.username, req.body.password, req.body.email,req.body.name)

    res.send(result)
  })

app.get('/', (req, res) => {
    res.send('Hello UTeM')
  })

app.get('/bye',verifyToken, (req, res, next) => {
    res.send('bye ')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function login(reqUsername, reqPassword){
  
  //let matchUser= dBusers.find( user => user.username == reqUsername)  //   => means 
  let matchUser= dBusers.find (
      
      x => x.username == reqUsername)


  if(!matchUser) return "User not found !"
  if(matchUser.password==reqPassword){
      return matchUser
  } 

  else {
      return "Invalid password"
  }
}