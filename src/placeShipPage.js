import {removeAllChild} from './Render.js';
import {renderPlayerBoard, renderComputerBoard} from './Render.js';

const gbInit = document.querySelector('.gbInit');
const placeShipPageE = document.getElementById('placeShipPage');
const mainPageE = document.getElementById('mainPage');
const gbPlayer = document.querySelector('.gbPlayer');
const gbComputer = document.querySelector('.gbComputer');
let counter = 0;

function placeShipPage (totalLength, game){
    removeAllChild(gbInit);
    let shipName;
    let shipLength;
    
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
        case 5:
            placeShipPageE.style.display = 'none';
            mainPageE.style.display = 'flex';
            removeAllChild(gbPlayer);
            removeAllChild(gbComputer);
            renderPlayerBoard(totalLength, game);
            renderComputerBoard(totalLength, game);

            break;
    }
    
    // rotate button switch rotation state
    let rotateStatus = 0;
    const rotate = document.querySelector('.rotate');
    rotate.addEventListener('click', () => {
        rotateStatus = (rotateStatus == 0) ? 1 : 0;
    });

    const singleGrid = new Array(10).fill().map(() => Array(10).fill(null));
    for (let i = 0; i < totalLength; i++){
        for (let j = 0; j < totalLength; j++){
            singleGrid[i][j] = document.createElement('div');
            singleGrid[i][j].classList.add('gridInit');

            if (game.gbPlayer.board[i][j] == null){
                singleGrid[i][j].style.backgroundColor = "rgb(255,255,255)";
            }else{
                singleGrid[i][j].style.backgroundColor = "rgb(0,128,0)";
            }

            singleGrid[i][j].addEventListener('mouseenter', () => {
                for (let k = 0; k < shipLength; k++){

                    switch(rotateStatus){
                        case 0:
                            if ((j + shipLength) > totalLength){
                                for (let temp = 0; temp < totalLength - j; temp++){
                                    singleGrid[i][j+temp].style.backgroundColor = "rgb(255,0,0)";
                                }
                            }else if(game.gbPlayer.board[i][j+k] != null){
                                singleGrid[i][j+k].style.backgroundColor = "rgb(255,0,0)";
                            }else{
                                singleGrid[i][j+k].style.backgroundColor = "rgb(0,255,0)";
                            }
                            break;
                        case 1:
                            if ((i + shipLength) > totalLength){
                                for (let temp = 0; temp < totalLength - i; temp++){
                                    singleGrid[i+temp][j].style.backgroundColor = "rgb(255,0,0)";
                                }
                            }else if(game.gbPlayer.board[i+k][j] != null){
                                singleGrid[i+k][j].style.backgroundColor = "rgb(255,0,0)";
                            }else{
                                singleGrid[i+k][j].style.backgroundColor = "rgb(0,255,0)";
                            }
                            break;

                    }
                }
            });

            singleGrid[i][j].addEventListener('mouseleave', () => {
                switch(rotateStatus){
                    case 0:
                        for (let k = 0; k < shipLength; k++){
                                for (let temp = 0; temp < totalLength - j; temp++){
                                    if (game.gbPlayer.board[i][j+temp] == null){
                                        singleGrid[i][j+temp].style.backgroundColor = "rgb(255,255,255)";
                                    }else{
                                        singleGrid[i][j+temp].style.backgroundColor = "rgb(0,128,0)";
                                    }
                                }
                        }
                    break;

                    case 1:
                        for (let k = 0; k < shipLength; k++){
                            
                                for (let temp = 0; temp < totalLength - i; temp++){
                                    if(game.gbPlayer.board[i+temp][j] == null){
                                        singleGrid[i+temp][j].style.backgroundColor = "rgb(255,255,255)";
                                    }else{
                                        singleGrid[i+temp][j].style.backgroundColor = "rgb(0,128,0)";
                                    }
                                }
                                
                        }
                    break;
                }
            });


            singleGrid[i][j].addEventListener('click', () => {
                let orientation = (rotateStatus == 0) ? 'horizontal' : 'vertical';
                let stat = 'empty';
                switch(rotateStatus){
                    case 0:
                        for (let k = 0; k < shipLength; k++){
                            if (singleGrid[i][j+k].style.backgroundColor == 'rgb(255, 0, 0)'){
                                stat = 'taken';
                            }
                        }
                        if (stat == 'empty'){
                            game.gbPlayer.placeShip(shipName, i, j, orientation);
                            counter++;
                            placeShipPage(totalLength, game);
                        }
                        break;
                    case 1:
                        for (let k = 0; k < shipLength; k++){
                            if (singleGrid[i+k][j].style.backgroundColor == 'rgb(255, 0, 0)'){
                                stat = 'taken';
                            }
                        }
                        if (stat == 'empty'){
                            game.gbPlayer.placeShip(shipName, i, j, orientation);
                            counter++;
                            placeShipPage(totalLength, game);
                        }
                        break;
                }
                
            });
            gbInit.appendChild(singleGrid[i][j]);
        }
    }
}

export{placeShipPage};