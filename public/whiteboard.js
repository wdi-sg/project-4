'use strict';

(function() {

  var socket = io();
  var canvas = document.getElementsByClassName('whiteboard')[0];
  var colors = document.getElementsByClassName('color');
  var sidebar = document.getElementsByClassName('sidebar')
  var context = canvas.getContext('2d');

  var guessList = ['HOUSE', 'SUN', 'HELICOPTER']
  var oppPlayer = ''
  var currentPlayerName = ''

  var timer = 60
  var points = 0


  var current = {
    color: 'black'
  };
  var drawing = false;

  $('.usernameInput').keydown(function (e) {
    console.log(e)
      if (e.keyCode === 13) {
        var username = $('.usernameInput').val()
        currentPlayerName = username
        console.log(username)
        socket.emit('username', username)
        $('.username').fadeOut()
        $('.form').empty()
      }
    })

  $('.usernameTimer').append(`<h1 class="points">${points}</h1>`)

    socket.on('username', function (username) {
      oppPlayer = username
      if(oppPlayer) {

        $('.usernameTimer').append(`<h3>You are playing with ${oppPlayer}</h3>`)
      }

    })

  socket.on('wait for player', function () {
    $('.sidebar').append('<div class="secondPlayerMsg" ><h1 >Waiting for second player to join room</h1></div>')
  })

  socket.on('second player arrived', function () {
    $('.secondPlayerMsg').empty()
    $('.usernameTimer').append(`<h2 class="timer"></h2>`)
    $('.timer').text(timer)
    socket.emit('username', currentPlayerName)

    var timerFn = setInterval(function() {
      timer--
      $('.timer').text(timer)
      console.log(".")
      if(timer < 0 || guessList.length === 0) {
       clearInterval(timerFn)
       $('body').empty()
       $('body').append('<h1>GAME OVER</h1>')
       $('body').append(`CONGRATZ ${oppPlayer} and ${currentPlayerName}, you got ${points} points! `)
       $('body').append('<a href="/whiteboard">New Game</a>')
      }

    }, 1000)
  })

  socket.on('turn', function(turn) {
    if(turn) {
      console.log(timer)
      canvas.addEventListener('mousedown', onMouseDown, false);
      canvas.addEventListener('mouseup', onMouseUp, false);
      canvas.addEventListener('mouseout', onMouseUp, false);
      canvas.addEventListener('mousemove', throttle(onMouseMove, 10), false);
      $('.clearCanvas').on('click', function () {
        context.clearRect(0, 0, canvas.width, canvas.height)
        socket.emit('clear canvas')
      })

      $('.sidebar').empty()
      // $('.points').empty()
      $('.sidebar').append($(`<p> your turn  to draw</p>`))
      $('.sidebar').append($(`<p>DRAW: ${guessList[0]}</p>`))
      // $('.sidebar').append(`<div class="points"><h1>${points}</h3></div>`)



        socket.on('connect', function() {

        })

      if (guessList.length === 0) {
        $('body').empty()
        $('body').append('<h1>GAME OVER</h1>')
        $('body').append(`CONGRATZ ${oppPlayer} and ${currentPlayerName}, you got ${points} points! `)
        $('body').append('<a href="/whiteboard">New Game</a>')
      }
    } else {
      canvas.removeEventListener('mousedown', onMouseDown, false);
      canvas.removeEventListener('mouseup', onMouseUp, false);
      canvas.removeEventListener('mouseout', onMouseUp, false);
      canvas.removeEventListener('mousemove', throttle(onMouseMove, 10), false);
      $('.clearCanvas').off()


      $('.sidebar').empty()
      $('.sidebar').append($(`<p> your turn  to guess</p>`))
      // $('.sidebar').append($(`<form class="form"></form>`)) // do we need a form?
      $('.sidebar').append($(`<input id='guessedAns' type="text"><button class='submitBtn'>Submit</button>`))
      $('.sidebar').append($(`<div class="playerGuessedAns"></div>`))
      // $('.sidebar').append(`<div class="points"><h1>${points}</h3></div>`)

      $('#guessedAns').keyup(function () {
        var guessedAns = $('#guessedAns').val()
        socket.emit('guessedAns', guessedAns)
      })

      $('.submitBtn').on('click', function(e) {
        e.preventDefault()

        socket.emit('guessedAns', '') // to clear guessed field for opp player

        var guessedAns = $('#guessedAns').val().toUpperCase()
        $('#guessedAns').val('')
        if (guessedAns === guessList[0]) {
          $('.sidebar').empty()
          $('.sidebar').append('<h1>GUESSED CORRECTLY</H1>')
          $('.sidebar').append('<button class="nextRoundBtn">Proceed to next round</button>')
          points++
          $('.points').text(points)
          socket.emit('correct answer')
          guessList.splice(0,1)
          if (guessList.length === 0) {
            socket.emit('change turn', "dummy variable") // Did not have the need to send anything to server
          }


          $('.nextRoundBtn').on('click', function (e) {
            e.preventDefault
            socket.emit('change turn', "dummy variable") // Did not have the need to send anything to server
            console.log(guessList)

            context.clearRect(0, 0, canvas.width, canvas.height)
          })

        } else {
          console.log(guessedAns)
          alert('try again')

        }

      })

      if (guessList.length === 0 || timer < 0) {
        $('body').empty()
        $('body').append('<h1>GAME OVER</h1>')
        $('body').append(`CONGRATZ ${oppPlayer} and ${currentPlayerName}, you got ${points} points! `)
        $('body').append('<a href="/whiteboard">New Game</a>')
      }

    }
  })

  for (var i = 0; i < colors.length; i++){
    colors[i].addEventListener('click', onColorUpdate, false);
  }



  socket.on('clear canvas', function () {
    context.clearRect(0, 0, canvas.width, canvas.height)
  })

  socket.on('drawing', onDrawingEvent);

  socket.on('guessedAns', function(guessedAns) {
    $('.playerGuessedAns').remove()
    $('.sidebar').append($(`<div class="playerGuessedAns"></div>`))
    $('.playerGuessedAns').append($(`<p>${guessedAns}</p>`))
  })

  socket.on('changeTurnProcess', function () {
    // setTimeout(function () {

      guessList.splice(0,1)
      context.clearRect(0, 0, canvas.width, canvas.height)

      socket.emit('changeTurnProcess', 'dummy variable')
    // }, 5000)
  })

  socket.on('correct answer', function () {

    $('.sidebar').empty()
    $('.sidebar').append('<h1>player guessed correctly</h1>')
    $('.sidebar').append('<p>Waiting for player 2 to be ready to proceed to the next round</p>')
    points++
    $('.points').text(points)
    // $('.body').append('<img src="./colorfulLoader.gif" height ="100%" width ="75%">')
  })



  window.addEventListener('resize', onResize, false);
  onResize();


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

  function onMouseDown(e){
    drawing = true;
    current.x = e.clientX;
    current.y = e.clientY;
  }

  function onMouseUp(e){
    if (!drawing) { return; }
    drawing = false;
    drawLine(current.x, current.y, e.clientX, e.clientY, current.color, true);
  }

  function onMouseMove(e){
    if (!drawing) { return; }
    drawLine(current.x, current.y, e.clientX, e.clientY, current.color, true);
    current.x = e.clientX;
    current.y = e.clientY;
  }

  function onColorUpdate(e){
    current.color = e.target.className.split(' ')[1];
  }

  // limit the number of events per second
  function throttle(callback, delay) {
    var previousCall = new Date().getTime();
    return function() {
      var time = new Date().getTime();

      if ((time - previousCall) >= delay) {
        previousCall = time;
        callback.apply(null, arguments);
      }
    };
  }

  function onDrawingEvent(data){
    var w = canvas.width;
    var h = canvas.height;
    drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
  }

  // make the canvas fill its parent
  function onResize() {
    canvas.width = window.innerWidth * 0.75;
    canvas.height = window.innerHeight;
  }

})();
