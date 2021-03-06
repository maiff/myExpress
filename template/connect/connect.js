// 导入mongoose库
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
// 获得db对象
let db = mongoose.connection

let url = '{{url}}'

mongoose.connect(url)

db.on('error', () => logger.error('connection error:'))
db.on('open', () => {
  console.log('db open')
})

db.on('connected', () => {
  console.log('db connected')
})

db.on('disconnected', () => {
  console.log('db disconnected')
})


module.exports = mongoose