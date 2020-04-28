class World {
    constructor(name, uwp, bases, remarks, travelZone, pbg) {
        this.name = name;
        this.uwp = uwp;
        this.bases = bases;
        this.remarks = remarks;
        this.travelZone = travelZone;
        this.pbg = pbg;
    }
    print() {
        return `${this.uwp} ${this.bases} ${this.remarks.padEnd(16, " ")} ${this.travelZone}  ${this.pbg}`;
    }
}

function* worldGenerator() {
    /** Iterator that returns a World object with each next() until it exhausts its list of world names. */
    // Names from http://www.nameexoworlds.iau.org/final-results, plus a few extras
    let names = [
        "Arber", "Tassili", "Madriu", "Naqaya", "Bocaprins", "Yanyan", "Sissi", "Ganja", "Tondra", "Eburonia", "Drukyul", "Yvaga", "Naron", "Guarani", "Mastika", "Bendida",
        "Nakanbe", "Awasis", "Caleuche", "Wangshu", "Sazum", "Melquiades", "Pipitea", "Ditso", "Veles", "Finlay", "Onasilos", "Makropulos", "Surt", "Boinayel", "Eyeke",
        "Cayahuanca", "Hamarik", "Abol", "Hiisi", "Belisama", "Mintome", "Neri", "Toge", "Iolaus", "Koyopa", "Independance", "Ixbalanque", "Victoriapeak", "Magor", "Fold",
        "Santamasa", "Noifasui", "Kavian", "Babylonia", "Bran", "Alef", "Lete", "Asye", "Chura", "Wadirum", "Buru", "Staburags", "Beirut", "Umbaassa", "Vytis", "Peitruss",
        "Trimobe", "Baiduri", "Ggantija", "Cuptor", "Xolotl", "Bambaruush", "Isli", "Hairu", "Bagan", "Laligurans", "Nachtwacht", "Kereru", "Xolotlan", "Equiano", "Albmi",
        "Perwana", "Jebus", "Pollera", "Tumearandu", "Sumajmajta", "Haik", "Leklsullun", "Pirx", "Viriato", "Aumatex", "Negoiu", "Teberda", "Dopere", "Vlasina", "Viculus",
        "Kralomoc", "Iztok", "Krotoa", "Halla", "Riosar", "Samagiya", "Isagel", "Eiger", "Ugarit", "Tanzanite", "Maeping", "Agouto", "Ramajay", "Khomsa", "Gokturk", "Tryzub",
        "Barajeel", "Cruinlagh", "Mulchatna", "Ibirapita", "Madalitso", "Erehwemos", "Lacipyt"
    ];
    while (names.length > 0) {
        let w = generateWorld(true);
        w.name = names.splice(Math.floor(Math.random() * names.length), 1).toString(); // Take one and remove it from the list
        yield w;
    }
    return w;
}

function generateWorld(outputAsObject = false) {
    w = new World();
    if (!outputAsObject) {
        w.name = "WorldName";
    }

    // World Size
    var size = roll() - 2;

    // Atmosphere
    var atmosphere = 0;
    if (size != 0) {
        atmosphere = Math.max(0, Math.min(roll() - 7 + size, 15));
    }

    // Hydrographics
    var hydrographics = 0;
    if (size >= 1) {
        hydrographics = roll() - 7 + size;
        if (atmosphere <= 1 || (atmosphere >= 10 && atmosphere <= 12)) {
            hydrographics -= 4;
        } else if (atmosphere == 15) {
            hydrographics -= 2;
        }
    }
    hydrographics = Math.max(0, Math.min(hydrographics, 10));

    // World Population
    var population = roll() - 2;
    if (size <= 2)
        --population;
    if (atmosphere >= 10)
        population -= 2;
    else if (atmosphere == 6)
        population += 3;
    else if (atmosphere == 5 || atmosphere == 8)
        ++population;
    if (hydrographics == 0 && atmosphere < 3)
        population -= 2;
    population = Math.max(0, Math.min(population, 10));

    // Population Modifier
    var populationModifier = 0;
    if (population > 0)
        populationModifier = Math.max(1, Math.min(roll() - 3)); // CE actually is -2, however all other Traveller versions are at maximum 9; this is also needed for usage with Traveller Map

    // Primary Starport
    var starport = roll() - 7 + population;
    if (starport <= 2)
        starport = 'X';
    else if (starport >= 11)
        starport = 'A';
    else {
        switch (starport) {
            case 3:
            case 4:
                starport = 'E';
                break;
            case 5:
            case 6:
                starport = 'D';
                break;
            case 7:
            case 8:
                starport = 'C';
                break;
            case 9:
            case 10:
                starport = 'B';
                break;
        }
    }

    // World Government
    var government = 0;
    if (population != 0)
        government = Math.max(0, Math.min(roll() - 7 + population, 15));

    // Law Level
    var lawLevel = 0;
    if (government != 0)
        lawLevel = Math.max(0, roll() - 7 + government);

    // Technology Level
    var technologyLevel = 0;
    switch (starport) {
        case 'A':
            technologyLevel += 6;
            break;
        case 'B':
            technologyLevel += 4;
            break;
        case 'C':
            technologyLevel += 2;
            break;
        case 'X':
            technologyLevel -= 4;
            break;
    }
    switch (size) {
        case 0:
        case 1:
            technologyLevel += 2;
            break;
        case 2:
        case 3:
        case 4:
            ++technologyLevel;
            break;
    }
    switch (hydrographics) {
        case 0:
        case 9:
            ++technologyLevel;
            break;
        case 10:
            technologyLevel += 2;
            break;
    }
    switch (population) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 9:
            ++technologyLevel;
            break;
        case 10:
            technologyLevel += 2;
            break;
        case 11:
            technologyLevel += 3;
            break;
        case 12:
            technologyLevel += 4;
            break;
    }
    switch (government) {
        case 0:
        case 5:
            ++technologyLevel;
            break;
        case 7:
            technologyLevel += 2;
            break;
        case 13:
        case 14:
            technologyLevel -= 2;
            break;
    }
    if ((hydrographics == 0 || hydrographics == 10) && population >= 6)
        technologyLevel = Math.max(4, technologyLevel);
    if (atmosphere == 4 || atmosphere == 7 || atmosphere == 9)
        technologyLevel = Math.max(5, technologyLevel);
    if (atmosphere <= 3 || (atmosphere >= 10 && atmosphere <= 12))
        technologyLevel = Math.max(7, technologyLevel);
    if ((atmosphere == 13 || atmosphere == 14) && hydrographics == 10)
        technologyLevel = Math.max(7, technologyLevel);
    technologyLevel = Math.max(technologyLevel, 0);

    w.uwp = `${starport}${pseudoHex(size)}${pseudoHex(atmosphere)}${pseudoHex(hydrographics)}${pseudoHex(population)}${pseudoHex(government)}${pseudoHex(lawLevel)}-${pseudoHex(technologyLevel)}`;

    // Trade Codes
    let tradeCodes = [];
    if (atmosphere >= 4 && atmosphere <= 9 && hydrographics >= 4 && hydrographics <= 8 && population >= 5 && population <= 7)
        tradeCodes.push("Ag");
    if (size == 0 && atmosphere == 0 && hydrographics == 0)
        tradeCodes.push("As");
    if (population == 0 && government == 0 && lawLevel == 0)
        tradeCodes.push("Ba");
    if (atmosphere >= 2 && hydrographics == 0)
        tradeCodes.push("De");
    if (atmosphere >= 10 && hydrographics >= 1)
        tradeCodes.push("Fl");
    if ((atmosphere == 5 || atmosphere == 6 || atmosphere == 8) && hydrographics >= 4 && hydrographics <= 9 && population >= 4 && population <= 8)
        tradeCodes.push("Ga");
    if (population >= 9)
        tradeCodes.push("Hi");
    if (technologyLevel >= 12)
        tradeCodes.push("Ht");
    if (atmosphere <= 1 && hydrographics >= 1)
        tradeCodes.push("Ic");
    if ((atmosphere <= 2 || atmosphere == 4 || atmosphere == 7 || atmosphere == 9) && population >= 9)
        tradeCodes.push("In");
    if (population >= 1 && population <= 3)
        tradeCodes.push("Lo");
    if (technologyLevel <= 5)
        tradeCodes.push("Lt");
    if (atmosphere <= 3 && hydrographics <= 3 && population >= 6)
        tradeCodes.push("Na");
    if (population >= 4 && population <= 6)
        tradeCodes.push("Ni");
    if (atmosphere >= 2 && atmosphere <= 5 && hydrographics <= 3)
        tradeCodes.push("Po");
    else if ((atmosphere == 6 || atmosphere == 8) && population >= 6 && population <= 8)
        tradeCodes.push("Ri");
    if (hydrographics == 10)
        tradeCodes.push("Wa");
    if (atmosphere == 0)
        tradeCodes.push("Va");
    w.remarks = tradeCodes.join(", ");

    // Planetoid Belt Presence
    let planetoidBelts = roll() >= 4 ? Math.max(1, roll(1) - 3) : 0;
    if (size == 0)
        planetoidBelts = Math.max(1, planetoidBelts);

    // Gas Giant Presence
    let gasGiants = roll() >= 5 ? Math.max(1, roll(1) - 2) : 0;

    w.pbg = `${populationModifier}${pseudoHex(planetoidBelts)}${pseudoHex(gasGiants)}`;

    // Bases
    let navalBase = false;
    let scoutBase = false;
    let pirateBase = false;
    w.bases = " ";
    switch (starport) {
        case 'A':
            navalBase = roll() >= 8 ? true : false;
            scoutBase = roll() - 3 >= 7 ? true : false;
            break;
        case 'B':
            navalBase = roll() >= 8 ? true : false;
            scoutBase = roll() - 2 >= 7 ? true : false;
            break;
        case 'C':
            scoutBase = roll() - 1 >= 7 ? true : false;
            break;
    }
    if (!navalBase && starport != 'A')
        pirateBase = roll() == 12 ? true : false;
    if (navalBase && scoutBase)
        w.bases = 'A';
    else if (scoutBase && pirateBase)
        w.bases = 'G';
    else if (navalBase)
        w.bases = 'N';
    else if (pirateBase)
        w.bases = 'P';
    else if (scoutBase)
        w.bases = 'S';

    // Travel Zones
    w.travelZone = " ";
    if (atmosphere >= 10 || government == 0 || government == 7 || government == 10 || lawLevel == 0 || lawLevel >= 9)
        w.travelZone = 'A';

    if (!outputAsObject)
        return w.print();
    else
        return w;
}
