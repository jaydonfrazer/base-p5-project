function setup() {
    let colours = [color('#FF0000'), color('#00FF00'), color('#FFFC00'), color('#00FFFF'), color('#FFC000')];
    createCanvas(800, 800);
    background(255)
    const CELL_SIZE = 80;
    let x = 0;
    let y = 0;
    noStroke();
    while (y < height) {
        while (x < width) {
            let randomChoice = Math.floor(random(3));

            let randR = random(255);
            let randG = random(255);
            let randB = random(255);

            let randSize = random(CELL_SIZE);
            let offset = (CELL_SIZE - randSize) / 2;

            let mainColor = color(randR, randG, randB);
            let secondaryColor = color(randR-50, randG-50, randB-50)

            switch (randomChoice) {
                case 0:
                    fill(mainColor)
                    rect(x, y, CELL_SIZE, CELL_SIZE);
                    fill(secondaryColor)
                    ellipse(x + CELL_SIZE / 2, y + CELL_SIZE / 2, CELL_SIZE-randSize, CELL_SIZE-randSize);
                    fill(mainColor)
                    ellipse(x + 40, y + 40, CELL_SIZE / 2 - randSize, CELL_SIZE / 2 - randSize);
                    break;
                case 1:
                    fill(mainColor)
                    rect(x, y, CELL_SIZE, CELL_SIZE);
                    break;
                case 2:
                    fill(mainColor)
                    rect(x, y, CELL_SIZE, CELL_SIZE);
                    fill(secondaryColor)
                    rect(x + offset, y + offset, randSize, randSize);
                    break;
            }
            x += CELL_SIZE;
        }
        y += CELL_SIZE;
        x = 0;
    }
}