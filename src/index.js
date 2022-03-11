const Ship = require('./Ship');
const Gameboard = require('./Gameboard');
const Player = require('./Player');

let turn = 0;
const player = Player('player');
const computer = Player('computer');

while (!player.Gameboard.allSunk() && !computer.Gameboard.allSunk()){
    if (turn%2 == 0){
        player.attack(computer, X, Y);
    }else if(turn%2 != 0){
        computer.attackRand(player);
    }
}