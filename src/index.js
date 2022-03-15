import Player from './Player';
import {renderPlayerBoard, renderComputerBoard} from './Render.js';

import './style.css';

const game = Player();
game.gbPlayer.placeShip('Carrier', 0, 0, 'vertical');
game.gbPlayer.placeShip('Battleship', 1, 1, 'vertical');
game.gbPlayer.placeShip('Destroyer', 2, 2, 'vertical');
game.gbPlayer.placeShip('Submarine', 3, 3, 'vertical');
game.gbPlayer.placeShip('PatrolBoat', 4, 4, 'vertical');

game.gbComputer.placeShip('Carrier', 0, 0, 'vertical');
game.gbComputer.placeShip('Battleship', 1, 1, 'vertical');
game.gbComputer.placeShip('Destroyer', 2, 2, 'vertical');
game.gbComputer.placeShip('Submarine', 3, 3, 'vertical');
game.gbComputer.placeShip('PatrolBoat', 4, 4, 'vertical');

//initialization
let totalLength = 10;
renderPlayerBoard(totalLength, game);
renderComputerBoard(totalLength, game);

