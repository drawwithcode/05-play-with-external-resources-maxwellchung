var song;
var bg;
var bg2;

function preload() {
  song = loadSound('assets/wtfwtf.mp3');
  bg = loadImage("assets/walk1.jpg");
  bg2 = loadImage("assets/walk2.jpg");
}

function setup() {
  createCanvas(1920, 1080);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  background(0,255,0);
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    background(bg);
  } else {
    song.play();
    background(bg2);
  }
}

function draw() {
  background(bg);

  stroke(226, 204, 0);
  line(0, y, width, y);

  y++;
  if (y > height) {
    y = 0;
  }
}
