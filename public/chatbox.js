// const socket = io('http://localhost:3000')

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
    return responses[Math.floor(Math.random() * responses.length)];
}

function simulateBotResponse() {
    loaderContainer.style.display = "flex"; // Show loading spinner
    setTimeout(function () {
        loaderContainer.style.display = "none"; // Hide loading spinner
        const botResponse = randomChatResponse();
        addMessage(botResponse);
    }, 10000); // Simulate 10 seconds of loading
}

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") {
        return;
    }
    addMessage(userMessage, true);
    userInput.value = "";

    // Simulate a bot response
    simulateBotResponse();
    
      
    //   socket.emit("send-chat-message",userMessage)
    
}

userInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Initial bot greeting
setTimeout(function () {
    const botGreeting = randomChatResponse();
    addMessage(botGreeting);
}, 1000);
