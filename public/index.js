
    var socket=io();

    socket.on('connect',function (){
      console.log('connect to server');
    });

    socket.on('disconnect',function (){
      console.log('disconnected from server');
    });
