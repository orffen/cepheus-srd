/**
 * Represents a Cepheus Engine animal.
 * @typedef {Object} Animal
 * @property {string} [upp] - The animal's Universal Personality Profile. Automatically generated if not supplied.
 * @property {string} [terrain] - The terrain where the animal is found. Randomly selected if not supplied.
 * @property {string} [movement] - The animal's movement. Automatically generated if not supplied.
 * @property {string} [type] - The type of animal. Randomly selected if not supplied.
 * @property {string} [subtype] - The animal's subtype. Automatically generated if not supplied.
 */
class Animal {
    constructor(upp, terrain, type, subtype) {
        this.upp = upp ? upp : generateUpp();
        if (!terrain) {
            this.terrain = chooseRandom(["Clear", "Plain or Prarie", "Desert (hot or cold)", "Hills, Foothills", "Mountain", "Forest", "Woods", "Jungle", "Rainforest", "Rough, Broken", "Swamp, Marsh", "Beach, Shore", "Riverbank", "Ocean shallows", "Open ocean", "Deep ocean"]);
            this.upp = modifySize(this.upp, this.terrain);
        } else {
            this.terrain = terrain;
        }
        if (!movement) {
            const ROLL = roll(1);
            this.movement = generateMovement(terrain, ROLL);
        } else {
            this.movement = movement;
        }
        this.type = type ? type : chooseRandom(["Scavenger", "Herbivore", "Herbivore", "Herbivore", "Omnivore", "Carnivore"]);
        this.subtype = subtype ? subtype : generateSubtype(this.type, this.terrain);
    }
}

// generate a Universal Personality Profile string
function generateUpp() {
    let characteristics = [];
    for (let i = 0; i < 6; i++)
        characteristics.push(pseudoHex(roll()));
    return characteristics.join();
}

// modify UPP size based on terrain
function modifySize(upp, terrain) {
    let size = upp[0];
    switch (terrain) {
        case "Desert (hot or cold)":
        case "Jungle":
        case "Rough, Broken":
            size -= 3;
            break;
        case "Forest":
        case "Open ocean":
            size -= 4;
            break;
        case "Woods":
            --size;
            break;
        case "Rainforest":
            size -= 2;
            break;
        case "Swamp, Marsh":
            size += 4;
            break;
        case "Beach, Shore":
        case "Deep ocean":
            size += 2;
        case "Riverbank":
        case "Ocean shallows":
            ++size;
            break;
    }
    upp[0] = size;
    return upp;
}

// generate movement given an animal's terrain and a die roll
function generateMovement(terrain, roll) {
    // TODO: finish
}

// generate a subtype given an animal type and terrain
function generateSubtype(type, terrain) {
    const SUBTYPES = {
        "Herbivore": ["Filter", "Filter", "Intermittent", "Intermittent", "Intermittent", "Intermittent", "Grazer", "Grazer", "Grazer", "Grazer", "Grazer", "Grazer", "Grazer"],
        "Omnivore": ["Gatherer", "Eater", "Gatherer", "Eater", "Gatherer", "Hunter", "Hunter", "Hunter", "Gatherer", "Eater", "Hunter", "Gatherer", "Gatherer"],
        "Carnivore": ["Pouncer", "Siren", "Pouncer", "Killer", "Trapper", "Pouncer", "Chaser", "Chaser", "Chaser", "Killer", "Chaser", "Siren", "Chaser"],
        "Scavenger": ["Carrion-Eater", "Reducer", "Hijacker", "Carrion-Eater", "Intimidator", "Reducer", "Carrion-Eater", "Reducer", "Hijacker", "Intimidator", "Reducer", "Hijacker", "Intimidator"]
    }
    let dm = 0;
    switch (terrain) {
        case "Clear":
        case "Desert (hot or cold)":
        case "Beach, Shore":
            dm = 3;
            break;
        case "Plain or Prairie":
        case "Ocean shallows":
        case "Open ocean":
        case "Deep ocean":
            dm = 4;
            break;
        case "Forest":
        case "Jungle":
            dm = -4;
            break;
        case "Woods":
        case "Rainforest":
        case "Swamp, Marsh":
            dm = -2;
            break;
        case "Rough, Broken":
            dm = -3;
            break;
        case "Riverbank":
            dm = 1;
            break;
    }
    return SUBTYPES[type][Math.max(1, Math.min(roll() + dm, 13)) - 1];
}
