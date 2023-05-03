
let meusPontos = 0


function pontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,255,0));
  text (meusPontos, width / 5, 27 );
}

function marcaPonto(){
  
  if(yJogador < 15){
    meusPontos +=1;
    yJogador = 366
    
  }
}