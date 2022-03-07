// Canvas & context
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let minimumResize = 1;
let canvasWidth = 1920;
let canvasHeight = 1080;

let layer;
let mainLayer;

function startGame() {
    mainLayer = new MainLayer();
    layer=mainLayer;
    setInterval(loop, 1000 / 30);
}

function loop(){
    layer.update();
    layer.draw();
}

// Resize
window.addEventListener('load', resize, false);

function resize() {
    console.log("Resize")
    let resizeWidth = window.innerWidth / canvas.width;
    let resizeHeight = window.innerHeight / canvas.height;

    minimumResize = Math.min(resizeWidth, resizeHeight);

    canvas.width = canvas.width*minimumResize;
    canvas.height = canvas.height*minimumResize;

    context.scale(minimumResize, minimumResize);
}
