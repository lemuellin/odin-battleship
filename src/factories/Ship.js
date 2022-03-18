const Ship = (length, shipName) => {
    let deck = [];
    let deckHit = [];
    let health = length;
    const getHealth = () => length;
    const getName = () => shipName;

    for (let i = 0; i < length; i++){
        deck[i] = i;
    }

    const hit = (x) => {
        if (deck.includes(x)){
            health--;

            deckHit.push(x);
            deckHit = deckHit.sort(function(a, b) {
                return a - b;
            });

            // let index = deck.indexOf(x); 
            // if (index > -1) {   //index exist
                // deck.splice(index, 1);
                // deck[index] = "hit";
            // }
        }
        isSunk();
    }

    const isSunk = () => {
        if (health == 0){
            return true;  
        }else{
            return false;
        }
    }

    return{getHealth, getName, isSunk, hit, deckHit};
};

module.exports = Ship;