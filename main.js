satarn = "";
objects = [];



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    obj_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting object"
}
function preload() {
    img = loadImage("dog_cat.jpg");
}
function draw() {
    image(img, 0, 0, 640, 420);
    if (satarn != "") {

        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status = detected";

            fill("red");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent +"%", objects[i].x+13, objects[i].y+15);
            stroke("red");
            noFill();
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }


    }
}

function modelLoaded() {
    console.log("model is loaded");
    satarn = true;
    obj_detector.detect(img, getResult);

}
function getResult(error, results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results);
        objects = results;
    }
}
