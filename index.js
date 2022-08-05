let playerState = "Cours";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function (e) {
  playerState = e.target.value;
});
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

//numero frame par ligne
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
  {
    name: "Attends",
    frames: 7,
  },
  {
    name: "Saute_vers_le_haut",
    frames: 7,
  },
  {
    name: "Tombe",
    frames: 7,
  },
  {
    name: "Cours",
    frames: 9,
  },
  {
    name: "Etourdi",
    frames: 11,
  },
  {
    name: "Coucher",
    frames: 5,
  },
  {
    name: "Roule",
    frames: 7,
  },
  {
    name: "Mords",
    frames: 7,
  },
  {
    name: "KO",
    frames: 12,
  },
  {
    name: "Ecoute",
    frames: 4,
  },
];

animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});

console.log(spriteAnimations[playerState].loc.length);
//avancer
let mouvX = 0;

const playerImage = new Image();
playerImage.src = "images/shadow_dog.png";

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position =
    Math.floor(gameFrame / staggerFrames) %
    spriteAnimations[playerState].loc.length;
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;
  //ctx.drawImage(image,sourcex,sourcey,sourcew,sourceh, placex,placey,placew,placeh)
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
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

  mouvX++;
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
