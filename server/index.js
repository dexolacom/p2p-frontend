const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')
app.use(cors())


const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`)

  socket.on('joinRoom', (roomNumber) => {
    socket.join(roomNumber)
    console.log(`User ${socket.id} joined to room ${roomNumber}`)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id)
  })
})

server.listen(3001, () => {
  console.log('Server started')
})