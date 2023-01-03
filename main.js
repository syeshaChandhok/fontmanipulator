leftWristx=0;
rightWristx=0;
difference=0;
function preload() {


}
function setup() {
video=createCapture(VIDEO);
video.size(498,498);
canvas=createCanvas(698,498);
canvas.position(558,158);
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}
function draw (){
background("black");
fill("crimson");
textSize(difference);
text("syesha",50,300);
document.getElementById("square_sides").innerHTML="font size of the text will be - "+difference+"px";

}
function modelloaded(){
    console.log("syesha is done yay");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference=floor(leftWristx-rightWristx);
    }
}