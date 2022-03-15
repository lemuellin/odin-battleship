const Gameboard = require('./Gameboard');

const Player = () => {
    const gbPlayer = Gameboard();
    const gbComputer = Gameboard();

    const attack = (x, y) => {
        if (gbComputer.board[x][y] == null || (gbComputer.board[x][y] != null && gbComputer.board[x][y][2] != 'hit' && gbComputer.board[x][y] != 'miss')){
            gbComputer.receiveAttack(x, y);

            while(true){
                let x = Math.floor(Math.random()*10);
                let y = Math.floor(Math.random()*10);

                if (gbPlayer.board[x][y] == null || (gbPlayer.board[x][y] != null && gbPlayer.board[x][y][2] != 'hit' && gbPlayer.board[x][y] != 'miss')){
                    gbPlayer.receiveAttack(x, y);
                    break;
                }
            }
        }
    }
    
    return{gbPlayer, gbComputer, attack};
};

module.exports = Player;