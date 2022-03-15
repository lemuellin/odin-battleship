import {displayResult} from './displayResult';

function checkWin (game){
    if (game.gbComputer.allSunk()){
        let winner = 'YOU';
        displayResult(winner);
    } else if (game.gbPlayer.allSunk()){
        let winner = 'General Robot';
        displayResult(winner);
    }
}

export {checkWin};