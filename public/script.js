const form = document.getElementById('guestForm');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const messageList = document.getElementById('messageList');

window.addEventListener('load', () => {
  const savedMessages = JSON.parse(localStorage.getItem('guestbookMessages')) || [];
  savedMessages.forEach(msg => addMessageToList(msg.name, msg.message));
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (name && message) {
    addMessageToList(name, message);
    saveMessage(name, message);

    nameInput.value = '';
    messageInput.value = '';
  }
});

function addMessageToList(name, message) {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${name}:</strong> ${message}`;
  messageList.appendChild(li);
}

function saveMessage(name, message) {
  const existing = JSON.parse(localStorage.getItem('guestbookMessages')) || [];
  existing.push({ name, message });
  localStorage.setItem('guestbookMessages', JSON.stringify(existing));
}