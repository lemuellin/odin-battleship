const popup = document.getElementById('popup');   

function displayResult (winner){
    popup.style.display = 'flex';
    const win = document.querySelector('.winner');
    win.textContent = winner;
}

const restart = document.querySelector('.restart');
restart.addEventListener('click', () => {
    popup.style.display = 'none';
    // clear board
    // reset gameboard, player... data
    window.location.reload();
});

export {displayResult};