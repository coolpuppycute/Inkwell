async function sendMessage() {
  const input = document.getElementById("msg");

  await fetch("/api/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: "Logan",
      text: input.value
    })
  });

  input.value = "";
  loadMessages();
}

async function loadMessages() {
  const res = await fetch("/api/messages");
  const data = await res.json();

  const chat = document.getElementById("chat");
  chat.innerHTML = "";

  data.forEach(m => {
    const div = document.createElement("div");
    div.textContent = `${m.user}: ${m.text}`;
    chat.appendChild(div);
  });
}

loadMessages();