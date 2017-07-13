function SpriteTiro(){
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.ay = 0;
  this.width = 5;
  this.height = 5;
  this.color = "blue";
}

SpriteTiro.prototype.desenhar = function (ctx){
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.strokeStyle = "black";
  ctx.strokeRect(this.x, this.y, this.width, this.height);
}

SpriteTiro.prototype.mover = function (dt){
  //Aceleração
  this.vy = this.vy + this.ay*dt;

  //Velocidade
  this.y = this.y - this.vy*dt;
}