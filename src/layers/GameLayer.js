class GameLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        this.date = new Date();
        this.background = new Model(images.backgroud, 1920*0.5, 1080*0.5);
        this.secondsClock = new Clock(images.sprite, 300, this.date.getSeconds(), 60);
    }

    update() {
        this.date = new Date();
        this.secondsClock.setCurrentTime(this.date.getSeconds());
    }

    draw() {
        this.background.draw();
        this.secondsClock.draw();
    }
}
