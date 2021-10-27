nose_x = 0;
nose_y = 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/htVnFHzY/580b57fbd9996e24bc43bed5.png');
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 400, 400);
    image(clown_nose, nose_x, nose_y, 30, 30);
}

function take_snapshot(){
    save('captured_image.png');   
}

function modelLoaded(){
    console.log("PoseNet is initiated");
}

function gotPoses(results){
    if(results.length > 0){
        nose_x = results[0].pose.nose.x - 10;
        nose_y = results[0].pose.nose.y - 10;
        console.log(results);
        console.log("nose x = "+nose_x);
        console.log("nose y = "+nose_y);
    }
}

