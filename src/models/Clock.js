class Clock extends Model{

    constructor(spriteRoute, radius, currentTime, steps) {
        super(spriteRoute, 0, 0);
        this.radius = radius;

        this.currentTime = currentTime; //How full the clock is at the moment
        this.steps = steps; //How many steps are in the clock (ex: 60 in a minute, 24 in a day etc)

        this.offset = 270; //270º degree offset so that clock starts cycle at 00:00
    }

    draw() {
        var stepAngleDistance = 360/this.steps;
        var i, j, x, y, radians;
        for (i=this.offset; i<=this.currentTime*stepAngleDistance+this.offset; i++) {
            radians = this.degreesToRadians(i);
            x = (this.radius*Math.cos(radians)) - this.width/2 + 1920*0.5;
            y = (this.radius*Math.sin(radians)) - this.height/2 + 1080*0.5;
            context.beginPath();
            context.arc(x, y, 25, 0, 2 * Math.PI);
            context.fillStyle = 'green';
            context.fill();
            //context.drawImage(this.image, x-this.width/2+1920*0.5, y-this.height/2+1080*0.5);
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