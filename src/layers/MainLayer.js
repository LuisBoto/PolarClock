class MainLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        var date = new Date();
        this.background = new Model(images.backgroud, 1920*0.5, 1080*0.5);
        this.secondsClock = new Clock("Seconds", 75, 70, '#9900ff',  date.getSeconds()*1000+date.getMilliseconds(), 1000*60);
        this.minutesClock = new Clock("Minutes",150, 70, '#ff5050', date.getMinutes()*60+date.getSeconds(), 60*60);
        this.hoursClock = new Clock("Hours",225, 70, '#33ccff', date.getHours()*60+date.getMinutes(), 24*60);
        this.daysClock = new Clock("Week",300, 70, '#990000', date.getDay()*24+date.getHours(), 7*24);
        this.monthClock = new Clock("Month",375, 70, '#66ff99', date.getDate()*24+date.getHours(),
            this.daysInMonth(date.getMonth(), date.getFullYear())*24+date.getHours());
    }

    update() {
        var date = new Date();
        this.secondsClock.setCurrentTime(date.getSeconds()*1000+date.getMilliseconds());
        this.minutesClock.setCurrentTime(date.getMinutes()*60+date.getSeconds());
        this.hoursClock.setCurrentTime(date.getHours()*60+date.getMinutes());
        this.daysClock.setCurrentTime(date.getDay()*24+date.getHours());
        this.monthClock.setCurrentTime(date.getDate()*24+date.getHours());
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
