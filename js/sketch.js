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
    ////Create wave////
    while (theta < maxAngle + offset) {
        // Sine wave 4
        y = sin(theta - 0.6) * amplitude;
        fill(0, 50, 0);
        ellipse(x, y + height / 2, 16);
        // Sine wave 3
        y = sin(theta - 0.4) * amplitude;
        fill(0, 100, 0);
        ellipse(x, y + height / 2, 16);
        // Sine wave 2
        y = sin(theta - 0.2) * amplitude;
        fill(0, 150, 0);
        ellipse(x, y + height / 2, 16);
        // Sine wave 1
        y = sin(theta) * amplitude;
        fill(0, 255, 0);
        ellipse(x, y + height / 2, 16);
        // Cosine wave
        y = cos(theta) * amplitude;
        fill(255, 255, 0);
        ellipse(x, y + height / 2, 16);

        theta += 0.2;
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}
