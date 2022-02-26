const Ship = (posArr) => {
    
    let position = posArr.sort(function(a, b) {
        return a - b;
    });
    let orgPosition = [...posArr];
    let health = posArr.length;
    let hitPosition = [];

    const getPosition = () => position;
    const getHitPosition = () => hitPosition;
    const getHealth = () => health;
    
    const isSunk = () => {
        if (health == 0 && JSON.stringify(orgPosition) == JSON.stringify(hitPosition)){
            return true;  
        }else{
            return false;
        }
    }

    const hit = (x) => {
        if (position.includes(x)){
            health = health - 1;

            hitPosition.push(x);
            hitPosition = hitPosition.sort(function(a, b) {
                return a - b;
            });

            let index = position.indexOf(x);
            if (index > -1) {
                position.splice(index, 1);
            }
        }
        isSunk();
    }

    return{getPosition, getHitPosition, getHealth, isSunk, hit};
};

module.exports = Ship;