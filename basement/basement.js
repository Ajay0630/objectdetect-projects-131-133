function backToHome() {
    window.location = "/index.html";
}

let img = "";
let staatus = false;
var objects = [];

function preload() {
    img = loadImage("");
}

function setup() {
    canvas = createCanvas(1000, 800);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("stetus").innerHTML = "Status: Detecting Objects...";
}

function modelLoaded() {
    console.log("CocoSSD is loaded. Reminder: CocoSSD = Common Object in Context Single Shot multibox Detection.");
    staatus = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(img, 0, 0, 1200, 800);
    if (staatus == true) {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("stetus").innerHTML = "Detected Objects!";
            percent = floor(Num(objects[i].confidence) * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            fill("red");
            NoFill();
            stroke("red");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}