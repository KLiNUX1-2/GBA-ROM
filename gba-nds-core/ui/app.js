import { GBACore } from "../gba/gba.js";
import { NDSCore } from "../nds/nds.js";

import {
    t,
    getLanguage,
    setLanguage
} from "./i18n.js";


const gba = new GBACore();
const nds = new NDSCore();


const gbaInput = document.getElementById("gba-rom");
const ndsInput = document.getElementById("nds-rom");

const gbaButton = document.getElementById("gba-load");
const ndsButton = document.getElementById("nds-load");

const status = document.getElementById("status");
const info = document.getElementById("rom-info");

const languageSelect =
    document.getElementById("language");


function applyLanguage() {

    document.title = t("title");

    document.documentElement.lang =
        getLanguage();


    document.getElementById("brand-title")
        .textContent = t("title");

    document.getElementById("brand-subtitle")
        .textContent = t("subtitle");


    document.getElementById("hero-title")
        .textContent = t("heroTitle");

    document.getElementById("hero-text")
        .textContent = t("heroText");


    document.getElementById("gba-title")
        .textContent = t("gbaTitle");

    document.getElementById("gba-text")
        .textContent = t("gbaText");


    document.getElementById("nds-title")
        .textContent = t("ndsTitle");

    document.getElementById("nds-text")
        .textContent = t("ndsText");


    gbaButton.textContent = t("loadRom");
    ndsButton.textContent = t("loadRom");


    document.getElementById("emulator-title")
        .textContent = t("emulator");

    document.getElementById("information-title")
        .textContent = t("information");


    if (
        info.textContent === "" ||
        info.dataset.empty === "true"
    ) {
        info.textContent = t("noRom");
    }


    if (status.dataset.ready === "true") {
        status.textContent = t("ready");
    }
}


function setStatus(message, ready = false) {

    status.textContent = message;

    status.dataset.ready =
        ready ? "true" : "false";
}


function showError(error) {

    console.error(error);

    setStatus(`❌ ${t("error")}`);

    info.dataset.empty = "false";

    info.textContent =
        error instanceof Error
            ? error.message
            : String(error);
}


languageSelect.value = getLanguage();

languageSelect.addEventListener(
    "change",
    () => {

        setLanguage(
            languageSelect.value
        );

        applyLanguage();
    }
);


gbaButton.addEventListener(
    "click",
    async () => {

        const file =
            gbaInput.files?.[0];

        if (!file) {

            setStatus(
                `⚠️ ${t("selectGba")}`
            );

            return;
        }


        try {

            setStatus(
                `⏳ ${t("loading")}`
            );


            const buffer =
                await file.arrayBuffer();

            const data =
                new Uint8Array(buffer);


            const result =
                gba.load(data);


            info.dataset.empty = "false";
            info.textContent = result;


            setStatus(
                `✅ ${t("loaded")} — ${file.name}`
            );

        } catch (error) {

            showError(error);
        }
    }
);


ndsButton.addEventListener(
    "click",
    async () => {

        const file =
            ndsInput.files?.[0];

        if (!file) {

            setStatus(
                `⚠️ ${t("selectNds")}`
            );

            return;
        }


        try {

            setStatus(
                `⏳ ${t("loading")}`
            );


            const buffer =
                await file.arrayBuffer();

            const data =
                new Uint8Array(buffer);


            const result =
                nds.load(data);


            info.dataset.empty = "false";
            info.textContent = result;


            setStatus(
                `✅ ${t("loaded")} — ${file.name}`
            );

        } catch (error) {

            showError(error);
        }
    }
);


info.dataset.empty = "true";

applyLanguage();

setStatus(t("ready"), true);
