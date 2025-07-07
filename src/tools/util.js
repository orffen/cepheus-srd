// choose a random array element
function chooseRandom(arr) {
    if (typeof arr != "Array") {
        console.error("Cannot choose a random element of object " + typeof arr);
        return;
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

// convert to and from pseudoHex automatically based on if parameter is a string or number
function pseudoHex(value) {
    const HEX = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if (typeof value === "number") {
        return HEX[value];
    } else if (typeof value === "string") {
        return HEX.indexOf(value);
    } else {
        console.error("Error! Can only convert number and string types to/from pseudohex.");
    }
}

// rolls number of dice specified by parameter (defaults to 2)
function roll(number = 2) {
    let r = 0;
    for (let i = 0; i < number; i++) {
        r += Math.floor(Math.random() * 6) + 1;
    }
    return r;
}
