/**
 * Represents a Cepheus Engine animal.
 * @typedef {Object} Animal
 * @property {string} [terrain] - The terrain where the animal is found. Randomly selected if not supplied.
 * @property {string} [type] - The type of animal. Randomly selected if not supplied.
 * @property {string} [subtype] - The animal's subtype. Automatically generated if not supplied.
 * @property {string} [upp] - The animal's Universal Personality Profile. Automatically generated if not supplied.
 */
class Animal {
    constructor(terrain, type, subtype, upp) {
        this.terrain = terrain ? terrain : generateTerrain();
        this.type = type ? type : generateType();
        this.subtype = subtype ? subtype : generateSubtype(this.type, this.terrain);
        this.upp = upp ? upp : generateUpp();
    }
}

function generateTerrain() {
    const TERRAINS = ["Clear", "Plain or Prarie", "Desert (hot or cold)", "Hills, Foothills", "Mountain", "Forest", "Woods", "Jungle", "Rainforest", "Rough, Broken", "Swamp, Marsh", "Beach, Shore", "Riverbank", "Ocean shallows", "Open ocean", "Deep ocean"];
}

function generateType() {
    const TYPES = ["Scavenger", "Herbivore", "Herbivore", "Herbivore", "Omnivore", "Carnivore"];
    return TYPES[Math.floor(Math.random() * TYPES.length)];
}

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
    return SUBTYPES[Math.max(1, Math.min(roll() + dm, 13)) - 1];
}

function generateUpp() {
}
