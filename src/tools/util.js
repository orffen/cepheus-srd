// choose a random array element
function chooseRandom(arr) {
    if (typeof arr != "Array") {
        console.error("Cannot choose a random element of object " + typeof arr);
        return;
    }
    return arr[Math.floor(Math.random() * arr.length)];
}
