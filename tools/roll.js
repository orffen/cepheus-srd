function roll(number = 2) {
    var r = 0;
    for (let i = 0; i < number; i++) {
        r += Math.floor(Math.random() * 6) + 1;
    }
    return r;
}
