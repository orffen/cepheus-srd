/**
 * Represents a Cepheus Engine creature. Characters, animals, etc. should inherit from this class.
 *
 * @class
 * @param {string} [upp] - The creature's Universal Personality Profile. Automatically generated if not supplied.
 *
 * @property {string} upp - The creature's Universal Personality Profile.
 *
 * @method strength - Gets the strength value derived from the UPP.
 * @returns {number} The strength value.
 *
 * @method dexterity - Gets the dexterity value derived from the UPP.
 * @returns {number} The dexterity value.
 *
 * @method endurance - Gets the endurance value derived from the UPP.
 * @returns {number} The endurance value.
 *
 * @method intelligence - Gets the intelligence value derived from the UPP.
 * @returns {number} The intelligence value.
 *
 * @method education - Gets the education value derived from the UPP.
 * @returns {number} The education value.
 *
 * @method socialStanding - Gets the social standing value derived from the UPP.
 * @returns {number} The social standing value.
 */
class Creature {
    constructor(upp) {
        this.upp = upp ? upp : generateUpp();
    }

    strength = () => pseudoHex(this.upp[0]);
    dexterity = () => pseudoHex(this.upp[1]);
    endurance = () => pseudoHex(this.upp[2]);
    intelligence = () => pseudoHex(this.upp[3]);
    education = () => pseudoHex(this.upp[4]);
    socialStanding = () => pseudoHex(this.upp[5]);
}

// generate a Universal Personality Profile string
function generateUpp() {
    let characteristics = [];
    for (let i = 0; i < 6; i++)
        characteristics.push(pseudoHex(roll()));
    return characteristics.join();
}
