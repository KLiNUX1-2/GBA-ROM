export class NDSMemory {

    constructor() {

        this.mainRAM =
            new Uint8Array(0x400000);

        this.sharedRAM =
            new Uint8Array(0x8000);
    }


    read8(address) {

        address >>>= 0;

        if (
            address <
            this.mainRAM.length
        ) {
            return this.mainRAM[address];
        }

        return 0;
    }


    write8(address, value) {

        address >>>= 0;
        value &= 0xFF;

        if (
            address <
            this.mainRAM.length
        ) {
            this.mainRAM[address] = value;
        }
    }
}
