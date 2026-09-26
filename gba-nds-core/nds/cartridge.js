export class NDSCartridge {
    constructor() {
        this.data = null;
        this.title = "";
        this.code = "";
    }

    load(data) {
        this.data = data;

        this.title = this.readString(0, 12);
        this.code = this.readString(12, 4);
    }

    readString(offset, length) {
        let result = "";

        for (let i = 0; i < length; i++) {
            const c = this.data[offset + i];

            if (c >= 32 && c <= 126)
                result += String.fromCharCode(c);
        }

        return result.trim();
    }
}
