const socket = io('http://localhost:3000')

socket.emit('new-user')
socket.on('user-connected', ()=> {
  // const users = users
  console.log("socket io connections established")
})

function sendmessage(){
    var msg = document.getElementById("message").value;
  socket.emit("send-message",msg)
}

socket.on('recieve-message', (msg) => {
  console.log(msg)
  alert(msg.message)
})


