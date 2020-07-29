class MainLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        this.date = new Date();
        this.background = new Model(images.backgroud, 1920*0.5, 1080*0.5);
        this.secondsClock = new Clock(75, 70, '#9900ff',  this.date.getSeconds(), 60);
        this.minutesClock = new Clock(150, 70, '#ff5050', this.date.getMinutes(), 60);
        this.hoursClock = new Clock(225, 70, '#33ccff', this.date.getHours(), 24);
        this.daysClock = new Clock(300, 70, '#663300', this.date.getDay(), 7);
        this.monthClock = new Clock(375, 70, '#00cc99', this.date.getDate(),
            this.daysInMonth(this.date.getMonth(), this.date.getFullYear()));
    }

    update() {
        this.date = new Date();
        this.secondsClock.setCurrentTime(this.date.getSeconds());
        this.minutesClock.setCurrentTime(this.date.getMinutes());
        this.hoursClock.setCurrentTime(this.date.getHours());
        this.daysClock.setCurrentTime(this.date.getDay());
        this.monthClock.setCurrentTime(this.date.getDate());
    }

    draw() {
        this.background.draw();
        this.secondsClock.draw();
        this.minutesClock.draw();
        this.hoursClock.draw();
        this.daysClock.draw();
        this.monthClock.draw();
    }

    daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }
}
