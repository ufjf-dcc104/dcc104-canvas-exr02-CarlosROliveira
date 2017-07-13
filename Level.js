function Level(){
  this.sprites =[];
  this.velocidade = 50;
  this.imagemInimigo = ["inimigo1.png","inimigo2.png","inimigo3.png"];
}

Level.prototype.init = function(){
	this.insereInimigos();
};

Level.prototype.insereInimigos = function() {
    var inimigo = new Sprite();
	inimigo.y = -10;
	inimigo.x = Math.floor((Math.random() * 480) + 1)
	inimigo.vy = this.velocidade;
	inimigo.g = 10;
	inimigo.imagem.src = this.imagemInimigo[Math.floor((Math.random() * 3))];
	this.sprites.push(inimigo);
};

Level.prototype.mover = function (dt){
	for (var i = 0; i < this.sprites.length; i++) {
		if(this.sprites[i].y > 530){
			this.sprites.splice(i,1);
		}else{
			this.sprites[i].mover(dt);
		}
	}
};

Level.prototype.desenhar = function (ctx){
  for (var i = 0; i < this.sprites.length; i++) {
    this.sprites[i].desenhar(ctx);
  }
};

Level.prototype.colidiuCom = function (alvo, resolveColisao){
  for (var i = 0; i < this.sprites.length; i++) {
    if(this.sprites[i].colodiuCom(alvo)){
      resolveColisao(this.sprites[i], alvo);
    }
  }
};

Level.prototype.colidiuComTiro = function (alvo, resolveColisao){
  for (var i = 0; i < this.sprites.length; i++) {
	for(var j =0; j < alvo.length; j++){
		if(this.sprites[i].colodiuComTiro(alvo[j])){
			resolveColisao(i, j);
		}
	}
  }
};