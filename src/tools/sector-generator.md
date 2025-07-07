# Cepheus Engine Subsector Generator

This tool will generate a Cepheus Engine subsector according to the rules found in [Chapter 12: Worlds](../book3/worlds.html). The output is in [SEC format](https://travellermap.com/doc/fileformats#legacy-sec-format) and can be copy/pasted into the [Traveller Map custom data tools](https://travellermap.com/doc/custom).

<div>
    <center>
        <b>Map type:</b>
        <input type="radio" id="mapSubsector" name="mapType" value="1" checked>
        <label for="mapSubsector">Subsector</label>
        <input type="radio" id="mapQuadrant" name="mapType" value="4">
        <label for="mapQuadrant">Quadrant</label>
        <input type="radio" id="mapSector" name="mapType" value="16">
        <label for="mapSector">Sector</label>
    </center>
</div>

<div>
    <center>
        <b>Sector type:</b>
        <input type="radio" id="sectorStandard" name="sectorType" value="4" checked>
        <label for="sectorStandard">Standard</label>
        <input type="radio" id="sectorRift" name="sectorType" value="6">
        <label for="sectorRift">Rift</label>
        <input type="radio" id="sectorSparse" name="sectorType" value="5">
        <label for="sectorSparse">Sparse</label>
        <input type="radio" id="sectorDense" name="sectorType" value="3">
        <label for="sectorDense">Dense</label>
    </center>
</div>

<textarea id="output" rows="12" style="font-family: var(--mono-font); font-size: var(--code-font-size); min-width: 100%; max-width: 100%"></textarea>
<div>
    <span id="sectorPopulation"></span>
    <button id="mapButton" style="float: right">Generate Map</button>
</div>

<div id="sectorMap" style="display:flex; justify-content: center"></div>

<script src="util.js"></script>
<script src="sector.js"></script>
<script src="world.js"></script>
<script src="https://unpkg.com/js-markov/dist/markov.js"></script> <!-- using https://www.npmjs.com/package/js-markov/v/2.0.3 -->
<script>
    document.addEventListener("DOMContentLoaded", () => {
        for (const elem of document.getElementsByName("mapType"))
            elem.addEventListener("click", init);
        for (const elem of document.getElementsByName("sectorType"))
            elem.addEventListener("click", init);
        document.getElementById("output").addEventListener("input", () => { document.getElementById("mapButton").disabled = false; });
        document.getElementById("mapButton").addEventListener("click", generateMap);
    });

    async function generateMap() {
        const DARK_THEME = !["ayu", "coal", "navy"].some(className =>
                Array.from(document.documentElement.classList).includes(className)
        );
        const MAP_TYPE = document.querySelector('input[name="mapType"]:checked').value;
        document.getElementById("mapButton").disabled = true;
        const MAP_IMAGE = await getSectorMap(DARK_THEME, MAP_TYPE, document.getElementById("output").value);
        document.getElementById("sectorMap").innerHTML = MAP_IMAGE;
    }

    function init() {
        const MAP_TYPE = document.querySelector('input[name="mapType"]:checked').value;
        const SECTOR_TYPE = document.querySelector('input[name="sectorType"]:checked').value;
        document.getElementById("output").value = generateSector(SECTOR_TYPE, MAP_TYPE);
        document.getElementById("sectorPopulation").textContent = calculatePopulation(document.getElementById("output").value);
        document.getElementById("mapButton").disabled = false;
    }
    init();
</script>
