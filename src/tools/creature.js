/**
 * Represents a Cepheus Engine creature. Characters, animals, etc. should inherit from this class.
 *
 * @property {string} [upp] - The creature's Universal Personality Profile. Automatically generated if not supplied.
 */
class Creature {
    constructor(upp) {
        this.upp = upp ? upp : generateUpp();
    }
}

// generate a Universal Personality Profile string
function generateUpp() {
    let characteristics = [];
    for (let i = 0; i < 6; i++)
        characteristics.push(pseudoHex(roll()));
    return characteristics.join();
}
