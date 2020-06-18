let button;
let sence;
let sp;
// 赤い円スプライトの直径
const diameter = 20;
// 左の壁 => キャンバスの左端(x=0)
const leftWall = 0;
// 上の壁 => キャンバスの上端(y=0)
const topWall = 0;
let rightWall;
let bottomWall;
const offset = diameter / 2;

// 円の中心位置  
/*var locationX;  
var locationY;
// 円の速度  
var velocityX;  
var velocityY;*/

function setup(){
  createCanvas(windowWidth,windowHeight);
  textFont('Arial');
  background(248,248,255);
  button=createButton('GAME START! [click]');
  button.position(50,200);
  button.style("width","300px");
  button.style("height","200px");
  button.class("moji");

  rightWall = width;
  bttomWall = height;


 /* locationX = 0;  
  locationY = 0;  
  // 円の速度  
  velocityX = 3;  
  velocityY = 2; */

  button.mousePressed(draw);
}


function draw(){
//マウス追従
  /*  if(mouseIsPressed){
    //ゲーム画面でやる処理
    button.remove();
    background(50);
    stroke(255);
    strokeWeight(8);
    noFill();
    translate(mouseX, mouseY);
    ellipse(0, 0, 40, 40);
   }
}*/
 
 //四角が壁に当たるとバウンドする
   if(mouseIsPressed){
          button.remove();
    background(50);
      fill(255,0,0);
     rect(random(width),random(height),random(50,50,50,50));
       // 四角スプライトと壁との位置関係を調べ、
    // 四角が壁を超えたら、反転(跳ね返り)
    if (rect.x > rightWall) {
        rect.x = rightWall - 50;
        // 跳ね返り
        rect.velocity.x = 3000;
    }
    else if (rect.x < leftWall) {
        rect.x = leftWall + 50;
        // 跳ね返り
        rect.velocity.x = 1;
    }

    if (rect.y > bottomWall) {
        rect.y = bottomWall - 50;
        // 跳ね返り
        rect.velocity.y = -abs(rect.velocity.y);
    }
    else if (rect.y < topWall) {
        rect.y = topWall + 50;
        // 跳ね返り
        rect.velocity.y = abs(rect.velocity.y);
    }
   }
}

//四角にして改良
/*function location(){
   if(mouseIsPressed){
      background(50);
   // 円の座標を更新  
    locationX = locationX + velocityX;  
    locationY = locationY + velocityY;  

    // 枠線なし  
    noStroke();  
    // 塗りつぶしの設定  
    fill(247, 12, 32);  

    // 円を描画  
    ellipse(locationX, locationY, 50, 50);  

    // 画面の左端、もしくは右端に到達した場合  
    if (locationX < 0 || locationX > width) {  
        // X軸の速度を反転  
        velocityX = velocityX * -1;  
    }  
    // 画面の上端、もしくは下端に到達した場合  
    if (locationY < 0 || locationY > height) {  
        // Y軸の速度を反転  
        velocityY = velocityY * -1;  
    }  
   }
}*/

//使ってない
/*function draw2() {
  vecLocation.add(vecVelocity); // 速度を位置に足している
  fill(160, 100, 50, 100); // 色
  ellipse(vecLocation.x, vecLocation.y, 20, 20); //だ円
  if( vecLocation.x < 0 || vecLocation.x > width){
    vecVelocity.x = vecVelocity.x * -1;
  }
  if(vecLocation.y < 0 || vecLocation.y > height){
    vecVelocity.y = vecVelocity.y * -1;
  }
}
    
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