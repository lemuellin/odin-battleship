const Ship = require('./Ship');

const Gameboard = () => {
    let board = new Array(10).fill().map(() => Array(10).fill(null));
    let shipArr = [];

    const placeShip = (shipName, x, y, orientation) => {
        let shipLength;

        switch(shipName){
            case 'Carrier':
                shipLength = 5;
                break;
            case 'Battleship':
                shipLength = 4;
                break;
            case 'Destroyer':
                shipLength = 3;
                break;
            case 'Submarine':
                shipLength = 3;
                break;
            case 'PatrolBoat':
                shipLength = 2;
                break;
        }

        shipName = Ship(shipLength, shipName);
        shipArr.push(shipName);

        switch(orientation){
            case 'horizontal':
                for (let i = 0; i < shipLength; i++){
                    board[x][y + i] = [shipName, i];
                }
            break;

            case 'vertical':
                for (let i = 0; i < shipLength; i++){
                    board[x + i][y] = [shipName, i];
                }
            break;
        }
    }

    const receiveAttack = (x, y) => {
        if (board[x][y] == null){
            board[x][y] = 'miss';
        }else if (board[x][y] == 'miss' || board[x][y] == 'hit'){
            // console.log('invalid attack');
        }else{
            board[x][y][0].hit(board[x][y][1]);
            board[x][y][2] = 'hit';
            if(board[x][y][0].isSunk()){
                for(let i=0; i < 10; i++){
                    for(let j=0; j < 10; j++){
                        if((board[i][j] !== null) && (board[i][j].length == 3)){
                            if(board[i][j][0].getName() == board[x][y][0].getName())board[i][j][3] = 'SUNK';
                        }
                    }
                }
            }
        }
    }
    // null -> miss
    // ship -> hit
    // hit -> again
    // miss -> again
    // board[i][j] = [ShipFactory, ShipPosition(0-4), hit, SUNK]
    // board[i][j] = 'miss'
    // null, hit not SUNK, hit and SUNK, miss, Ship


    const allSunk = () => {
        for(let i = 0; i < shipArr.length; i++){
            if (shipArr[i].isSunk() == false){
                return false;
            }
        }
        return true;
    }


    return{board, placeShip, receiveAttack, allSunk};
};

module.exports = Gameboard;