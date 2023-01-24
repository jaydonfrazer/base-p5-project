function setup() {
    let colours = [color('#FF0000'), color('#00FF00'), color('#FFFC00'), color('#00FFFF'), color('#FFC000')];
    createCanvas(1200, 1200);
    background(255)
    let randomSize = Math.floor(random() * (14 - 4) + 4);
    //Check if size is even number
    while (randomSize % 2!==0){
        randomSize = Math.floor(random() * (14 - 4) + 4);
    }
    const CELL_SIZE = randomSize*10;
    console.log(CELL_SIZE);
    let x = 0;
    let y = 0;
    noStroke();

    //// -Randomize Color Palette before loop starts- ////


    //Set main color
    let randR = random(155);
    let randG = random(155);
    let randB = random(155);

    let Color1 = [randR, randG, randB];
    let Color2 = [randR*0.75, randG*0.75, randB*0.75];
    let Color3 = [randR*2, randG*2, randB*2];

    
    while (y < height) {
        while (x < width) {

            //// -Randomizations- ////
            let squareChoice;
            let squareChance = Math.random();
            // 60% Chance for a plain square
            if (squareChance < 0.6){
                squareChoice = 0;
            }
            // 40% Chance for a detailed square
            else
            {
                squareChoice = Math.floor(random(4)) + 1;
            }

            let colorChoice;
            let colorChance = Math.random();
            //40% Chance for Color1
            if (colorChance < 0.4){
                colorChoice = 0;
            }
            //20% Chance for Color2
            else if (colorChance < 0.6){
                colorChoice = 1;
            }
            // 20% Chance for Color3
            else{
                colorChoice = 2;
            }

            let colorVariation = 15;

            let randSize = random() * (CELL_SIZE/2 - CELL_SIZE/4) + CELL_SIZE/4;

            //// -Settings- ////
            let offset = (CELL_SIZE - randSize) / 2;
            let mainColor;
            let secondaryColor;

            //Select Color
            switch (colorChoice) {
                case 0:
                    mainColor = color(Color1[0]+random(-colorVariation, colorVariation), Color1[1]+random(-colorVariation, colorVariation), Color1[2]+random(-colorVariation, colorVariation));
                    secondaryColor = color(Color1[0]*0.75+random(-colorVariation, colorVariation), Color1[1]*0.75+random(-colorVariation, colorVariation), Color1[2]*0.75+random(-colorVariation, colorVariation));
                    break;
                case 1:
                    mainColor = color(Color2[0]+random(-colorVariation, colorVariation), Color2[1]+random(-colorVariation, colorVariation), Color2[2]+random(-colorVariation, colorVariation));
                    secondaryColor = color(Color2[0]*0.75+random(-colorVariation, colorVariation), Color2[1]*0.75+random(-colorVariation, colorVariation), Color2[2]*0.75+random(-colorVariation, colorVariation));
                    break;
                case 2:
                    mainColor = color(Color3[0]+random(-colorVariation, colorVariation), Color3[1]+random(-colorVariation, colorVariation), Color3[2]+random(-colorVariation, colorVariation));
                    secondaryColor = color(Color3[0]*0.75+random(-colorVariation, colorVariation), Color3[1]*0.75+random(-colorVariation, colorVariation), Color3[2]*0.75+random(-colorVariation, colorVariation));
                    break;
            }

            //Select Square Pattern
            switch (squareChoice) {
                case 0:
                    fill(mainColor)
                    rect(x, y, CELL_SIZE, CELL_SIZE);
                    break;
                case 1:
                    fill(mainColor)
                    rect(x, y, CELL_SIZE, CELL_SIZE);
                    fill(secondaryColor)
                    ellipse(x + CELL_SIZE / 2, y + CELL_SIZE / 2, CELL_SIZE-randSize, CELL_SIZE-randSize);
                    fill(mainColor)
                    ellipse(x + CELL_SIZE / 2, y + CELL_SIZE / 2, CELL_SIZE / 2 - randSize+randSize/2, CELL_SIZE / 2 - randSize+randSize/2);
                    break;
                case 2:
                    fill(mainColor)
                    rect(x, y, CELL_SIZE, CELL_SIZE);
                    fill(secondaryColor)
                    rect(x + offset, y + offset, randSize, randSize);
                    break;
                case 3:
                    fill(mainColor)
                    rect(x, y, CELL_SIZE, CELL_SIZE);
                    fill(secondaryColor)
                    ellipse(x + CELL_SIZE / 2, y + CELL_SIZE / 2, CELL_SIZE-randSize, CELL_SIZE-randSize);
                    break;
                case 4:
                    fill(mainColor)
                    rect(x, y, CELL_SIZE, CELL_SIZE);
                    fill(secondaryColor)
                    triangle(x, y, x+CELL_SIZE, y+CELL_SIZE, x, y+CELL_SIZE);
                    break;
            }
            x += CELL_SIZE;
        }
        y += CELL_SIZE;
        x = 0;
    }
}