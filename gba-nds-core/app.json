import { GBACore } from "../src/gba/gba.js";
import { NDSCore } from "../src/nds/nds.js";

const gba = new GBACore();
const nds = new NDSCore();

const gbaInput = document.getElementById("gba-rom");
const ndsInput = document.getElementById("nds-rom");

const gbaButton = document.getElementById("gba-load");
const ndsButton = document.getElementById("nds-load");

const status = document.getElementById("status");
const info = document.getElementById("rom-info");

function setStatus(message) {
    status.textContent = message;
}

function showError(error) {
    console.error(error);

    setStatus("❌ Bir hata oluştu.");
    info.textContent =
        error instanceof Error
            ? error.message
            : String(error);
}

gbaButton.addEventListener("click", async () => {

    const file = gbaInput.files?.[0];

    if (!file) {
        setStatus("⚠️ Bir GBA ROM seç.");
        return;
    }

    try {
        setStatus("⏳ GBA ROM yükleniyor...");

        const buffer = await file.arrayBuffer();
        const data = new Uint8Array(buffer);

        const result = gba.load(data);

        info.textContent = result;

        setStatus(
            `✅ GBA hazır — ${file.name}`
        );

    } catch (error) {
        showError(error);
    }
});


ndsButton.addEventListener("click", async () => {

    const file = ndsInput.files?.[0];

    if (!file) {
        setStatus("⚠️ Bir NDS ROM seç.");
        return;
    }

    try {
        setStatus("⏳ NDS ROM yükleniyor...");

        const buffer = await file.arrayBuffer();
        const data = new Uint8Array(buffer);

        const result = nds.load(data);

        info.textContent = result;

        setStatus(
            `✅ NDS hazır — ${file.name}`
        );

    } catch (error) {
        showError(error);
    }
});
