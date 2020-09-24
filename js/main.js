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
game.addEventListener('click',(e)=>{
  ogre.x = e.offsetX;
  ogre.y = e.offsetY;
  ogre.render()
})

// Character refs
let ogre = {
  x: 500,
  y: 500,
  color: '#bada55',
  width: 40,
  height: 80,
  alive: true,
  render : function(){
    console.log('test')
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width,this.height)
  }
}
