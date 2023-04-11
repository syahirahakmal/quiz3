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
  

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


app.post('/login', (req, res) => {
    console.log(req.body)

    let result = login(req.body.username, req.body.password)

    res.send(result)
  })

  app.post('/register',(req,res) => {

    let result = register(req.body.username, req.body.password, req.body.email,req.body.name)

    res.send(result)
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