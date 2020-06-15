function setup(){
  createCanvas(windowWidth,windowHeight);
  textFont('Arial');
  background(255);
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
    createCanvas(windowWidth,windowHeight);
   background(255);
  if(mouseIsPressed){
    fill(0);
  } else{
    fill(255);
  }
  ellipse(mouseX,mouseY,40,40);

  rect(50,50,50,50);
  }
}


//障害物をランダムに移動させる
/*game.startScene=function(){
  var rectt =
  rect(50,50,50,50);
  rectt.x=Math.random();
  rectt.y=Math.random();
}*/

/*var createGameScene=function(){
  var sikaku = rect(50,50,50,50);
  sikaku.x=-sikaku.wedth;
  sikaku.y=sikaku.height;
}*/

//実行できない
/*onClipEvent(load){
  var spd=10;
  var kaku = Math.random()*2*Math.Pl;
}
onClipEvent(enterFrame){
  if(this._x<=this._width/2){
    this._x=this._width/2;

    kaku = Math.random()*Math.Pl-(Math.Pl/2);
  }
  else if(this._y<=this._height/2){
    this._y=this._height/2;
    kaku = Math.random()*Math.Pl;
  }
  else if(this._y>=Stage.height-(this._height/2)){
    this._y=Stage.height-(this._height/2);
    kaku = Math.random()*Math.Pl+Math.Pl;
  }
  this._x +=spd*Math.cos(kaku);
  this._y +=spd*Math.sin(kaku);
}*/