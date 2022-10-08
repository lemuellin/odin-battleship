function placeShipRand (totalLength, game){
    let counter = 0;
    let shipName;
    let shipLength;
    
    while(true){
        let x = Math.floor(Math.random()*10);
        let y = Math.floor(Math.random()*10);
        let orientation = Math.floor(Math.random()*2);
        orientation = (orientation == 0) ? 'horizontal':'vertical';
        // console.log(orientation);
        // console.log(x,y);

        switch(counter){
            case 0:
                shipName = 'Carrier';
                shipLength = 5;
                break;
            case 1:
                shipName = 'Battleship';
                shipLength = 4;
                break;
            case 2:
                shipName = 'Destroyer';
                shipLength = 3;
                break;
            case 3:
                shipName = 'Submarine';
                shipLength = 3;
                break;
            case 4:
                shipName = 'PatrolBoat';
                shipLength = 2;
                break;
        }


        let stat = 'empty';
                
        switch(orientation){
            case 'horizontal':
                for (let k = 0; k < shipLength; k++){
                    if (((y + shipLength) < totalLength) && game.gbComputer.board[x][y+k] != null){
                        stat = 'taken';
                    }
                }
                        
                if (((y + shipLength) < totalLength) && (stat == 'empty')){
                    // console.log(shipName, x, y, orientation);
                    game.gbComputer.placeShip(shipName, x, y, orientation);
                    counter++;
                    break;
                }
                break;
            case 'vertical':
                for (let k = 0; k < shipLength; k++){
                    if (((x + shipLength) < totalLength) && game.gbComputer.board[x+k][y] != null){
                        stat = 'taken';
                    }
                }
                if (((x + shipLength) < totalLength) && (stat == 'empty')){
                    // console.log(shipName, x, y, orientation);
                    game.gbComputer.placeShip(shipName, x, y, orientation);
                    counter++;
                    break;
                }
                break;
        }
        
        if (counter == 5){
            break;
        }
    }
}

export{placeShipRand};