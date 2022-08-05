const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

//modif de la taille du canvas (par defaut 300/150)
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
//taille des images sur la feuille de sprite
// largeur de la feuille 6876  / nbr d'image 12 = 573
const spriteWidth = 575;
//hauteur de la feuille   5230 /nbr d'image 10 = 523
const spriteHeight = 523;
//numero de frame
let frameX = 0;
let frameY = 3;

//numero frame par ligne
let gameFrame = 0;
const staggerFrames = 5;

//avancer
let mouvX = 0;

const playerImage = new Image();
playerImage.src = "images/shadow_dog.png";

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  //ctx.drawImage(image,sourcex,sourcey,sourcew,sourceh, placex,placey,placew,placeh)
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    -300 + mouvX,
    300,
    CANVAS_WIDTH / 2,
    CANVAS_HEIGHT / 2
  );
  if (mouvX++ > 900) {
    mouvX = 0;
  }
  if (gameFrame % staggerFrames == 0) {
    if (frameX < 8) {
      frameX++;
    } else {
      frameX = 0;
    }
  }

  mouvX++;
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
