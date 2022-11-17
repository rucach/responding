status = false;
image = " ";
image1 = " ";
image2 = " ";
image3 = " ";
array = [];

function preload(){
    image = loadImage("MOCA-Betterhomeindia-min.jpeg");
    image1 = loadImage("bottle.jpeg");
    image2 = loadImage("desk.jpeg");
    image3 = loadImage("pencil.jpeg");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    cocoSSD = ml5.imageClassifier("cocoSSD", modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function modelLoaded(){
    status = true;
    classifier = ml5.imageDetector("cocossd", gotResults);
}

function gotResults(results, error){
    if(error){
        console.log(error);
    }
    console.log(results);
    array = results;
}