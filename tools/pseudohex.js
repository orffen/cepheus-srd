function pseudoHex(value) {
    const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if (typeof value === 'number') {
        return hex[value];
    } else if (typeof value === 'string') {
        return hex.indexOf(value);
    } else {
        console.error("Can only convert int and str types to pseudohex!");
    }
}
