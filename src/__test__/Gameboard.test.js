const Gameboard = require('../Gameboard.js');

test('Place ship at specific coor', () => {
    let game1 = Gameboard();
    game1.placeShip('Carrier', 1, 3, 'vertical');
    expect(game1.board[1][3][0].getName()).toBe('Carrier');
    expect(game1.board[1][3][1]).toBe(0);
    expect(game1.board[2][3][0].getName()).toBe('Carrier');
});

test('Receive Attack', () => {
    let game2 = Gameboard();
    game2.placeShip('Battleship', 3, 4, 'horizontal');
    game2.placeShip('PatrolBoat', 0, 0, 'vertical');
    game2.receiveAttack(0,0);
    game2.receiveAttack(2,2);
    game2.receiveAttack(3,4);
    game2.receiveAttack(3,5);
    expect(game2.board[0][0][2]).toBe('hit');
    expect(game2.board[2][2]).toBe('miss');
    expect(game2.board[3][4][2]).toBe('hit');
    expect(game2.board[3][4][0].deckHit).toStrictEqual([0,1]);
});

test('All ship sunk', () => {
    let game3 = Gameboard();
    game3.placeShip('PatrolBoat', 1, 2, 'horizontal');
    game3.placeShip('Destroyer', 7, 7, 'vertical');
    game3.receiveAttack(1,2);
    game3.receiveAttack(1,3);
    game3.receiveAttack(7,7);
    game3.receiveAttack(8,7);
    game3.receiveAttack(9,7); // return true
    // game3.receiveAttack(9,8); // return false
    expect(game3.allSunk()).toBeTruthy();

});