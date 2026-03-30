const btn = document.getElementById("chatbot-btn");
const box = document.getElementById("chatbox");
const input = document.getElementById("userInput");
const messages = document.getElementById("messages");

// Toggle chatbox
btn.onclick = () => {
  box.classList.toggle("hidden");
};

// Send message on Enter
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let userText = input.value;

    addMessage("You: " + userText);

    // 🔥 Call backend (async)
    getReply(userText).then((reply) => {
      addMessage("Bot: " + reply);
    });

    input.value = "";
  }
});

// Add message to chat
function addMessage(text) {
  let msg = document.createElement("div");
  msg.innerText = text;
  messages.appendChild(msg);
}

// 🔥 Backend API call
async function getReply(text) {
  let res = await fetch("http://localhost:5000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: text }),
  });

  let data = await res.json();
  return data.reply;
}