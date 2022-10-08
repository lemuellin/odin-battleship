import {checkWin} from './checkWin.js';

const gbPlayer = document.querySelector('.gbPlayer');
const gbComputer = document.querySelector('.gbComputer');

function renderPlayerBoard(totalLength, game){
    const singleGrid = new Array(10).fill().map(() => Array(10).fill(null));
    for (let i = 0; i < totalLength; i++){
        for (let j = 0; j < totalLength; j++){
            singleGrid[i][j] = document.createElement('div');
            singleGrid[i][j].classList.add('grid');
    
            if (game.gbPlayer.board[i][j] == null){
                singleGrid[i][j].style.backgroundColor = "rgb(255,255,255)";
            } else if (game.gbPlayer.board[i][j] == 'miss'){
                singleGrid[i][j].style.backgroundColor = "rgb(0,0,0)";
            } else if (game.gbPlayer.board[i][j][3] == 'SUNK'){
                singleGrid[i][j].style.backgroundColor = "rgb(135,206,250)";
                singleGrid[i][j].textContent = "X";
            } else if (game.gbPlayer.board[i][j][2] == 'hit'){
                singleGrid[i][j].style.backgroundColor = "rgb(255,0,0)";
            } else {
                singleGrid[i][j].style.backgroundColor = "rgb(0,128,0)";
            }
    
            gbPlayer.appendChild(singleGrid[i][j]);
        }
    }
}

function renderComputerBoard(totalLength, game){
    const singleGrid = new Array(10).fill().map(() => Array(10).fill(null));
    for (let i = 0; i < totalLength; i++){
        for (let j = 0; j < totalLength; j++){
            singleGrid[i][j] = document.createElement('div');
            singleGrid[i][j].classList.add('grid');

            if (game.gbComputer.board[i][j] == null){
                singleGrid[i][j].style.backgroundColor = "rgb(255,255,255)";
            } else if (game.gbComputer.board[i][j] == 'miss'){
                singleGrid[i][j].style.backgroundColor = "rgb(0,0,0)";
            } else if (game.gbComputer.board[i][j][3] == 'SUNK'){
                singleGrid[i][j].style.backgroundColor = "rgb(135,206,250)";
                singleGrid[i][j].textContent = "X";
            } else if (game.gbComputer.board[i][j][2] == 'hit'){
                singleGrid[i][j].style.backgroundColor = "rgb(255,0,0)";
            } else {
                singleGrid[i][j].style.backgroundColor = "rgb(255,255,255)";
            }
    
            gbComputer.appendChild(singleGrid[i][j]);
            
            singleGrid[i][j].addEventListener('click', () => {
                removeAllChild(gbPlayer);
                removeAllChild(gbComputer);
                game.attack(i, j);
                renderPlayerBoard(totalLength, game);
                renderComputerBoard(totalLength, game);
                checkWin(game);
            });
        }
    }
}

function removeAllChild (parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

export{renderPlayerBoard, renderComputerBoard, removeAllChild};