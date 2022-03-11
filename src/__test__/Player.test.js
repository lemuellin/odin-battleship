const Player = require('../Player');

test('Gameboard factory', () => {
    const player1 = Player('player');
    const computer1 = Player('computer');
    player1.game.placeShip('Carrier', 0, 0, 5, 'vertical');
    computer1.game.placeShip('Patrol Boat', 5, 5, 2, 'horizontal');

    expect(player1.game.board[0][0][0].getName()).toBe('Carrier');
    expect(computer1.game.board[5][5][0].getName()).toBe('Patrol Boat');
});

test('player attack', () => {
    const player2 = Player('player');
    const computer2 = Player('computer');
    computer2.game.placeShip('Carrier', 3, 4, 5, 'horizontal');
    player2.attack(computer2, 3, 4);
    player2.attack(computer2, 3, 5);
    player2.attack(computer2, 4, 4);

    expect(computer2.game.board[3][4][2]).toBe('hit');
    expect(computer2.game.board[4][4]).toBe('miss');
    expect(computer2.game.board[3][5][2]).toBe('hit');
});

test('computer random attack', () => {
    const player3 = Player('player');
    const computer3 = Player('computer');
    player3.game.placeShip('Carrier', 2, 3, 5, 'vertical');
    computer3.attackRand(player3);
    console.log(player3.game.board);
    expect('1').toBe('1');

});