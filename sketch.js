function setup() {
  createCanvas(800, 600);
  frameRate(1);
}

function draw() {
  if (second() == 0){
    console.log(minute());
  }

  background(225);
  translate(width / 2, height / 2);

  var w1 = 130;
  noStroke();
  fill('rgb(0,51,45)');
  arc(0, 0, w1, w1, -PI/2, -PI/2 +hour()*PI/24);
  fill('rgba(0,51,45,0.1)');
  arc(0, 0, w1, w1, -PI/2 + hour()*PI/24, -PI/2);

  var w2 = 50;
  var w0 = 10;
  noFill();
  stroke('rgb(1,87,155)');
  strokeWeight(w2);
  arc(0, 0, w1+w2, w1+w2, -PI/2, -PI/2 + minute()*PI/60);
  stroke('rgba(1,87,155,0.3)');
  strokeWeight(w2);
  arc(0, 0, w1+w2, w1+w2, -PI/2 + (minute()+1)*PI/60, -PI/2 -PI/60);

  var w3 = 30;

  stroke('rgba(4,93,86, 1)');
  strokeWeight(w3 - w0);
  arc(0, 0, w1+w2*2+w3, w1+w2*2+w3, -PI/2, -PI/2 + second()*PI/30);
  stroke('rgba(4,93,86, 0.5)');
  strokeWeight(w3 - w0);
  arc(0, 0, w1+w2*2+w3, w1+w2*2+w3, -PI/2 + second()*PI/30, -PI/2);

}

