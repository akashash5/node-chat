
    var socket=io();

    socket.on('connect',function (){
      console.log('connect to server');

     //socket.emit('createMessage',{ from:"hsaka",text:"hello"});
    });

    socket.on('disconnect',function (){
      console.log('disconnected from server');
    });
socket.on('newMessage',function(message){
    console.log('new message');
    console.log(message);
});