import Player from './factories/Player';
import { placeShipPage } from './placeShipPage';
import { placeShipRand } from './placeShipRand';

import './style.css';

let totalLength = 10;

const game = Player();

// game.gbComputer.placeShip('Carrier', 0, 0, 'vertical');
// game.gbComputer.placeShip('Battleship', 1, 1, 'vertical');
// game.gbComputer.placeShip('Destroyer', 2, 2, 'vertical');
// game.gbComputer.placeShip('Submarine', 3, 3, 'vertical');
// game.gbComputer.placeShip('PatrolBoat', 4, 4, 'vertical');


placeShipPage(totalLength, game);
placeShipRand(totalLength, game);
// console.log(game.gbComputer.board);