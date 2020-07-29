class Clock {

    constructor(radius, width, strokeStyle, currentTime, steps) {
        this.radius = radius;
        this.width = width;
        this.stroke = strokeStyle;
        this.currentTime = currentTime; //How full the clock is at the moment
        this.steps = steps; //How many steps are in the clock (ex: 60 in a minute, 24 in a day etc)

        this.offset = this.degreesToRadians(270); //Offset so that clock starts cycle at 00:00
    }

    draw() {
        var stepAngleDistance = 360/this.steps;
        var x, y;
        x = 1920*0.5;
        y = 1080*0.5;
        context.beginPath();
        context.arc(x, y, this.radius, this.offset, this.degreesToRadians(this.currentTime*stepAngleDistance)+this.offset);
        context.lineWidth = this.width;
        context.strokeStyle = this.stroke;
        context.stroke();
    }

    setCurrentTime(currentTime) {
        this.currentTime = currentTime;
    }

    degreesToRadians(degrees)
    {
        var pi = Math.PI;
        return degrees * (pi/180);
    }

}