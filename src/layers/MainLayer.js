class MainLayer extends Layer {

    constructor() {
        super();
        this.initiate();
        this.monthChange = false;
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
            (this.dayOfWeek-1)*24*60+this.hours*60+this.minutes, 7*24*60);

        this.monthClock = new Clock("Month",375, 70, '#66ff99',
            (this.dayOfMonth-1)*24*60+this.hours*60+this.minutes,this.daysInMonth(this.month, this.year)*24*60);

        var gradient = context.createLinearGradient(canvasWidth*0.25,canvasHeight*0.5,canvasWidth*0.75, canvasHeight*0.5);
        gradient.addColorStop("0.2", "magenta");
        gradient.addColorStop("0.5" ,"yellow");
        gradient.addColorStop("0.8" ,"cyan");
        this.yearClock = new Clock("Year", 425, 20, gradient,
            (this.currentDayOfYear-1)*24+this.hours, this.dayOfTheYear(new Date("12/31/"+this.year))*24);
    }

    update() {
        this.updateDate();
        this.secondsClock.setCurrentTime(this.seconds*1000+this.millis);
        this.secondsClock.setLabel(this.seconds+"s");

        this.minutesClock.setCurrentTime(this.minutes*60+this.seconds);
        this.minutesClock.setLabel(this.minutes+"m");

        this.hoursClock.setCurrentTime(this.hours*60*60+this.minutes*60+this.seconds);
        this.hoursClock.setLabel(this.hours+"h");

        this.daysClock.setCurrentTime((this.dayOfWeek-1)*24*60+this.hours*60+this.minutes);
        var dayName = this.date.toLocaleString('default', { weekday: 'long' });
        this.daysClock.setLabel(dayName.charAt(0).toUpperCase() + dayName.slice(1));

        this.monthClock.setCurrentTime((this.dayOfMonth-1)*24*60+this.hours*60+this.minutes);
        var monthName = this.date.toLocaleString('default', { month: 'long' });
        this.monthClock.setLabel(monthName.charAt(0).toUpperCase() + monthName.slice(1)+" "+this.dayOfMonth);
        if (this.monthChange) { //Month clock needs to readjust its number of days
            this.monthClock.setSteps(this.daysInMonth(this.month, this.year)*24*60);
            this.monthChange = false;
        }

        this.yearClock.setCurrentTime((this.currentDayOfYear-1)*24+this.hours);
        this.yearClock.setLabel(this.year);
    }

    draw() {
        this.background.draw();
        this.secondsClock.draw();
        this.minutesClock.draw();
        this.hoursClock.draw();
        this.daysClock.draw();
        this.yearClock.draw();
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
        if (this.month!=this.date.getMonth()+1)
            this.monthChange = true;
        this.month = this.date.getMonth()+1;
        this.year = this.date.getFullYear();
        this.currentDayOfYear = this.dayOfTheYear(this.date);
    }

    daysInMonth (month, year) {
        var days31 = [1,3,5,7,8,10,12];
        var days30 = [4,6,9,11];

        if (days30.indexOf(month)!=-1)
            return 30;
        if (days31.indexOf(month)!=-1)
            return 31;

        if (month==2) {
            if (year%4==0 || (year%100==0 && year%400==0)) {
                return 29;
            }
            return 28;
        }
    }

    dayOfTheYear(date) {
        return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    }
}
