export class GBAMemory {

    constructor() {

        this.ewram =
            new Uint8Array(0x40000);

        this.iwram =
            new Uint8Array(0x8000);
    }


    read8(address) {

        address >>>= 0;


        if (
            address >= 0x02000000 &&
            address < 0x02040000
        ) {
            return this.ewram[
                address - 0x02000000
            ];
        }


        if (
            address >= 0x03000000 &&
            address < 0x03008000
        ) {
            return this.iwram[
                address - 0x03000000
            ];
        }


        return 0;
    }


    write8(address, value) {

        address >>>= 0;
        value &= 0xFF;


        if (
            address >= 0x02000000 &&
            address < 0x02040000
        ) {
            this.ewram[
                address - 0x02000000
            ] = value;
        }


        if (
            address >= 0x03000000 &&
            address < 0x03008000
        ) {
            this.iwram[
                address - 0x03000000
            ] = value;
        }
    }
}
