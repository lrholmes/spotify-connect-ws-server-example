import express from 'express'
import bodyParser from 'body-parser'
import socketio from 'socket.io'
import connectSocket from 'spotify-connect-ws'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.redirect('https://spotify-connect-ws.netlify.com')
})

const server = app.listen(process.env.PORT || 3002)

const io = socketio(server)

io.of('connect').on('connection', connectSocket)

export default server
