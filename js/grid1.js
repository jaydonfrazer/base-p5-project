function setup() {
    const CELL_SIZE = 80;
    createCanvas(800, 800);
    stroke(0)
    strokeWeight(5)
    let x = 0;
    let y = 0;
    // let xVariation = 0;
    // let yVariation = 0;
    // let widthVariation = 0;
    // let heightVariation = 0;
    let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3];
    let currentWidth = random(sizes);
    let currentHeight = random(sizes);
    let colours = [color('#FF0000'),color('#00FF00'),color('#FFFC00'),color('#00FFFF'),color('#FFC000'),color('#FFFFFF'),color('#63666A')];
    while(y < height){
        while(x < width){
            fill(random(colours));

            // rect(x+random(-xVariation, xVariation), y+random(-yVariation, yVariation),
            // CELL_SIZE + random(-widthVariation, widthVariation), CELL_SIZE + random(-heightVariation, heightVariation));

            rect(x, y, currentWidth, currentHeight);
            x+= currentWidth;
            let availableWidth = width - x;
            currentWidth = random(sizes);
            //correct cell size if going outside canvas
            while(currentWidth > availableWidth){
                currentWidth -= CELL_SIZE;
            }
        }
        y+= currentHeight;
        let availableHeight = height - y;
        currentHeight = random(sizes);
                    //correct cell size if going outside canvas
        while(currentHeight > availableHeight){
            currentHeight -= CELL_SIZE;
        }
        x=0;
    }
}