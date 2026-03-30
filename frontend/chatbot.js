const btn = document.getElementById("chatbot-btn");
const box = document.getElementById("chatbox");

btn.onclick = () => {
  box.classList.toggle("hidden");
};
