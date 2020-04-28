function generateSector(target = 4) {
    // Names from http://www.nameexoworlds.iau.org/final-results, plus a few extras
    var names = [
        "Arber", "Tassili", "Madriu", "Naqaya", "Bocaprins", "Yanyan", "Sissi", "Ganja", "Tondra", "Eburonia", "Drukyul", "Yvaga", "Naron", "Guarani", "Mastika", "Bendida",
        "Nakanbe", "Awasis", "Caleuche", "Wangshu", "Sazum", "Melquiades", "Pipitea", "Ditso", "Veles", "Finlay", "Onasilos", "Makropulos", "Surt", "Boinayel", "Eyeke",
        "Cayahuanca", "Hamarik", "Abol", "Hiisi", "Belisama", "Mintome", "Neri", "Toge", "Iolaus", "Koyopa", "Independance", "Ixbalanque", "Victoriapeak", "Magor", "Fold",
        "Santamasa", "Noifasui", "Kavian", "Babylonia", "Bran", "Alef", "Lete", "Asye", "Chura", "Wadirum", "Buru", "Staburags", "Beirut", "Umbaassa", "Vytis", "Peitruss",
        "Trimobe", "Baiduri", "Ggantija", "Cuptor", "Xolotl", "Bambaruush", "Isli", "Hairu", "Bagan", "Laligurans", "Nachtwacht", "Kereru", "Xolotlan", "Equiano", "Albmi",
        "Perwana", "Jebus", "Pollera", "Tumearandu", "Sumajmajta", "Haik", "Leklsullun", "Pirx", "Viriato", "Aumatex", "Negoiu", "Teberda", "Dopere", "Vlasina", "Viculus",
        "Kralomoc", "Iztok", "Krotoa", "Halla", "Riosar", "Samagiya", "Isagel", "Eiger", "Ugarit", "Tanzanite", "Maeping", "Agouto", "Ramajay", "Khomsa", "Gokturk", "Tryzub",
        "Barajeel", "Cruinlagh", "Mulchatna", "Ibirapita", "Madalitso", "Erehwemos", "Lacipyt"
    ];
    var sectorName = names.splice(Math.floor(Math.random() * names.length), 1).toString();
    var allegiance = "Na";
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
    for (let i = 1; i <= 8; ++i) {
        for (let j = 1; j <= 10; ++j) {
            if (roll(1) >= target) {
                let worldName = names.splice(Math.floor(Math.random() * names.length), 1).toString();
                r += worldName.padEnd(13, " ") + " ";
                r += i.toString().padStart(2, 0) + j.toString().padStart(2, 0) + " ";
                r += generateWorld() + " ";
                r += allegiance + "\n";
            }
        }
    }
    return r;
}
