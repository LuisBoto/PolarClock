class Clock extends Model{

    constructor(spriteRoute, radius, currentTime, steps) {
        super(spriteRoute, 0, 0);
        this.radius = radius;

        this.currentTime = currentTime; //How full the clock is at the moment
        this.steps = steps; //How many steps are in the clock (ex: 60 in a minute, 24 in a day etc)
    }

    draw() {
        var stepAngleDistance = 360/this.steps;
        var i, j, x, y, radians;
        for (i=0; i<=this.currentTime*stepAngleDistance; i++) {
            radians = this.degreesToRadians(i);
            x = this.radius*Math.cos(radians);
            y = this.radius*Math.sin(radians);
            context.drawImage(this.image, x-this.width/2+1920*0.5, y-this.height/2+1080*0.5);
        }
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