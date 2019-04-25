var hi = screen.height - 20;
var wi = screen.width;
var haf = hi/2;
var hafW = wi/2;

var moon = 400;

var b = 1;
var count = 0;
var count2 = 0;
var groth = 0;
var hedGro = 0;
var noseGro = 0;
var borderGro = 0;
//randomSeed();

function preload(){
  img1 = loadImage('filnalMouth.png');
}

function setup() {
  createCanvas(wi, hi);
}

function draw() {
  background(1,13,38);
  strokeWeight(0);
  noFill();


  var watingTime = 80;

  if(count2 > 80){
    groth =  count2/2 - watingTime/2;
  } else {
    groth = 0;
  }

  hedGro = groth;

  //Big in the midel
  fill(143,196,217);
  ellipse(hafW,haf,moon/1.8 + hedGro,moon/1.8 + hedGro);
  noFill();

  //noseGro = groth;
  //print("Nose gr: " + noseGro);

  //Nose
  fill('#6092A6'); //'#517C8C'
  quad(   hafW,                      //Upper corner x
          haf-moon/10 - noseGro/2,      //Upper corner y
          hafW+moon/20 + noseGro/5,     //right corner x
          haf+moon/20,               //right corner y
          hafW,                      //middel down x
          haf+moon/10 + noseGro/4,    //middel down y
          hafW-moon/20 - noseGro/5,    //left x
          haf+moon/20);             //lesf y
  noFill();
  //Nose Part 2
  fill('#517C8C'); //'#517C8C'
  triangle( hafW,haf-moon/10 ,
           hafW+moon/20,haf+moon/20  ,
          hafW,haf+moon/10);
  noFill();

  //Ease
  fill(38,93,115);
  var pito = PI+ QUARTER_PI/2
  arc(hafW + moon/(400/55) ,haf- moon/80, moon/(400/60), moon/(400/60), pito, PI - pito , CHORD);
  arc(hafW - moon/(400/55),haf -moon/80 , moon/(400/60), moon/(400/60), pito, PI - pito , CHORD);

  noFill();


    //----------------------------------



  if(b == 0){
    imageMode(CENTER);
    image(img1,wi/2,hi/2+62);
    count2 += 1;
  }
  //print("Count2: " + count2);
  //*/




  //------------------------------------------------------------------

  watingTime = 300;


  if(count2 > watingTime){
    movingSides =  (count2 - watingTime)/5;
    /*if((count2-watingTime) < 10){
      borderGro = (count2 - watingTime)/10;
    }*/
  } else {
    movingSides = 0;
    borderGro = 0;
  }


  //Top horisontal
fill(69,146,166);
  var side = 20;
  var sice = 15 + borderGro;
  var space = 20;
  for(var i = 0; i < wi + 100; i += space){
    ellipse(i,side - movingSides,sice,sice);
  }
  //Left
  for(i = 0; i < hi + 100; i += space){
    ellipse(side - movingSides,i,sice,sice);
  }
  //Right
  for(i = 0; i < hi + 100; i += space){
    ellipse(wi-side + movingSides,i ,sice,sice);
  }
  //Botom
  for(i = 0; i < wi + 100; i += space){
    ellipse(i,hi-side + movingSides ,sice,sice);
  }
  noFill();


}

function mousePressed() {

  b = 0;
  /*if (b == 1){
    b = 0;
  } else {
    b = 1;
  }*/
  return false;
}

function mouseReleased(){
  count2 = 0;
  b = 1;
  return false;
}
