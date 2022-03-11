const Gameboard = require('./Gameboard');

const Player = () => {
    let gbPlayer = Gameboard();
    let gbComputer = Gameboard();

    const attack = (x, y) => {
        gbComputer.receiveAttack(x, y);

        while(true){
            let x = Math.floor(Math.random()*9) + 1;
            let y = Math.floor(Math.random()*9) + 1;

            if (gbPlayer.board[x][y] == null){
                gbPlayer.receiveAttack(x, y);
                break;
            }
        }
    }
    
    return{gbPlayer, gbComputer, attack};
};

module.exports = Player;