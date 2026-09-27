import { ARM9 } from "./arm9.js";
import { ARM7 } from "./arm7.js";
import { NDSMemory } from "./memory.js";
import { NDSCartridge } from "./cartridge.js";

export class NDSCore {

    constructor() {

        this.arm9 = new ARM9();
        this.arm7 = new ARM7();

        this.memory =
            new NDSMemory();

        this.cartridge =
            new NDSCartridge();
    }


    load(data) {

        this.cartridge.load(data);

        this.arm9.reset();
        this.arm7.reset();


        return [
            "=== NDS CORE ===",
            `Title : ${this.cartridge.title}`,
            `Code  : ${this.cartridge.code}`,
            `Size  : ${data.length} bytes`,
            "CPU   : ARM9 + ARM7",
            "Status: ROM loaded"
        ].join("\n");
    }
}
