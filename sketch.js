var x = 0;
var y = 0;



function setup() {
    createCanvas(windowWidth,windowHeight);
    textFont("Knewave");
    textSize(30);
}

function draw() {

    background(30,30,30);
    
// TEXT    
    
    text("GOODNIGHT STARS", 50, 75, 500, 200);
    text("GOODNIGHT AIR", 50, 125, 500, 200);
    text("GOODNIGHT NOISES EVERYWHERE", 50, 175, 500, 200);
    
// MOON    
    
    fill(220);
    ellipse(windowWidth,0,250,250)
    
    stroke(30);
    noFill();
    ellipse(windowWidth-75,35,40,40)
    ellipse(windowWidth-5,5,50,50)
    ellipse(windowWidth-50,110,55,55)

// WINDOW    
    
    if (x < 200) {
        noStroke();
        noFill();
    } else {
        noStroke();
        fill(255,200,0);
        rect(232,500,36,30);    
    }
    
    if (x > 300) {
        fill(30);
        rect(232,500,36,30);
    } 
    
// HOUSE    
    
    stroke(220);
    strokeWeight(10);
    line(200,600,200,500);
    line(300,600,300,500);
    line(200,600,300,600);
    line(180,510,250,470);
    line(320,510,250,470);
    line(215,485,215,470);
    line(200,580,0,580);
    line(300,580,1900,580);
    line(232,500,270,500);
    line(270,500,270,530);
    line(270,530,232,530);
    line(232,530,232,500);
    
    
    
//-------------------------------------------    

// STYLE AND EASING FOR ANXIOUS DUDE
    
    noStroke();
    fill(220);
    
    
    var easing = 0.01;
    var diffX = mouseX - x;
    x += diffX * easing;
    var diffY = mouseY - y;
    y += diffY * easing;
    
//-------------------------------------------    
  
// ANXIOUS DUDE    
    

    if (x < 200) {
        ellipse(x, random(530,560), random(30,45), random(30,45));
    } else {
        ellipse(x, 560, 37, 37);    
    }
    
    if (x > 300) {
        fill(30);
        rect(305,515,2000,60);
    }
    
    if (x > 300) {
        fill(220);
        ellipse(x, random(530,560), random(30,45), random(30,45));
    } 
    
}

