export class NDS_GPU {

    constructor(canvas) {

        this.canvas = canvas;

        this.context =
            canvas?.getContext("2d") ?? null;
    }


    clear() {

        if (!this.context)
            return;

        this.context.fillStyle = "#000";

        this.context.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
    }
}
