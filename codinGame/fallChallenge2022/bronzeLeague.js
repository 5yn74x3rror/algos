var inputs = readline().split(' ');
const width = parseInt(inputs[0]);
const height = parseInt(inputs[1]);

while (true) {
    let command = '';
    const enemies = [];
    const enemyRecyclers = [];
    const enemyLands = [];
    const folks = [];
    const buildings = [];
    const buildingSpots = [];
    const spawners = [];
    var inputs = readline().split(' ');
    const myMatter = parseInt(inputs[0]);
    const oppMatter = parseInt(inputs[1]);
    // console.error({ myMatter, oppMatter })
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            var inputs = readline().split(' ');
            const scrapAmount = parseInt(inputs[0]);
            const owner = parseInt(inputs[1]); // 1 = me, 0 = foe, -1 = neutral
            const units = parseInt(inputs[2]);
            const recycler = parseInt(inputs[3]);
            const canBuild = parseInt(inputs[4]);
            const canSpawn = parseInt(inputs[5]);
            const inRangeOfRecycler = parseInt(inputs[6]);
            if (owner === 0 && units > 0) {
                enemies.push([j, i]);
            }
            if (owner === 0 && units === 0) {
                enemyLands.push([j, i]);
            }
            if (owner === 0 && recycler > 0) {
                enemyRecyclers.push([j, i]);
            }
            if (owner === 1) {
                if (units > 0) {
                    folks.push([j, i])
                }
                if (canSpawn) { spawners.push([j, i]) }
                // console.error({ i, j, scrapAmount, units, recycler, canBuild, canSpawn, inRangeOfRecycler });
                
                if (recycler) { buildings.push([j, i]) }

                if (canBuild) { buildingSpots.push([j, i]) }
            }
            
        }
    }
    for (let i = 0; i < folks.length; i++) {
        const folk = folks[i];
        const rand = Math.floor(Math.random() * (folks.length - 1));
        const foe = enemyLands[rand];
        if (foe) {
            command += `MOVE 1 ${folk[0]} ${folk[1]} ${foe[0]} ${foe[1]};`;
        } else if (enemyRecyclers.length) {
            const recycler = enemyRecyclers[0];
            command += `MOVE 1 ${folk[0]} ${folk[1]} ${recycler[0]} ${recycler[1]};`;
        }
    }
    if (spawners.length) {
        const randSpawn = spawners[Math.floor(Math.random() * (spawners.length - 1))]
        command += `SPAWN 1 ${randSpawn[0]} ${randSpawn[1]};`
    }
    // if (buildings.length === 0 && buildingSpots.length > 0) {
    //     command += `BUILD ${buildingSpots[0][0]} ${buildingSpots[0][1]};`;
    // }


    console.log(command);
}
