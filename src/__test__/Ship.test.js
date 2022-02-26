const Ship = require('../Ship.js');

test('Ship health', () => {
    const ship1 = Ship([0,1,2]);
    expect(ship1.getHealth()).toBe(3);
});

test('Ship hit', () => {
    const ship2 = Ship([2,4,3,1,5]);
    ship2.hit(2);
    ship2.hit(1);
    expect(ship2.getPosition()).toStrictEqual([3,4,5]);
});

test('Ship is not sunk', () => {
    const ship3 = Ship([1,2,3]);
    ship3.hit(3);
    ship3.hit(2);
    ship3.hit(5);
    expect(ship3.isSunk()).toBeFalsy();
});

test('Ship is sunk', () => {
    const ship4 = Ship([3,1,2]);
    ship4.hit(3);
    ship4.hit(1);
    ship4.hit(2);
    expect(ship4.isSunk()).toBeTruthy();
});