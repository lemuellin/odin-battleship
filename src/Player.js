const Gameboard = require('./Gameboard');

const Player = (name) => {
    let game = Gameboard();
    const attack = (enemy, x, y) => {
        enemy.game.receiveAttack(x, y);
    }
    const attackRand = (enemy) => {
        while(true){
            let x = Math.floor(Math.random()*9) + 1;
            let y = Math.floor(Math.random()*9) + 1;

            if (game.board[x][y] == null){
                enemy.game.receiveAttack(x, y);
                break;
            }
        }
    }

    return{game, attack, attackRand};
};

module.exports = Player;