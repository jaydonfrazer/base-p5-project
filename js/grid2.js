let textureArray = [];
let colours;

function preload() {
    let texturesNum = 6;
    for (let i = 1; i <= texturesNum; i++) {
        //let texture = loadImage("images/pattern"+i+".png");// Concatenation
        let t = loadImage(`images/pattern${i}.png`);// backticks are 'template literals' and dollar sign curly brace is string interpolation
        textureArray.push(t); // Adds texture to textureArray
    }
}
function setup() {
    let colours = [color('#FF0000'), color('#00FF00'), color('#FFFC00'), color('#00FFFF'), color('#FFC000'), color('#FFFFFF'), color('#63666A')];
    let xVariation = 5;
    let yVariation = 5;
    let widthVariation = 5;
    let heightVariation = 15;
    createCanvas(800, 800);
    background(255)
    const CELL_SIZE = 80;
    let x = 0;
    let y = 0;
    noStroke();
    while (y < height) {
        while (x < width) {
            tint(random(colours));
            let t = random(textureArray);
            push()
            translate(x+CELL_SIZE/2, y+CELL_SIZE/2);
            rotate(random(0.05));
            image(t, -CELL_SIZE/2+random(-xVariation, xVariation), -CELL_SIZE/2+random(-yVariation, yVariation), CELL_SIZE + random(-widthVariation, widthVariation), CELL_SIZE + random(-heightVariation, heightVariation));
            pop()
            x += CELL_SIZE;
        }
        y += CELL_SIZE;
        x = 0;
    }
}