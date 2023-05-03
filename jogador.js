// codigos Jogador

let xJogador = 100;
let yJogador = 366;

function mostraJogador(){
  image(imagemDoJogador,xJogador,yJogador,30 ,30);
 
}

function movimentaJogador(){
   if( keyIsDown(UP_ARROW)){
     yJogador -= 3;
   }
  if(keyIsDown(DOWN_ARROW)){
    yJogador += 3;
  }
}
let colisao = false

function verificaColisao(){
  for (let i=0; i<imagemCarros.length; i+=1){
    colisao = collideRectCircle(xCarros[i],yCarros[i],compCarro, largCarro, xJogador, yJogador,10)
    
    if (colisao){
      yJogador = 366
      meusPontos = 0
    }
    
  }
}