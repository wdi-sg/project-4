var socket = io();

// socket.on('connect', function() {
//   socket.emit('adduser', prompt('What is your username?'))
// })

$(function () {
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(` sent :${msg}`));
    window.scrollTo(0, document.body.scrollHeight);
  });
})
