# QUIKDRAW



## About

Quikdraw is an easy-to-play game where you would take turns with your matched partner to guess what the other is drawing. The more answers you get right, the more points you get!

### Socket.io

Socket.io was used in this project to allow a multiplayer interface on QUIKDRAW. Socket.io was crucial in allowing me to enable a simultaneous connection between the client and server.


```
var rooms = []
var roomNum = 1

io.on('connection', function(socket){
  // console.log(socket.id, "user connected")
  // socket.on('adduser', function (username) {
    users.push(socket.id)
    // console.log(rooms.length)

    if(rooms.length === 0 ) {
    rooms.push(socket.id)
    socket.room = "room" + roomNum
    socket.turn = true
    console.log(socket.id + " " + socket.turn)
    socket.join("room" + roomNum)
    io.of('/').adapter.clients([socket.room], (err, clients) => {

  } else if (rooms.length % 2 === 1) {
    rooms.push(socket.id)

    socket.room = "room" + roomNum
    socket.join("room" + roomNum)

    io.of('/').adapter.clients([socket.room], (err, clients) => {
      console.log(clients.length)
      if (clients.length === 2) {
        socket.turn = false
        console.log(socket.id + " " + socket.turn + "line 57")
      } else if(clients.length === 1) {
        socket.turn = true
        console.log(socket.id + " " + socket.turn + " line 61")
        rooms.pop()

      }

    })
  } else if (rooms.length % 2 === 0) {
    socket.turn = true

    roomNum ++
    socket.room = "room" + roomNum
    rooms.push(socket.id)
    socket.join("room" + roomNum)
    io.of('/').adapter.clients([socket.room], (err, clients) => {
    })
  }
```

Each player who establishes a connection with the server would have his unique socket ID pushed into the rooms array. Each odd player would be the person who draws first while each even player would be the matching partner who would get to guess.

If a person establishes a connection and realizes that he is an even player but at the same time in a room with only one person, I would then ensure that his turn is turned back to true while at the same time reducing the length of the rooms arrayby one to return the room matching algorithm back to normal.

Furthermore, when the browser is refreshed, a player loses connection and would then have to connect to the server again losing his current game.


## Canvas

Canvas was key behind the whiteboard in QUIKDRAW.

The function which draws lines on the canvas was Drawline.

A key to take note was when emitting, we divide the coordinates by the local player's whiteboard width and height so that the remote player would receive the coordinates per unit of height and width. Before drawing on the whiteboard, the remote player would then have to mulitply the per unit coordinates by their own whiteboard's width and height. This ensures that varying screen size does not matter when drawing on the whiteboard.


```
function drawLine(x0, y0, x1, y1, color, emit){
  context.beginPath();
  context.moveTo(x0, y0);
  context.lineTo(x1, y1);
  context.strokeStyle = color;
  if (color === "white") {
    context.lineWidth = 20
  } else{
    context.lineWidth = 2;
  }
  context.stroke();
  context.closePath();

  if (!emit) { return; }
  var w = canvas.width;
  var h = canvas.height;

  socket.emit('drawing', {
    x0: x0 / w,
    y0: y0 / h,
    x1: x1 / w,
    y1: y1 / h,
    color: color
  });
}
```

## Built with

* Node.js
* Express
* Socket.io
* Canvas
* HTML, CSS & Javascript
