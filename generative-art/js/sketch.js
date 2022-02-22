let canvasSize = 1500

function setup() {
  createCanvas(canvasSize, canvasSize);
  noLoop();
}

function getRandInt(min=-canvasSize,max=1000) {
  return Math.floor(Math.random()*(max-min+1)) + min;
}

function chooseBlend(){
  let i = getRandInt(1,3)

  if(i==1){
  blendMode(LIGHTEST);
  }
  if(i==2){
  blendMode(SOFT_LIGHT)
  }
  if(i==3){
  blendMode(SCREEN)
  }
}




function symbolsLine() {
  let i=0;
  let startX=getRandInt(-canvasSize/2,canvasSize/2)+50;
  let endX=canvasSize-startX;
  let yCoord=getRandInt(-100,-50)+10,
      size=getRandInt(10,50);
      yMirror=canvasSize-yCoord;




  let theOne = getRandInt(1,15)
  let glyph
  if (theOne == 1) {
    glyph='¥';
  }
  if (theOne == 2) {
    glyph='¶';
  }
  if (theOne == 3) {
    glyph='©';
  }
  if (theOne == 4) {
    glyph='£';
  }
  if (theOne == 5) {
    glyph='§';
  }
  if (theOne == 6) {
    glyph='$';
  }
  if (theOne == 7) {
    glyph='%';
  }
  if (theOne == 8) {
    glyph='&';
  }
  if (theOne == 9) {
    glyph='@';
  }
  if (theOne == 10) {
    glyph='☺';
  }
  if (theOne == 11) {
    glyph='a baka';
  }
  if (theOne == 12) {
    glyph='☆';
  }
  if (theOne == 13) {
    glyph='アニメ';
  }
  if (theOne == 14) {
    glyph='大';
  }
  if (theOne == 15) {
    glyph='様';
  }

  let whichFill=1;
  let inc= getRandInt(5,30);
  textSize(getRandInt(20,150))
  while (i<100){
        r=getRandInt(1,255);
        g=getRandInt(1,255);
        b=getRandInt(1,255);

    
    whichFill= whichFill+1

    if(whichFill > 4){
      whichFill=1;
    }

    if(whichFill==1){
        fill(color1[0],color1[1],color1[2]);
    } 
    if(whichFill==2){
        fill(color2[0],color2[1],color2[2]);
    } 
    if(whichFill==3) {
        fill(color3[0],color3[1],color3[2]);
    } 
    if(whichFill==4) {
        fill(color4[0],color4[1],color4[2]);
    }
    
    

    noStroke();
    textAlign(CENTER);
    text(glyph, startX, yCoord)
    startX=startX+inc
    yCoord=yCoord+inc
    text(glyph, startX+60, yCoord)
    startX=startX+inc
    yCoord=yCoord+inc
    text(glyph, startX+120, yCoord)
    startX=startX+inc
    yCoord=yCoord+inc
    text(glyph, startX+180, yCoord)
    startX=startX+inc
    yCoord=yCoord+inc
    text(glyph, startX+240, yCoord)
    startX=startX+inc
    yCoord=yCoord+inc
    text(glyph, startX+300, yCoord)
    startX=startX+inc
    yCoord=yCoord+inc
    text(glyph, startX+360, yCoord)
    startX=startX+inc
    yCoord=yCoord+inc
    text(glyph, startX+420, yCoord)
    
  i++
  }
}



let color1;
let color2;
let color3;
let color4;


  // var count = localStorage.getItem("count")==null?1:localStorage.getItem("count");
  //     count=Number(count)+1;
  // localStorage.setItem("count", count);


function draw() {
  
  function colorGen(){
    let r=getRandInt(1,255);
    let g=getRandInt(1,255);
    let b=getRandInt(1,255);
    return [r, g, b];
  }
  color1=colorGen();
  color2=colorGen();
  color3=colorGen();
  color4=colorGen();

  let r=getRandInt(1,150);
  let g=getRandInt(1,50);
  let b=getRandInt(1,255);

  //background(color3[0],color3[1],color3[2]);
  background(r,g,b)
  
 
  let i=0;
  while (i<3){
    symbolsLine();
    i++
  }
  // saveCanvas('myCanvas'+count, 'jpg');

}
