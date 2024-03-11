const socket = io('http://localhost:3000')

socket.emit('new-user')
socket.on('user-connected', ()=> {
  console.log("socket io connections established")
})

function sendmessage(temp){
    var ele = "message"+temp;
    var ind = Number(temp)
    console.log(typeof(pending))

    var msg = document.getElementById(ele).value;
    console.log(msg)
  socket.emit("send-message",msg)
}

socket.on('recieve-message', (msg) => {
  console.log(msg.message)
  alert(msg.message)
})
var returnmessage = "";
socket.on('recieve-chat-message', (msg) => {
  console.log("The message is "+msg.message)
  // alert(msg.message)
  returnmessage = msg.message;
  loaderContainer.style.display = "none";
  document.querySelector(".loader").style.display = "block";
  addMessage(returnmessage);
  // addMessage(botResponse);
})

// socket.on('user-connected', (nam,users)=> {
//     // const users = users
//     userCount.innerHTML = users;
//     appendMessage(`${nam} connected`)
//     if(users>=2){
//       alert("You can start the game")
//       document.getElementById('wrapper').style.display = ""
//     }
//   })
  



const rows = document.querySelectorAll('.clickable-row');

rows.forEach(row => {
    row.addEventListener('click', () => {
        const hiddenRow = row.nextElementSibling;
        hiddenRow.classList.toggle('hidden-row');
    });
});

// function toggleDiv() {
//   const selectedOption = document.getElementById("selectOption").value;
//   const division1 = document.getElementById("division1");
//   const division2 = document.getElementById("division2");

//   division1.style.display = "none";
//   division2.style.display = "none";

//   if (selectedOption === "division1") {
//     division1.style.display = "block";
//   } else if (selectedOption === "division2") {
//     division2.style.display = "block";
//   }
// }
var chartType = "monthly"
function toggleDiv(temp) {
  console.log(temp)
  // const selectedOption = document.getElementById("selectOption").value;
  const division1 = document.getElementById("division1");
  const division2 = document.getElementById("division2");
  const division3 = document.getElementById('division3');
  const division4 = document.getElementById('division4');
  division1.style.display = "none";
  division2.style.display = "none";
  division3.style.display = "none";
  division4.style.display = "none";
  if (temp === "monthly") {
    division1.style.display = "block";
  } else if (temp === "weekly") {
    division2.style.display = "block";
  } else if(temp === "category"){
    division3.style.display = "block";
  }else{
    division4.style.display = "block";
  }
  chartType = temp;
}






// test chestunna




const chatContainer = document.getElementById("chat-container");
const loaderContainer = document.getElementById("loader-container");
const userInput = document.getElementById("user-input");

function addMessage(message, isUserMessage = false) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message";
    if (isUserMessage) {
        messageDiv.className += " user-message";
    }
    messageDiv.textContent = message;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Auto-scroll to the latest message
}

function randomChatResponse() {
    const responses = [
        "Hello!",
        "How can I help you?",
        "What's your favorite color?",
        "Tell me more...",
        "That's interesting!",
        "I'm just a random chat bot.",
        "Nice to meet you!",
    ];
    // socket.on('recieve-chat-message', (msg) => {
    //   console.log(msg.message)
    //   return msg.message;
    // })
    return returnmessage;
    // return responses[Math.floor(Math.random() * responses.length)];
}

// function simulateBotResponseAsync() {
//     return new Promise((resolve) => {
//         loaderContainer.style.display = "flex"; // Show loading spinner
//         setTimeout(() => {
//             loaderContainer.style.display = "none"; // Hide loading spinner
//             const botResponse = randomChatResponse();
//             addMessage(botResponse);
//             resolve();
//         }, 1000); // Simulate 10 seconds of loading
//     });
// }

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") {
        return;
    }
    addMessage(userMessage, true);
    userInput.value = "";

    // Simulate a bot response
    // simulateBotResponseAsync();

      socket.emit("send-chat-message",{userMessage,chartType})
      document.querySelector(".loader").style.display = "block";
      loaderContainer.style.display = "flex";
}

// socket.on('recieve-chat-message', (msg) => {
//   console.log(msg.message)
//   alert(msg.message)
// })

userInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Initial bot greeting
setTimeout(async () => {
    const botGreeting = randomChatResponse();
    addMessage(botGreeting);
}, 1000);


function complaintAccepted(complaintId){
  console.log(complaintId);
  socket.emit("complaint-resolved",complaintId)
  alert("issue with complaint id " + complaintId + "is completed")
}