img = "";
Status = "";


function preload(){
    
img = loadImage("bedroom.png")
}


function setup(){
    canvas = createCanvas(640, 400)
    canvas.center()
    objectDetector =  ml5.objectDetector('cocossd', modelLoaded);
    
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function modelLoaded(){
console.log("ModelLoaded!")
Status = true;
objectDetector.detect(img, gotResult);

}

function gotResult(error, results){
if (error) {

    console.log(error);
}
console.log(results);
}