class Clock {

    constructor(label, radius, width, strokeStyle, currentTime, steps) {
        this.label = label;
        this.radius = radius;
        this.width = width;
        this.stroke = strokeStyle;
        this.currentTime = currentTime; //How full the clock is at the moment
        this.steps = steps; //How many steps are in the clock (ex: 60 in a minute, 24 in a day etc)

        this.offset = this.degreesToRadians(270); //Offset so that clock starts its cycle at 00:00
    }

    setOffset(offset) {
        this.offset = this.degreesToRadias(offset);
    }

    draw() {
        var stepAngleDistance = 360/this.steps;
        var x, y, currentAngle;
        x = canvasWidth*0.5;
        y = canvasHeight*0.5;
        currentAngle = this.degreesToRadians(this.currentTime*stepAngleDistance)+this.offset;
        context.beginPath();
        context.arc(x, y, this.radius, this.offset, currentAngle);
        context.lineWidth = this.width;
        context.strokeStyle = this.stroke;
        context.stroke();

        context.font = "19px Georgia";
        context.fillStyle = "black";
        context.lineWidth = 8;
        context.strokeStyle = "#ffff99";
        context.textAlign = "center";
        context.save();
        context.translate(this.radius*Math.cos(currentAngle)+x, this.radius*Math.sin(currentAngle)+y);
        //var rotation = currentAngle;//-this.degreesToRadians(90);
        //if (rotation < (3*Math.PI)/2 && rotation > Math.PI/2)
            //var rotation = currentAngle+this.degreesToRadians(90);
        //context.rotate(rotation);
        context.strokeText(this.label, 0,0);
        context.fillText(this.label, 0,0);
        context.restore();
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