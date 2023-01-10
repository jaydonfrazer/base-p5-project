function setup() {
    createCanvas(windowWidth, windowHeight);
    ////Declare variables for sine wave////
    let x = 0;
    let y = 0;
    //Curren angle
    let theta = 0;

    ////Adjust frequency of waves////
    let amplitude = windowHeight/12;
    let frequency = windowWidth/4;
    let maxAngle = (windowWidth/frequency) * TWO_PI;

    ////Create wave////
    while(theta < maxAngle){
        y = sin(theta) * amplitude;
        ellipse(x, y + height/2, 16);
        theta += 0.2;
        x = (theta/maxAngle) * windowWidth;
    }
}
function draw() {

}
