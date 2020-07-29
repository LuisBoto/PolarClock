class Model {

    constructor(imageRoute, x, y) {
        this.image = cache[imageRoute];
        this.x = x;
        this.y = y;
        this.width = this.image.width;
        this.height = this.image.height;
    }

    draw(){
        context.drawImage(this.image,
            this.x - this.width /2,
            this.y - this.height /2);
    }

}
