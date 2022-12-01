const numberOfCells = parseInt(readline()); // 37
const cells = [];
for (let i = 0; i < numberOfCells; i++) {
    var inputs = readline().split(' ');
    const index = parseInt(inputs[0]); // 0 is the center cell, the next cells spiral outwards
    const richness = parseInt(inputs[1]); // 0 if the cell is unusable, 1-3 for usable cells
    const neigh0 = parseInt(inputs[2]); // the index of the neighbouring cell for each direction
    const neigh1 = parseInt(inputs[3]);
    const neigh2 = parseInt(inputs[4]);
    const neigh3 = parseInt(inputs[5]);
    const neigh4 = parseInt(inputs[6]);
    const neigh5 = parseInt(inputs[7]);
    cells.push({ index, richness, neigh0, neigh1, neigh2, neigh3, neigh4, neigh5 })
}
// console.error(cells);

// game loop
while (true) {
    const day = parseInt(readline()); // the game lasts 24 days: 0-23
    const nutrients = parseInt(readline()); // the base score you gain from the next COMPLETE action
    console.error('day', day);
    console.error('nutrients', nutrients);
    var inputs = readline().split(' ');
    const sun = parseInt(inputs[0]); // your sun points
    const score = parseInt(inputs[1]); // your current score
    console.error('sun', sun);
    console.error('score', score);
    var inputs = readline().split(' ');
    const oppSun = parseInt(inputs[0]); // opponent's sun points
    const oppScore = parseInt(inputs[1]); // opponent's score
    const oppIsWaiting = inputs[2] !== '0'; // whether your opponent is asleep until the next day
    console.error('oppSun', oppSun);
    console.error('oppScore', oppScore);
    console.error('oppIsWaiting', oppIsWaiting);
    const numberOfTrees = parseInt(readline()); // the current amount of trees
    const trees = [];
    const myTrees = [];
    for (let i = 0; i < numberOfTrees; i++) {
        var inputs = readline().split(' ');
        const cellIndex = parseInt(inputs[0]); // location of this tree
        const size = parseInt(inputs[1]); // size of this tree: 0-3
        const isMine = inputs[2] !== '0'; // 1 if this is your tree
        const isDormant = inputs[3] !== '0'; // 1 if this tree is dormant
        trees.push({ cellIndex, size, isMine, isDormant })
        if (isMine) {
            myTrees.push({ cellIndex, size, isDormant })
        }
    }
    console.error('myTrees', myTrees);
    const numberOfPossibleActions = parseInt(readline()); // all legal actions
    const possible = [];
    for (let i = 0; i < numberOfPossibleActions; i++) {
        const possibleAction = readline(); // try printing something from here to start with
        possible.push(possibleAction);
    }
    console.error('possible', possible);
    if (sun >= 4) {
        const nextActionIdx = possible.findIndex(el => el !== 'WAIT');
        if (nextActionIdx !== -1) {
            console.log(possible[nextActionIdx]);
        } else {
            console.log('WAIT');
        }
    } else {
        console.log('WAIT');
    }
}