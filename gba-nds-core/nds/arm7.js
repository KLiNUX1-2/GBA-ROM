export class ARM7 {
    constructor() {
        this.reg = new Uint32Array(16);
        this.cpsr = 0;
    }

    reset() {
        this.reg.fill(0);
        this.reg[15] = 0x00000000;
        this.cpsr = 0x1F;
    }

    step() {
        this.reg[15] = (this.reg[15] + 4) >>> 0;
    }
}
