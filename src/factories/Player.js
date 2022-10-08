const Gameboard = require('./Gameboard');

const Player = () => {
    const gbPlayer = Gameboard();
    const gbComputer = Gameboard();

    const attack = (x, y) => {
        loop1:
        if (gbComputer.board[x][y] == null || (gbComputer.board[x][y] != null && gbComputer.board[x][y][2] != 'hit' && gbComputer.board[x][y] != 'miss')){
            gbComputer.receiveAttack(x, y);

            // hit the spots around it, if all spots taken, move to the next hit spot
            
            for(let i=0; i < 10; i++){
                for(let j=0; j < 10; j++){
                    // if gbPlayer.board is Hit, but not Sunk => hit 1 of 4 spots around => if all 4 spots were hit, go to another "hit not sunk" spot
                    loop2:
                    if(gbPlayer.board[i][j] !== null && gbPlayer.board[i][j].length == 3 && gbPlayer.board[i][j].length !== 4){
                        if(i-1 >= 0 && (gbPlayer.board[i-1][j] == null || (gbPlayer.board[i-1][j] != null && gbPlayer.board[i-1][j][2] != 'hit' && gbPlayer.board[i-1][j] != 'miss'))){
                            gbPlayer.receiveAttack(i-1, j);
                            break loop1;
                        }else if(i+1 <= 9 && (gbPlayer.board[i+1][j] == null || (gbPlayer.board[i+1][j] != null && gbPlayer.board[i+1][j][2] != 'hit' && gbPlayer.board[i+1][j] != 'miss'))){
                            gbPlayer.receiveAttack(i+1, j);
                            break loop1;
                        }else if(j-1 >=0 && (gbPlayer.board[i][j-1] == null || (gbPlayer.board[i][j-1] != null && gbPlayer.board[i][j-1][2] != 'hit' && gbPlayer.board[i][j-1] != 'miss'))){
                            gbPlayer.receiveAttack(i, j-1);
                            break loop1;
                        }else if(j+1 <=9 && (gbPlayer.board[i][j+1] == null || (gbPlayer.board[i][j+1] != null && gbPlayer.board[i][j+1][2] != 'hit' && gbPlayer.board[i][j+1] != 'miss'))){
                            gbPlayer.receiveAttack(i, j+1);
                            break loop1;
                        }
                        // console.log('4 spots full');
                        break loop2;
                    }
                }
            }
            
            while(true){
                let x = Math.floor(Math.random()*10);
                let y = Math.floor(Math.random()*10);

                if (gbPlayer.board[x][y] == null || (gbPlayer.board[x][y] != null && gbPlayer.board[x][y][2] != 'hit' && gbPlayer.board[x][y] != 'miss')){
                    // console.log('random attack');
                    gbPlayer.receiveAttack(x, y);
                    break loop1;
                }
            }

        }
    }
    
    return{gbPlayer, gbComputer, attack};
};

module.exports = Player;