import Player from './factories/Player';
import { placeShipPage } from './placeShipPage';
import { placeShipRand } from './placeShipRand';

import './style.css';

let totalLength = 10;

const game = Player();

placeShipPage(totalLength, game);
placeShipRand(totalLength, game);