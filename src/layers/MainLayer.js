class MainLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        this.updateDate();
        this.background = new Model(images.backgroud, 1920*0.5, 1080*0.5);

        this.secondsClock = new Clock("Seconds", 75, 70, '#9900ff',
            this.seconds*1000+this.millis, 1000*60);

        this.minutesClock = new Clock("Minutes",150, 70, '#ff5050',
            this.minutes*60+this.seconds, 60*60);

        this.hoursClock = new Clock("Hours",225, 70, '#33ccff',
            this.hours*60*60+this.minutes*60+this.seconds, 24*60*60);

        this.daysClock = new Clock("Week",300, 70, '#990000',
            this.dayOfWeek*24*60+this.hours*60+this.minutes, 7*24*60);

        this.monthClock = new Clock("Month",375, 70, '#66ff99',
            this.dayOfMonth*24*60+this.hours*60+this.minutes,this.daysInMonth(this.month, this.year)*24*60);
    }

    update() {
        this.updateDate();
        this.secondsClock.setCurrentTime(this.seconds*1000+this.millis);
        this.minutesClock.setCurrentTime(this.minutes*60+this.seconds);
        this.hoursClock.setCurrentTime(this.hours*60*60+this.minutes*60+this.seconds);
        this.daysClock.setCurrentTime(this.dayOfWeek*24*60+this.hours*60+this.minutes);
        this.monthClock.setCurrentTime(this.dayOfMonth*24*60+this.hours*60+this.minutes);
    }

    draw() {
        this.background.draw();
        this.secondsClock.draw();
        this.minutesClock.draw();
        this.hoursClock.draw();
        this.daysClock.draw();
        this.monthClock.draw();
    }

    updateDate() {
        this.date = new Date();
        this.millis = this.date.getMilliseconds();
        this.seconds = this.date.getSeconds();
        this.minutes = this.date.getMinutes();
        this.hours = this.date.getHours();
        this.dayOfWeek = this.date.getDay();
        this.dayOfMonth = this.date.getDate();
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();
    }

    daysInMonth (month, year) {
        return new Date(year, month-1, 0).getDate();
    }
}
