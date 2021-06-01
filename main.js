function preload(){

}

function setup(){
    console.log("canvas enabled");
    canvas = createCanvas(600, 480);
    canvas.position(580, 400);

    video = createCapture(VIDEO); 
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on("pose", gotPoses); 
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function snapshot(){
    save("filtered_image.png");
} 

classifier = ml5.imageClassifier("MobileNet", modelLoaded); 

function modelLoaded(){ 
    console.log("Model loaded!");
} 

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results); 
        console.log("Nose x = " + results[0].pose.nose.x); 
        console.log("Nose y = " + results[0].pose.nose.y); 
    }
}