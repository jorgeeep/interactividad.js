function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    //background(120, 10);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
    noStroke();
    //stroke (0)
    const red = Math.abs(Math.sin(frameCount * 0.01)) * 255;
    const green = Math.abs(Math.sin(frameCount * 0.005)) * 255;
    const blue = Math.abs(Math.sin(frameCount * 0.009)) * 255;
    fill(red,green,blue);
    //const size = random(50, 100);
    const size = Math.abs(Math.sin(frameCount * 0.01)) * 100;
    ellipse(mouseX, mouseY, size, size);
}