let textureArray = [];
function preload(){
    let texturesNum = 6;
    for(let i = 1; i <= texturesNum; i++){
        //let texture = loadImage("images/pattern"+i+".png");// Concatenation
        let t = loadImage(`images/pattern${i}.png`);// backticks are 'template literals' and dollar sign curly brace is string interpolation
        textureArray.push(t); // Adds texture to textureArray
    }
}
function setup(){
    createCanvas(800,800);
    const CELL_SIZE = 80;
    let x = 0;
    let y = 0;
    noStroke();
    while(y < height){
        while(x < width){
            let t = random(textureArray);
            image(t, x, y, CELL_SIZE)
            x+=CELL_SIZE;
        }
        y+=CELL_SIZE;
        x=0;
    }
}