var wi = window.innerWidth;
var hi = window.innerHeight;
var sound = new Array();
var time = new Array();
var sounds;
var soundName = new Array();
var count = 0;
var max;
var b = 1;

function preload() {
  soundFormats('mp3');
  sounds = loadStrings("Sounds/songs.txt");
}

function setup() {
  createCanvas(wi, hi);
  background('#ffffff');
  //sound[0].setVolume(0.5);
  lodeSound();
  max = sounds.length;

}

function draw() {

}

function mouseClicked(){
  if(b == 1){
    console.log("count ED: " + count + "  name: " + sounds[count] + " b: " + b);
    if(count == max-2){
      count = 0;
      action();
    } else {
      action();
      ++count;
    }
  }
  // delayTime(time[count]);
  // console.log("MAX: " + max + "   " + sounds.length);
}

function action(){
  b = 0;
  sound[count].play();
  setTimeout(changeColor, time[count]*1000);

}

function changeColor(){
  switch(count) {
  case 0:
    background('#F08080');
    break;
  case 1:
    background('#FF0066');
    break;
  case 2:
    background('#CD2626');
    break;
  case 3:
    background('#A52008');
    break;
  case 4:
    background('#DA4300');
    break;
  case 5:
    background('#FFA500');
    break;
  case 6:
    background('#FFD700');
    break;
  case 7:
    background('#9ACD32');
    break;
  case 8:
    background('#00FF7F');
    break;
  case 9:
    background('#32CD32');
    break;
  case 10:
    background('#008080');
    break;
  case 11:
    background('#4682B4');
    break;
  case 12:
    background('#4169E1');
    break;
  case 13:
    background('#BA55D3');
    break;
  case 14:
    background('#8B008B');
    break;
  case 15:
    background('#C71585');
    break;
  case 16:
    background('#B22222');
    break;
  case 17:
    background('#8B0000');
    break;
  case 18:
    background('#000000');
    break;
  case 19:
    background('#FAB8AF');
    break;
  default:
    background('#000000');
  }

  b = 1;

}

function lodeSound(){
  //console.log("sounds: " + sounds);

  //soundName = sounds.split(',');
  //console.log("array: " + sounds[0]);
  for(var i = 0; i < sounds.length-1; ++i){

    var tempArr = sounds[i].split("-");

    //console.log("tempArr: " + tempArr);
    sound[i] = loadSound(tempArr[0]);
    time[i] = tempArr[1];
    //console.log("Time: " + time[i]);
  }
}
