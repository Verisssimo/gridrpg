const verifyButton = document.getElementById('verifyButton');
const returnButton = document.getElementById('returnButton');
const result = document.getElementById('result');
const message = document.getElementById('message');
const countdown = document.getElementById('countdown');
const nameInput = document.getElementById('nameInput');

verifyButton.addEventListener('click', () => {
  const name = nameInput.value.toLowerCase();
  let nextFolgaDate;
  
  if (name === 'carol') {
    nextFolgaDate = new Date('2023-08-08T08:30:00');
    message.textContent = 'Próxima folga: Carol';
  } else if (name === 'gabriel') {
    nextFolgaDate = new Date('2023-08-12T08:30:00');
    message.textContent = 'Próxima folga: Gabriel';
  } else {
    message.textContent = 'Credencial inválida';
    return;
  }

  const now = new Date();
  const timeDifference = nextFolgaDate - now;

  countdown.textContent = 'Contagem regressiva: ' + formatTime(timeDifference);
  result.classList.remove('hidden');
  returnButton.classList.remove('hidden');
});

returnButton.addEventListener('click', () => {
  result.classList.add('hidden');
  returnButton.classList.add('hidden');
  nameInput.value = '';
});

function formatTime(ms) {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
