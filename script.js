const countBtn = document.getElementById('countBtn');
const countDisplay = document.getElementById('count');

let count = 0;


countBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});