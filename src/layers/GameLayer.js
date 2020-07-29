class GameLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        this.date = new Date();
        this.background = new Model(images.backgroud, 1920*0.5, 1080*0.5);
        this.secondsClock = new Clock(100, 50, '#9900ff',  this.date.getSeconds(), 60);
        this.minutesClock = new Clock(200, 60, '#ff5050', this.date.getMinutes(), 60);
        this.hoursClock = new Clock(300, 70, '#33ccff', this.date.getHours(), 24);
    }

    update() {
        this.date = new Date();
        this.secondsClock.setCurrentTime(this.date.getSeconds());
        this.minutesClock.setCurrentTime(this.date.getMinutes());
        this.hoursClock.setCurrentTime(this.date.getHours());
    }

    draw() {
        this.background.draw();
        this.secondsClock.draw();
        this.minutesClock.draw();
        this.hoursClock.draw();
    }
}
