const Ship = require('../factories/Ship');

test('Ship health', () => {
    const ship1 = Ship(3);
    expect(ship1.getHealth()).toBe(3);
});

test('Ship hit', () => {
    const ship2 = Ship(5);
    ship2.hit(2);
    ship2.hit(1);
    expect(ship2.deckHit).toStrictEqual([1,2]);
});

test('Ship is not sunk', () => {
    const ship3 = Ship(3);
    ship3.hit(3);
    ship3.hit(2);
    ship3.hit(5);
    expect(ship3.isSunk()).toBeFalsy();
});

test('Ship is sunk', () => {
    const ship4 = Ship(3);
    ship4.hit(0);
    ship4.hit(1);
    ship4.hit(2);
    expect(ship4.isSunk()).toBeTruthy();
});