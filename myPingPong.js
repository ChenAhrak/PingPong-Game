const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetBtn = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playTo');
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

//commit

function p1Points() {
    if (!isGameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
    }
    if (p1Score === winningScore) {
        p1Display.classList.add('has-text-success');
        p2Display.classList.add('has-text-danger');
        // p1Display.style.color = 'green';
        // p2Display.style.color = 'red';
        isGameOver = true;
        p1Button.disabled = true;
        p2Button.disabled = true;
    }


}
function p2Points() {
    if (!isGameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
    }
    if (p2Score === winningScore) {
        p2Display.classList.add('has-text-success');
        p1Display.classList.add('has-text-danger');
        // p2Display.style.color = 'green';
        // p1Display.style.color = 'red';
        isGameOver = true;
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
}

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    isGameOver = false;
    p1Button.disabled = false;;
    p2Button.disabled = false;
}

function limit() {
    reset();
    winningScore = parseInt(winningScoreSelect.value);

}

winningScoreSelect.addEventListener('change', limit);
p1Button.addEventListener('click', p1Points);
p2Button.addEventListener('click', p2Points);
resetBtn.addEventListener('click', reset);
