function setup() {
    const CELL_SIZE = 160;
    createCanvas(800, 800);
    //noStroke();
    stroke(0)
    strokeWeight(5)
    let x = 0;
    let y = 0;
    let xVariation = 0;
    let yVariation = 0;
    let widthVariation = 0;
    let heightVariation = 0;
    let colours = [color('#FF0000'),color('#00FF00'),color('#FFFC00'),color('#00FFFF'),color('#FF0000')];
    while(y < height){
        while(x < width){
            fill(random(colours));
            rect(x+random(-xVariation, xVariation), y+random(-yVariation, yVariation),
            CELL_SIZE + random(-widthVariation, widthVariation), CELL_SIZE + random(-heightVariation, heightVariation));
            x+=CELL_SIZE
        }
        y+=CELL_SIZE;
        x=0;
    }
}