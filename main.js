tintColor = ""
function preload(){

}
function setup(){
  canvas = createCanvas(650, 600)
    canvas.position(190,230)
    video = createCapture(VIDEO)
video.hide()
}
function draw(){
image(video, 0, 0, 650, 600)
tint(tintColor)
}
function take_snapshot(){
 save("YourImage.png");   
}
function applyFilter(){
tintColor = document.getElementById("filterColor").value 
}