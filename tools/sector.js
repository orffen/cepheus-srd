function generateSector(target = 4) {
    var wGen = worldGenerator();
    var sectorName = "SectorName"; // placeholder
    var r = sectorName + " Sector \n" +
        " 1-13: Name\n" +
        "15-18: HexNbr\n" +
        "20-28: UWP\n" +
        "   31: Bases\n" +
        "33-47: Codes & Comments\n" +
        "   49: Zone\n" +
        "52-54: PBG\n" +
        "56-57: Allegiance\n" +
        "59-74: Stellar Data\n\n" +
        "....+....1....+....2....+....3....+....4....+....5....+....6....+....7....+....8\n\n";
    //TODO: expand to allow generating a complete sector
    for (let i = 1; i <= 8; ++i) {
        for (let j = 1; j <= 10; ++j) {
            if (roll(1) >= target) {
                let w = wGen.next().value;
                r += `${w.name.padEnd(13, " ")} ${i.toString().padStart(2, 0) + j.toString().padStart(2, 0)} ${w.uwp} ${w.bases} ${w.remarks.padEnd(16, " ")} ${w.travelZone}  ${w.pbg} ${w.allegiance} ${w.stellarData}\n`;
            }
        }
    }
    return r;
}

function calculatePopulation(sec) {
    if (sec === undefined)
        console.error("Error! No SEC data provided.");
    var total = 0;
    var lines = sec.split("\n");
    lines.forEach(line => {
        let uwp = line.match(/[ABCDEX][0-9A-Z]{6}-[0-9A-Z]/);
        let pbg = line.match(/\s\s(\d[0-9A-F][0-9A-F])\s/);
        if (uwp && pbg)
            total += pseudoHex(pbg[1][0]) * Math.pow(10, pseudoHex(uwp[0][4]));
    });
    return `Subsector Population: ${total.toLocaleString('en')}`;
}
