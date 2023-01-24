//Grid base

function setup() {
    const CELL_SIZE = 80;
    const CanvasSize = 800;
    createCanvas(CanvasSize, CanvasSize);
    strokeWeight(2)
    let x = 0;
    let y = 0;
    let randomRotation = 0;
    let transparency = 0;
    let xVariation = 0;
    let yVariation = 0;
    let availableWidth = width - x;
    let availableHeight = height - y;

    let squareAmount = (CanvasSize/CELL_SIZE-1) * (CanvasSize/CELL_SIZE-1);
    console.log(squareAmount);
    //Set up the grid
    //Check if coordinates are inbetween the min and max width of the canvas
    while (y < height && y+CELL_SIZE < availableHeight) {
        while (x < width && x+CELL_SIZE < availableWidth) {
            fill(0, 0, 0, 0);
            stroke(255, 255, 255, 255 - transparency)
            push();
            translate(x + CELL_SIZE / 2, y + CELL_SIZE / 2);
            rotate(random() * (randomRotation - -randomRotation) + -randomRotation);
            rect(-CELL_SIZE/2 + CanvasSize/squareAmount + random() * (xVariation - -xVariation) + -xVariation, -CELL_SIZE/2 + CanvasSize/squareAmount + random() * (yVariation - -yVariation) + -yVariation, CELL_SIZE, CELL_SIZE);
            pop();

            //Progressively increase variables each loop

            randomRotation += 0.005;
            xVariation += 0.1;
            yVariation += 0.1;
            transparency += 255 / squareAmount; //How much to have for transparency to taken off each square

            x += CELL_SIZE;
        }
        y += CELL_SIZE;
        x = 0;
    }
}