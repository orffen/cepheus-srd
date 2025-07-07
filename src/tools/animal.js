/**
 * Represents a Cepheus Engine animal.
 * @typedef {Object} Animal
 * @property {string} [upp] - The animal's Universal Personality Profile. Automatically generated if not supplied.
 * @property {string} [terrain] - The terrain where the animal is found. Randomly selected if not supplied.
 * @property {string} [movement] - The animal's movement. Automatically generated if not supplied.
 * @property {string} [type] - The type of animal. Randomly selected if not supplied.
 * @property {string} [subtype] - The animal's subtype. Automatically generated if not supplied.
 */
class Animal extends Creature {
    constructor(upp, terrain, type, subtype) {
        super(upp);
        this.terrain ? terrain : this.generateTerrain();
        if (!movement) {
            const ROLL = roll(1);
            this.movement = generateMovement(this.terrain, ROLL);
        } else {
            this.movement = movement;
        }
        this.type = type ? type : chooseRandom(["Scavenger", "Herbivore", "Herbivore", "Herbivore", "Omnivore", "Carnivore"]);
        this.subtype = subtype ? subtype : generateSubtype();
    }

    generateTerrain() {
        this.terrain = chooseRandom(["Clear", "Plain or Prarie", "Desert (hot or cold)", "Hills, Foothills", "Mountain", "Forest", "Woods", "Jungle", "Rainforest", "Rough, Broken", "Swamp, Marsh", "Beach, Shore", "Riverbank", "Ocean shallows", "Open ocean", "Deep ocean"]);
        let size = pseudoHex(this.upp[0]);
        switch (this.terrain) {
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
        this.upp[0] = pseudoHex(size);
    }

    generateMovement() {
    }

    generateSubtype() {
        const SUBTYPES = {
            "Herbivore": ["Filter", "Filter", "Intermittent", "Intermittent", "Intermittent", "Intermittent", "Grazer", "Grazer", "Grazer", "Grazer", "Grazer", "Grazer", "Grazer"],
            "Omnivore": ["Gatherer", "Eater", "Gatherer", "Eater", "Gatherer", "Hunter", "Hunter", "Hunter", "Gatherer", "Eater", "Hunter", "Gatherer", "Gatherer"],
            "Carnivore": ["Pouncer", "Siren", "Pouncer", "Killer", "Trapper", "Pouncer", "Chaser", "Chaser", "Chaser", "Killer", "Chaser", "Siren", "Chaser"],
            "Scavenger": ["Carrion-Eater", "Reducer", "Hijacker", "Carrion-Eater", "Intimidator", "Reducer", "Carrion-Eater", "Reducer", "Hijacker", "Intimidator", "Reducer", "Hijacker", "Intimidator"]
        }
        let dm = 0;
        switch (this.terrain) {
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
        this.subtype = SUBTYPES[type][Math.max(1, Math.min(roll() + dm, 13)) - 1];
    }
}
