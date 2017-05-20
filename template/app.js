const MyExpress = require('./lib/myExpress')

const port = 30002

let app = MyExpress()


// const login = require('./router/login')
// app.use('/login', login)

app.listen(port, () => {
  console.log(`listen on ${port}`)
})
