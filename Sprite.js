function Sprite(){
  this.g = 0;
  this.x = 250;
  this.y = 450;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.am = 0;
  this.width = 32;
  this.height = 32;
  this.angle = 0;
  this.vang = 0;
  this.color = "blue";
  this.tiros = [];
  this.imagem = new Image();
}

Sprite.prototype.desenhar = function (ctx){
  /*ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.strokeStyle = "black";
  ctx.strokeRect(this.x, this.y, this.width, this.height);*/
  
  ctx.drawImage(this.imagem, this.x, this.y);
  
  for (var i = 0; i < this.tiros.length; i++) {
    this.tiros[i].desenhar(ctx);
  }
}

Sprite.prototype.mover = function (dt){
  //Aceleração
  this.vx = this.vx + this.ax*dt;
  this.vy = this.vy + (this.ay+this.g)*dt;

  //Velocidade
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;

  this.angle = this.angle + this.vang *dt;
  
  for (var i = 0; i < this.tiros.length; i++) {
	if(this.tiros[i].y < -10){
		this.tiros.splice(i,1);
	}else{
		this.tiros[i].mover(dt);
	}
  }
}

//Colisão retangular
Sprite.prototype.colodiuCom = function(alvo){
  if(this.x + this.width < alvo.x)return false;
  if(this.x > alvo.x + this.width)return false;
  if(this.y + this.height < alvo.y)return false;
  if(this.y > alvo.y + this.height)return false;
  return true;
}

//Colisão retangular
Sprite.prototype.colodiuComTiro = function(alvo){
  if(this.x + this.width < alvo.x)return false;
  if(this.x > alvo.x + alvo.width)return false;
  if(this.y + this.height < alvo.y)return false;
  if(this.y > alvo.y + alvo.height)return false;
  return true;
}

Sprite.prototype.atirar = function (dt){
  var tiro = new SpriteTiro();
  tiro.x = this.x + 13;
  tiro.y = this.y;
  tiro.vy = 150;
  this.tiros.push(tiro);
}
