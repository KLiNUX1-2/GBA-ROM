const translations = {
    tr: {
        title: "GBA-NDS Core",
        subtitle: "Emülasyon Çekirdeği Prototipi",
        heroTitle: "GBA & Nintendo DS",
        heroText: "JavaScript tabanlı emülasyon çekirdeği.",
        gbaTitle: "Game Boy Advance",
        gbaText: "ARM7TDMI tabanlı GBA çekirdeği.",
        ndsTitle: "Nintendo DS",
        ndsText: "ARM9 + ARM7 tabanlı NDS çekirdeği.",
        loadRom: "ROM Yükle",
        emulator: "Emülatör",
        information: "ROM Bilgisi",
        noRom: "ROM yüklenmedi.",
        ready: "Hazır — ROM seçebilirsiniz.",
        loading: "ROM yükleniyor...",
        loaded: "ROM hazır",
        selectGba: "Bir GBA ROM seç.",
        selectNds: "Bir NDS ROM seç.",
        error: "Bir hata oluştu.",
        language: "Dil"
    },

    en: {
        title: "GBA-NDS Core",
        subtitle: "Emulation Core Prototype",
        heroTitle: "GBA & Nintendo DS",
        heroText: "JavaScript-based emulation core.",
        gbaTitle: "Game Boy Advance",
        gbaText: "ARM7TDMI-based GBA core.",
        ndsTitle: "Nintendo DS",
        ndsText: "ARM9 + ARM7-based NDS core.",
        loadRom: "Load ROM",
        emulator: "Emulator",
        information: "ROM Information",
        noRom: "No ROM loaded.",
        ready: "Ready — select a ROM.",
        loading: "Loading ROM...",
        loaded: "ROM ready",
        selectGba: "Select a GBA ROM.",
        selectNds: "Select an NDS ROM.",
        error: "An error occurred.",
        language: "Language"
    },

    de: {
        title: "GBA-NDS Core",
        subtitle: "Emulationskern-Prototyp",
        heroTitle: "GBA & Nintendo DS",
        heroText: "JavaScript-basierter Emulationskern.",
        gbaTitle: "Game Boy Advance",
        gbaText: "GBA-Kern auf ARM7TDMI-Basis.",
        ndsTitle: "Nintendo DS",
        ndsText: "NDS-Kern auf ARM9 + ARM7-Basis.",
        loadRom: "ROM laden",
        emulator: "Emulator",
        information: "ROM-Informationen",
        noRom: "Keine ROM geladen.",
        ready: "Bereit — ROM auswählen.",
        loading: "ROM wird geladen...",
        loaded: "ROM bereit",
        selectGba: "GBA-ROM auswählen.",
        selectNds: "NDS-ROM auswählen.",
        error: "Ein Fehler ist aufgetreten.",
        language: "Sprache"
    },

    fr: {
        title: "GBA-NDS Core",
        subtitle: "Prototype du moteur d'émulation",
        heroTitle: "GBA & Nintendo DS",
        heroText: "Moteur d'émulation basé sur JavaScript.",
        gbaTitle: "Game Boy Advance",
        gbaText: "Moteur GBA basé sur ARM7TDMI.",
        ndsTitle: "Nintendo DS",
        ndsText: "Moteur NDS basé sur ARM9 + ARM7.",
        loadRom: "Charger la ROM",
        emulator: "Émulateur",
        information: "Informations ROM",
        noRom: "Aucune ROM chargée.",
        ready: "Prêt — sélectionnez une ROM.",
        loading: "Chargement de la ROM...",
        loaded: "ROM prête",
        selectGba: "Sélectionnez une ROM GBA.",
        selectNds: "Sélectionnez une ROM NDS.",
        error: "Une erreur s'est produite.",
        language: "Langue"
    },

    es: {
        title: "GBA-NDS Core",
        subtitle: "Prototipo de núcleo de emulación",
        heroTitle: "GBA & Nintendo DS",
        heroText: "Núcleo de emulación basado en JavaScript.",
        gbaTitle: "Game Boy Advance",
        gbaText: "Núcleo GBA basado en ARM7TDMI.",
        ndsTitle: "Nintendo DS",
        ndsText: "Núcleo NDS basado en ARM9 + ARM7.",
        loadRom: "Cargar ROM",
        emulator: "Emulador",
        information: "Información de ROM",
        noRom: "No hay ninguna ROM cargada.",
        ready: "Listo — selecciona una ROM.",
        loading: "Cargando ROM...",
        loaded: "ROM lista",
        selectGba: "Selecciona una ROM GBA.",
        selectNds: "Selecciona una ROM NDS.",
        error: "Ha ocurrido un error.",
        language: "Idioma"
    }
};

const savedLanguage =
    localStorage.getItem("gba-nds-language");

let currentLanguage =
    translations[savedLanguage]
        ? savedLanguage
        : "tr";

export function getLanguage() {
    return currentLanguage;
}

export function setLanguage(language) {
    if (!translations[language]) {
        language = "tr";
    }

    currentLanguage = language;

    localStorage.setItem(
        "gba-nds-language",
        language
    );
}

export function t(key) {
    return (
        translations[currentLanguage]?.[key] ??
        translations.tr[key] ??
        key
    );
}

export function availableLanguages() {
    return Object.keys(translations);
}
