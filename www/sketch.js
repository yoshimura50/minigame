function setup(){
  createCanvas(windowWidth,windowHeight);
  textFont('Arial');
  background(248,248,255);
  button=createButton('GAME START! [click]');
  button.position(50,200);
  button.style("width","300px");
  button.style("height","200px");
  button.class("moji");
  button.mousePressed(draw);
}

let button;


function draw(){
  if(mouseIsPressed){
    //ゲーム画面でやる処理
    button.remove();
    background(50);
  stroke(255);
  strokeWeight(8);
  noFill();
  translate(mouseX, mouseY);
  // 顔の描画
  ellipse(0, 0, 40, 40);
 // ellipse(100, 0, 40, 40);
 // arc(50, 50, 100, 50, 0, PI);
  }
}
  /*//  createCanvas(windowWidth,windowHeight);
  background(50);
  //  background(248,248,255);
    stroke(255);
    strokeWeight(8);
    noFill();
    translate(mouseX,mouseY);
    ellipse(100,0,40,40);
  }
}*/
    
     /* fill(c[i],50,100);
    ellipse(x[i],y[i],r[i],r[i]);
  fill(150);
  ellipse(mouseX, mouseY, 10, 30);     
 ellipse(mouseX, mouseY-20, 10, 10);
  ellipse(mouseX-2, mouseY+25, 5, 30);
  ellipse(mouseX+5, mouseY+25, 5, 30);
  ellipse(mouseX+7, mouseY-2, 3, 15);
  ellipse(mouseX-7, mouseY-10, 20, 3);
  ellipse(mouseX-20, mouseY+5, 5);*/