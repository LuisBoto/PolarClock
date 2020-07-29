class Model {

    constructor(imageRoute, x, y) {
        this.image = cache[imageRoute];
        this.x = x;
        this.y = y;
        this.width = this.image.width;
        this.height = this.image.height;
    }

    isOnScreen () {
        if ( this.x  - this.width/2 <= 900 &&
            (this.x)  + this.width/2 >= 0 &&
            this.y - this.height/2 <= 600 &&
            this.y + this.height/2 >= 0 ){
            return true;
        }
        return false;
    }

    draw(){
        context.drawImage(this.image,
            this.x - this.width /2,
            this.y - this.height /2);
    }

}
