function checkWin (game){
    if (game.gbComputer.allSunk()){
        let winner = 'YOU';
        displayResult(winner);
    } else if (game.gbPlayer.allSunk()){
        let winner = 'General Robot';
        displayResult(winner);
    }
}

// Display Result on Result Page
const resultPage = document.getElementById('resultPage');
const mainPage = document.getElementById('mainPage');   

function displayResult (winner){
    resultPage.style.display = 'flex';
    mainPage.style.display = 'none';
    const win = document.querySelector('.winner');
    win.textContent = winner;
}

// restart button
const restart = document.querySelector('.restart');
restart.addEventListener('click', () => {
    resultPage.style.display = 'none';
    // clear board
    // reset gameboard, player... data
    window.location.reload();
});

export {checkWin};