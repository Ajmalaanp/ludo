const diceBtn = document.getElementById('dice-btn');
const diceResult = document.getElementById('dice-result');

diceBtn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    diceResult.textContent = randomNumber;
});