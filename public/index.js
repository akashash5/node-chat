
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
    var li=jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit',function(e){
    e.preventDefault();
    socket.emit('createMessage',{
        from:'User',
        text:jQuery('[name=message]').val()
    },function(){
        
    });
});