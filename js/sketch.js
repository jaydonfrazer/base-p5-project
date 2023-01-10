////-- Declare variables for wave --////
let x = 0;
let y = 0;
let theta = 0; // Measured angle
let inc = 0.05; // Increment added to move the wave forward
let offset = 0; // the amount offset from beginning of wave
let amplitude; // Range of the wave
let frequency; // Number of repeats in wave
let maxAngle;

function setup() {
    ////-- Adjust frequency of waves --////
    amplitude = windowHeight / 12;
    frequency = windowWidth / 4;
    maxAngle = (windowWidth / frequency) * TWO_PI;
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
    noStroke();
    let length = 30;
    ////-- Create wave --////
    while (theta < maxAngle + offset) {
        // amplitude = sin(theta)
        amplitude = ((theta-offset)/maxAngle) * (windowHeight/2);

        // create Sine Wave
        for (i = length; i > 0; i--) {
            y = sin(theta - (i * 0.05)) * amplitude;
            fill(0, 255/length * i, 0);
            //ellipse(x, y + height / 2, 16);
            square(x, height/2 + y, 16);
        }

        // create Cosine Wave
        for (i = length; i > 0; i--) {
            y = cos(theta - (i * 0.05)) * amplitude;
            fill(255, 255 - (255/length * i), 0);
            //ellipse(x, y + height / 2, 16);
            square(x, height/2 + y, 16);
            
        }

        theta += 0.2;
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}
