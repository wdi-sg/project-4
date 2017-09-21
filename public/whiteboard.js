'use strict';



(function() {

  var socket = io();
  var canvas = document.getElementsByClassName('whiteboard')[0];
  var colors = document.getElementsByClassName('color');
  var sidebar = document.getElementsByClassName('sidebar')
  var context = canvas.getContext('2d');

  var guessList = ['SHOE','CAMERA','BALL','FAN','PLANE','SINGAPORE','FENCE','CHICKEN','HOUSE', 'SUN', 'HELICOPTER']
  var oppPlayer = ''
  var currentPlayerName = ''
  var oppPlayerDisconnect = false

  var timer = 60
  var points = 0
  var timerFn;


  var current = {
    color: 'black'
  };
  var drawing = false;

  socket.on('turn', function(turn) {
    if(turn) {
      console.log(timer)
      // alert("true" + turn)
      canvas.addEventListener('mousedown', onMouseDown, false);
      canvas.addEventListener('mouseup', onMouseUp, false);
      canvas.addEventListener('mouseout', onMouseUp, false);
      canvas.addEventListener('mousemove', throttle(onMouseMove, 10), false);
      $('.clearCanvas').on('click', function () {
        context.clearRect(0, 0, canvas.width, canvas.height)
        socket.emit('clear canvas')
      })
      $('.colors').show()

      $('.sidebar').empty()
      // $('.points').empty()

      $('.sidebar').append($(`<p> Your turn  to draw</p>`))
      $('.sidebar').append($(`<p>DRAW:<br> ${guessList[0]}</p>`))
      // $('.sidebar').append(`<div class="points"><h1>${points}</h3></div>`)





      if (guessList.length === 0) {
        $('body').empty()
        $('body').append('<div class="gameover"></div>')
        $('.gameover').append('<h1>GAME OVER</h1>')
        $('.gameover').append(`<p>CONGRAGULATIONS <br> ${oppPlayer} and ${currentPlayerName}<br>you got ${points} points! </p>`)
        $('.gameover').append('<a href="/whiteboard">New Game</a>')
      }
    } else {

      // alert("false" + turn)
      canvas.removeEventListener('mousedown', onMouseDown, false);
      canvas.removeEventListener('mouseup', onMouseUp, false);
      canvas.removeEventListener('mouseout', onMouseUp, false);
      canvas.removeEventListener('mousemove', throttle(onMouseMove, 10), false);
      $('.clearCanvas').off()
      $('.colors').hide()


      $('.sidebar').empty()
      $('.sidebar').append($(`<p> Your turn  to guess</p>`))
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
          $('.points').text("POINTS:" + points)
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
        $('body').append('<div class="gameover"></div>')
        $('.gameover').append('<h1>GAME OVER</h1>')
        $('.gameover').append(`<p>CONGRAGULATIONS <br> ${oppPlayer} and ${currentPlayerName}<br>you got ${points} points! </p>`)
        $('.gameover').append('<a href="/whiteboard">New Game</a>')
      }

    }
    socket.on('wait for player', function () {
      console.log(turn)
      $('.sidebar').append('<div class="secondPlayerMsg" ><p >Waiting for second player to join room</p></div>')
      $('.sidebar').append('<div class="loader"><img src="loading.gif" alt="finding" height="42" width="42"></div>')
    })

    socket.on('second player arrived', function () {
      console.log(turn)
      $('.secondPlayerMsg').empty()
      $('.loader').empty()
      $('.usernameTimer').append(`<h2 class="timer"></h2>`)
      $('.timer').text(timer)
      socket.emit('username', currentPlayerName)
      // $('.usernameTimer').height('70%')
      var timerFn = setInterval(function() {
        timer--
        $('.timer').text(timer)
        console.log(".")
        if(timer < 0 || guessList.length === 0) {
         clearInterval(timerFn)
         $('body').empty()
         $('body').append('<div class="gameover"></div>')
         $('.gameover').append('<h1>GAME OVER</h1>')
         $('.gameover').append(`<p>CONGRAGULATIONS <br> ${oppPlayer} and ${currentPlayerName}<br>you got ${points} points! </p>`)
         $('.gameover').append('<a href="/whiteboard">New Game</a>')
        }

        if (oppPlayerDisconnect) {
          clearInterval(timerFn)
        }

      }, 1000)
    })
  })
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

  $('.usernameTimer').append(`<h2 class="points">POINTS:${points}</h2>`)

    socket.on('username', function (username) {
      oppPlayer = username
      if(oppPlayer) {
        $('.usernameTimer').append(`<p>You are playing with ${oppPlayer}</p>`)
      }

    })



  socket.on('player disconnect', function() {
    if (guessList.length !== 0 && timer >= 0 ) {
      oppPlayerDisconnect = true
      $('body').empty()
      $('body').append('<div class="disconnect"></div>')
      $('.disconnect').append(`<h1>Unfortunately ${oppPlayer} has disconnected. </h1>`)
      $('.disconnect').append('<a href="/whiteboard">New Game</a>')

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
    $('.playerGuessedAns').append($(`<p>See what ${oppPlayer} is guessing: <br>${guessedAns}</p>`))
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
      $('.sidebar').append('<div class="loader"><img src="loading.gif" alt="finding" height="42" width="42"></div>')
    points++
    $('.points').text("POINTS:" + points)
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
