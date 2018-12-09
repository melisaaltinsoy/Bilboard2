let angle=0;

var n1 = 0.3;
var n2 = 0.3;
var n3 = 0.3;
var m = 5;
var a = 1;
var b = 1;

var osc = 0;

function setup() {
  createCanvas(1600, 900, WEBGL);
  //slider = createSlider(0, 10, 5, 1);
}

function supershape(theta) {

  var part1 = (1 / a) * cos(theta * m / 4);
  part1 = abs(part1);
  part1 = pow(part1, n2);

  var part2 = (1 / b) * sin(theta * m / 4);
  part2 = abs(part2);
  part2 = pow(part2, n3);

  var part3 = pow(part1 + part2, 1 / n1);

  if (part3 === 0) {
    return 0;
  }

  return (1 / part3);
}


function draw() {
  m = map(sin(osc), -1, 1, 0, 10); //slider.value();
  osc += 0.02;

  background(0);
  translate(width / 2, height / 2);

  stroke(255);
  noFill();
  //translate(mouseX-width/2,mouseY-height/2);
  //rotateX(angle);
  rotateY(angle * 0.3);

  var radius = 100;

  var total = 200;
  var increment = TWO_PI / total;
  

  beginShape(POINTS);
  for (var angle1 = 0; angle1 < TWO_PI; angle1 += increment) {
    for (var angle2 = 0; angle2 < PI; angle2 += increment){
    
    var r1 = supershape(angle1);
    var r2 = supershape(angle2);
    var x = radius * r1 * cos(angle1) * r2 * cos(angle2);
    var y = radius * r1 * sin(angle1) * r2 * cos(angle2);
    var z = radius * r2 * sin(angle2);

    vertex(x, y, z);
    }
     angle += 0.07;
  }
  endShape(CLOSE);


}
