class Text {

    constructor(value, x, y) {
        this.value = value;
        this.x = x;
        this.y = y;
        this.center = (x === 1920 * 0.5);
    }

    setValue(value) {
        this.value = value;
    }

    draw (){
        context.font = "25px Monospace";
        context.fillStyle = "white";
        context.textAlign = "left";
        if (this.center)
            context.textAlign = "center";
        context.fillText(this.value, this.x, this.y);
    }

}
