function mirroredCircles() {
    let i=0;
    let startX=getRandInt(-100,500)+70;
    let endX=500-startX;
    while (i<5){
      
      let hasStroke = getRandInt(1,2);
      if(hasStroke == 1){
        r=getRandInt(1,255);
        g=getRandInt(1,255);
        b=getRandInt(1,255);
        let weight=getRandInt(1,10);
  
        strokeWeight(weight);
        stroke(r,g,b);
      } else {
        noStroke();
      }
      let yCoord=getRandInt(0,500)+10,
          yMirror=500-yCoord;
          diameter=getRandInt(10,50);
  
          r=getRandInt(1,255);
          g=getRandInt(1,255);
          b=getRandInt(1,255);
  
      let whichFill=getRandInt(1,4);
  
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
          chooseBlend();
      }
      circle(startX, yCoord, diameter)
      circle(endX, yCoord, diameter)
      circle(startX, yMirror, diameter)
      circle(endX, yMirror, diameter)
      circle(yCoord, startX, diameter)
      circle(yCoord, endX, diameter)
      circle(yMirror, startX, diameter)
      circle(yMirror, endX, diameter)
    i++
    }
  }
  
  function mirroredSquares() {
    let i=0;
    let startX=getRandInt(0,1000)+50;
    let endX=500-startX;
    while (i<10){
      
      let hasStroke = getRandInt(1,2);
      if(hasStroke == 1){
        r=getRandInt(1,255);
        g=getRandInt(1,255);
        b=getRandInt(1,255);
        let weight=getRandInt(1,10);
  
        strokeWeight(weight);
        stroke(r,g,b);
      } else {
        noStroke();
      }
      let yCoord=getRandInt(0,1000)+10,
          size=getRandInt(10,50);
          yMirror=500-yCoord;
          
  
          r=getRandInt(1,255);
          g=getRandInt(1,255);
          b=getRandInt(1,255);
  
      let whichFill=getRandInt(1,4);
  
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
          chooseBlend();
      }
      rectMode(CENTER);
      square(startX, yCoord, size)
      square(endX, yCoord, size)
      square(startX, yMirror, size)
      square(endX, yMirror, size)
      square(yCoord, startX, size)
      square(yCoord, endX, size)
      square(yMirror, startX, size)
      square(yMirror, endX, size)
    i++
    }
  }
  
  function mirroredSymbols() {
    let i=0;
    let startX=getRandInt(0,1000)+50;
    let endX=500-startX;
    let theOne = getRandInt(1,10)
    let glyph
    if (theOne == 1) {
      glyph='¥';
    }
    if (theOne == 2) {
      glyph='♥';
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
    
    while (i<5){
      
      let yCoord=getRandInt(0,1000)+10,
          size=getRandInt(10,50);
          yMirror=500-yCoord;
          
          r=getRandInt(1,255);
          g=getRandInt(1,255);
          b=getRandInt(1,255);
  
      let whichFill=getRandInt(1,4);
  
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
      textSize(getRandInt(20,50))
      textAlign(CENTER);
      text(glyph, startX, yCoord)
      text(glyph, endX, yCoord)
      text(glyph, startX, yMirror)
      text(glyph, endX, yMirror)
      text(glyph, yCoord, startX)
      text(glyph, yCoord, endX)
      text(glyph, yMirror, startX)
      text(glyph, yMirror, endX)
    i++
    }
  }