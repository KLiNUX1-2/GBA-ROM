import { GBA_CPU } from "./cpu.js";
import { GBAMemory } from "./memory.js";
import { GBACartridge } from "./cartridge.js";

export class GBACore {
    constructor() {
        this.cpu = new GBA_CPU();
        this.memory = new GBAMemory();
        this.cartridge = new GBACartridge();
    }

    load(data) {
        this.cartridge.load(data);
        this.cpu.reset();

        return [
            "=== GBA CORE ===",
            `Title : ${this.cartridge.title}`,
            `Code  : ${this.cartridge.code}`,
            `Size  : ${data.length} bytes`,
            "CPU   : ARM7TDMI",
            "Status: ROM loaded"
        ].join("\n");
    }
}
