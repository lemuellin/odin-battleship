const Player = require('../Player');

test('Gameboard factory', () => {
    const game1 = Player();
    game1.gbPlayer.placeShip('Carrier', 0, 0, 5, 'vertical');
    game1.gbComputer.placeShip('Patrol Boat', 5, 5, 2, 'horizontal');

    expect(game1.gbPlayer.board[0][0][0].getName()).toBe('Carrier');
    expect(game1.gbComputer.board[5][5][0].getName()).toBe('Patrol Boat');
});

test('player attack', () => {
    const game2 = Player();
    game2.gbComputer.placeShip('Carrier', 3, 4, 5, 'horizontal');
    game2.attack(3, 4);
    game2.attack(3, 5);
    game2.attack(4, 4);

    expect(game2.gbComputer.board[3][4][2]).toBe('hit');
    expect(game2.gbComputer.board[4][4]).toBe('miss');
    expect(game2.gbComputer.board[3][5][2]).toBe('hit');
});

test('computer random attack', () => {
    const game3 = Player();
    game3.gbPlayer.placeShip('Carrier', 2, 3, 5, 'vertical');
    game3.attack(0,0);
    console.log(game3.gbPlayer.board);
    
    expect('1').toBe('1');
});