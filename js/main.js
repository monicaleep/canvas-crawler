console.log('hello')

//DOM refs
// h2 tag the movement tag
let movementDisplay = document.getElementById('movement')
// the Canvas
let game = document.getElementById('game')

// set some canvas configs
game.setAttribute('width',800);
game.setAttribute('height',400)

// context - all the stuff we draw
let ctx = game.getContext('2d');

// draw a box
const drawBox = (x,y,size, color) =>{
  ctx.fillStyle = color;
  ctx.fillRect(x,y,size,size);
}
// drawBox(200,100,200,'hotpink')
// // set a fill color
// ctx.fillStyle = '#FFF'
// // set a line color
// ctx.strokeStyle = 'red'
// // set a line width -> defaults to pixels
// ctx.lineWidth = 5
// // call the fillRect to draw the filled square
// ctx.fillRect(10,10,100,100)
// // call stokeRect to draw the line rectangle
// ctx.strokeRect(10,10,100,100)

// crawler constructor function
function Crawler(x,y,width,height,color){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.alive = true;
  this.render = function(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width,this.height)
  };
  return this;
}
// character refs
let ogre = new Crawler(300,100,80,120,'#bada55');
let hero = new Crawler(20,100,50,50,'hotpink')

const gameLoop = () => {
  // clear the Canvas
  ctx.clearRect(0,0,game.width,game.height)
  // display the x,y coordinates of our hero onto the DOM
  movementDisplay.innerText = `X:${hero.x}\nY:${hero.y}`
  // check if the ogre is alive and
  if(ogre.alive){
    // if so, render the ogre
    ogre.render()
  }
  // check for collision todo
  // render the hero
  hero.render()
}

const movementHandler = (e) =>{
  // when user presses w, hero moves up
  if(e.keyCode === 87 && hero.y>0){
      hero.y = hero.y - 5;
    //a moves left
  } else if (e.keyCode === 65 && hero.x>0){
      hero.x -= 5;
    // s is down 83
  } else if (e.keyCode === 83 && (hero.y+hero.height)<game.height){
      hero.y += 5;
    //d is right 68
  } else if (e.keyCode === 68 && (hero.x+hero.width)<game.width){
      hero.x += 5
  }
}

document.addEventListener('keydown',movementHandler)
// game.addEventListener('click',(e)=>{
//   // clear the gameboard
//   ctx.clearRect(0,0,game.width,game.height)
//   // render our hero
//   hero.render()
//   // move the ogre
//   ogre.x = e.offsetX;
//   ogre.y = e.offsetY;
//   //render the ogre
//   ogre.render()
// })

let runGame = setInterval(gameLoop, 60)

// Character refs
// let ogre = {
//   x: 500,
//   y: 500,
//   color: '#bada55',
//   width: 40,
//   height: 80,
//   alive: true,
//   render : function(){
//     console.log('test')
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x,this.y,this.width,this.height)
//   }
// }
