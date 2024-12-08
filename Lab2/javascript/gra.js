const mycanvas = document.getElementById("myCanvas");
mycanvas.width = 800;
mycanvas.height = 500;
const cursor = document.querySelector("#replacePointer");
const ctx = mycanvas.getContext("2d");
ctx.font = "100px Arial";
numberOfZombies = 6;

function getRandomInt(min, max) {
  randInt = 1 * min + Math.random() * (max - min + 1);
  randInt = Math.floor(randInt);
  return randInt;
}

class Points {
  constructor(points = 0) {
    this.points = points;
  }
  draw() {
    ctx.fillText(this.points, 550, 80, 240);
  }
}

class Health {
  constructor(lives = 3) {
    this.lives = lives;
    this.imageFull = new Image();
    this.imageFull.src = "./images/full_heart.png";
    this.imageEmpty = new Image();
    this.imageEmpty.src = "./images/empty_heart.png";
  }

  draw() {
    if (!this.imageFull || !this.imageEmpty) {
      return;
    }

    for (let i = 1; i < 4; i++) {
      if (i > this.lives) {
        ctx.save();
        ctx.scale(0.073, 0.073);
        ctx.drawImage(this.imageEmpty, (i - 0.9) * 700 * 1.8, 0);
        ctx.restore();
      } else {
        ctx.save();
        ctx.scale(0.2, 0.2);
        ctx.drawImage(this.imageFull, (i - 0.9) * 255 * 1.8, 0);
        ctx.restore();
      }
    }
  }
}

class Sprite {
  constructor(x, y, imageSrc) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = imageSrc;
  }
  draw() {
    if (!this.image) {
      return;
    }
    ctx.drawImage(this.image, this.x, this.y);
  }
  update() {
    this.draw();
  }
}

class Zombie {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 0; //50-200
    this.speed = 0; //1-10
    this.image = new Image();
    this.image.src = "./images/walkingdead.png";
    this.frame = 0;
    this.alive = false;
    this.timeToGo = getRandomInt(0, 100);
  }
  ressurect() {
    this.x = mycanvas.width + 10;
    this.size = getRandomInt(50, 190);
    this.y = mycanvas.height - (3 * this.size) / 2 - getRandomInt(0, 160);
    this.speed = getRandomInt(4, 16);
    this.alive = true;
    this.timeToGo = getRandomInt(0, 80);
  }
  draw() {
    //ctx.fillStyle = "red";
    //ctx.fillRect(this.x, this.y, this.size, (3 * this.size) / 2);
    ctx.drawImage(
      this.image,
      this.frame * 200,
      0,
      200,
      312,
      this.x,
      this.y,
      this.size,
      (3 * this.size) / 2
    );
    this.frame++;
    this.frame = this.frame % 10;
  }

  update() {
    this.draw();
    if (this.x < -this.size && this.alive) {
      health.lives--;
      this.alive = false;
    } else {
      this.x = this.x - this.speed;
    }
  }
}

const points = new Points();
const health = new Health();
const background = new Sprite(0, 0, "./images/board-bg.jpg");
let zombies = [];
for (let i = 0; i < numberOfZombies; i++) {
  zombies.push(new Zombie());
}
const interval = setInterval(animate, 50);

function animate() {
  ctx.save();
  ctx.scale(0.5, 0.5);
  background.update();
  ctx.restore();
  health.draw();
  points.draw();
  if (health.lives == 0) {
    health.draw();
    clearInterval(interval);
    ctx.font = "200px Arial";
    ctx.fillText("Koniec gry", 100, 300, 600);
    ctx.font = "100px Arial";
    playMusic();
    setTimeout(pytanie, 1000);
    return;
  }
  for (let i = 0; i < numberOfZombies; i++) {
    if (zombies[i].alive) {
      zombies[i].update();
    } else if (zombies[i].timeToGo < 0) {
      zombies[i].ressurect();
    } else {
      zombies[i].timeToGo--;
    }
  }
}

function playMusic() {
  var audio = new Audio("./images/sad-music.mp3");
  var promise = audio.play();

  if (promise !== undefined) {
    promise
      .then((_) => {
        // Autoplay started!
      })
      .catch((error) => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
      });
  }
}

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursor.style.transform = `translate(${mouseX - 907}px, ${mouseY - 190}px)`;
};
window.addEventListener("mousemove", moveCursor);

function shot(canvas, event) {
  trafienie = false;
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  //console.log("Coordinate x: " + x, "Coordinate y: " + y);
  for (let i = numberOfZombies - 1; i > -1; i--) {
    if (
      zombies[i].alive &&
      x > zombies[i].x &&
      x < zombies[i].x + zombies[i].size &&
      y > zombies[i].y &&
      y < zombies[i].y + (3 * zombies[i].size) / 2
    ) {
      zombies[i].alive = false;
      points.points = points.points + 20;
      trafienie = true;
      break;
    }
  }
  if (!trafienie) {
    points.points = points.points - 5;
  }
}

document.addEventListener("mousedown", function (e) {
  shot(mycanvas, e);
});

function restart() {
  health.lives = 3;
  points.points = 0;
  for (let i = 0; i < numberOfZombies; i++) {
    zombies[i].alive = false;
    zombies[i].timeToGo = getRandomInt(0, 100);
  }
  interval = setInterval(animate, 50);
}
function pytanie() {
  if (confirm("Czy chcesz spróbować ponownie?")) {
    restart();
  }
}
