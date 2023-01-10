////Declare variables for wave////
let x = 0;
let y = 0;
let theta = 0;
let inc = 0.05;
let offset = 0; // the amount offset from beginning of wave
let amplitude;
let frequency;
let maxAngle;

function setup() {
    ////Adjust frequency of waves////
    amplitude = windowHeight / 12;
    frequency = windowWidth / 4;
    maxAngle = (windowWidth / frequency) * TWO_PI;
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
    noStroke();
    fill(255, 255, 255);
    ////Create wave////
    while (theta < maxAngle + offset) {
        y = sin(theta) * amplitude;
        ellipse(x, y + height / 2, 16);
        theta += 0.2;
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}
