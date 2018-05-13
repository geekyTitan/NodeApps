var socket = io.connect('http://localhost:3000');

var btn = document.getElementById('send'),
    msg = document.getElementById('message'),
    hdl = document.getElementById('handle'),
    out = document.getElementById('output'),
    fd = document.getElementById('feedback');


btn.addEventListener('click' , function() {
    socket.emit('chat',{
      message : msg.value,
      handle : hdl.value
    });
    message.value = '';
})

socket.on('chat',function(data) {
   fd.innerHTML = "";
    out.innerHTML += '<p><strong>'+data.handle+'</strong> : '+data.message +'</p> ';
})
msg.addEventListener('keypress',function() {
    socket.emit('typing', hdl.value);
})

socket.on('typing',function(data){
   fd.innerHTML = '<p><em>'+ data+': is typing a message</em></p>';
})
