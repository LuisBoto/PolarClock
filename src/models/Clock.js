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

    draw() {
        let stepAngleDistance = 360/this.steps;
        let x, y, currentAngle;
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
        context.miterLimit = 2;
        context.strokeStyle = "#ffff99";
        context.textAlign = "center";
        context.save();
        context.translate(this.radius*Math.cos(currentAngle)+x, this.radius*Math.sin(currentAngle)+y);
        context.strokeText(this.label, 0,0);
        context.fillText(this.label, 0,0);
        context.restore();
    }

    setCurrentTime(currentTime) {
        this.currentTime = currentTime;
    }

    setSteps(newSteps) {
        this.steps = newSteps;
    }

    setLabel(newLabel) {
        this.label = newLabel;
    }

    degreesToRadians(degrees)
    {
        let pi = Math.PI;
        return degrees * (pi/180);
    }

}