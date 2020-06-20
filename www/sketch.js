/*ボタン*/
let button;

/*タイマー*/
var timer;
var counter = 10;
var seconds, minutes;

//円の中心位置  
var locationX;  
var locationY;
// 円の速度  
var velocityX;  
var velocityY;
/*ボタンをクリックされる前：０、された後：１*、ゲーム結果：３*/
var game=0;

/*ボタン、障害物の用意*/
function setup(){
  createCanvas(windowWidth,windowHeight);
  textFont('Arial');
  background(248,248,255);

  //ボタン
  button=createButton('GAME START! [click]');
  button.position(50,200);
  button.style("width","300px");
  button.style("height","200px");
  button.class("moji");

  //タイマー
  timer = createP("timer");
  setInterval(timeIt, 1000);

  //円
  locationX = 0;  
  locationY = 0;  
  // 円の速度  
  velocityX = 3;  
  velocityY = 2;

}

/*画面変更*/
function draw(){
 button.mousePressed(flag);
 background(50);
 if(game == 1){
play();
 } else if(game == 2){
   //ゲームオーバー画面*/
   drawGameoverScreen();
 }
 else if(game == 3){
   //ゲームクリア画面*/
   drawGameclearScreen();
 }
}

/*ボタンをクリックされたら消す*/
function flag(){
 game = 1;
 button.remove();
}

/*タイマー（10秒）*/
function timeIt() {
  // 1 counter = 1 second
  if (counter > 0) {
    counter--;
  }
  
	minutes = floor(counter/60);
    seconds = counter % 60;
  
  // if (counter < 60)
  
  timer.html(minutes + ":" + seconds);
}

/*マウスに追従する円の表示*/
function play(){
 location();
 timeIt();
 fill(255,255,255);
 ellipse(mouseX,mouseY,50,50);
 entitiesAreColliding(10,10);
 fill(255);
 //("lx"+locationX+"\npX"+mouseX,200,200);
 //("ly"+locationY+"\nly"+mouseY,200,300);
 //("a"+abs(locationX-mouseX),200,400);
}

/*障害物の表示*/
function location(){
    createCanvas(windowWidth,windowHeight);
    background(50);
   // 円の座標を更新  
    locationX = locationX + velocityX;  
    locationY = locationY + velocityY;  

    // 枠線なし  
    noStroke();  
    // 塗りつぶしの設定  
    fill(247, 12, 32);  

    // 円を描画  
    rect(locationX, locationY, 50, 50);  

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

/*当たり判定*/
function entitiesAreColliding(
  collisionXDistance,
  collisionYDistance
) {
  // xとy、いずれかの距離が十分開いていたら、衝突していないので false を返す
  // 現在のy距離
  var currentXDistance = abs(locationX - mouseX);
  var currentYDistance = abs(locationY-mouseY);
  if (collisionXDistance <= currentXDistance && collisionYDistance <= currentYDistance){
    return false;
  } else if(collisionXDistance <= currentXDistance && collisionYDistance <= currentYDistance && counter==0){
    game=3;
    return true;
  } else{
    game=2;
    return true;
  }
}

/** ゲームオーバー画面を表示する */
function drawGameoverScreen() {
  // 透明度 192 の黒
  background(0, 192); 
  fill(255);
  // 横に中央揃え ＆ 縦にも中央揃え
  textSize(60);
  // 画面中央にテキスト表示
  text("GAME OVER", width / 25, height / 2); 
}

/*ゲームクリア画面*/
function drawGameclearScreen(){
  background(255,218,185);
  fill(255);
  textSize(60);
  text("GAME CLEAR", width / 25, height / 2); 
}