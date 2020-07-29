class GameLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        this.background = new Model(images.backgroud, 1920*0.5, 1080*0.5);
    }

    update() {

    }

    draw() {
        this.background.draw();
    }
}
