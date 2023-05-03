
// variaveis carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 4, 3, 5, 3.5, 2.5];
let compCarro = 60;
let largCarro = 40;

function mostraCarros(){
  
  for (let i=0; i<imagemCarros.length; i++){
     
    image(imagemCarros[i],xCarros[i],yCarros[i],compCarro,largCarro);

  }
}

function movimentaCarro(){
 for (let i=0; i<imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
 }

}

function loopCarro1(){
  
  for(let i=0; i <imagemCarros.length; i++){
      if (passouATela(xCarros[i])){
        xCarros[i] = 600
        
    }
  }  
}

function passouATela(xCarro){
  return xCarro < -50;
}

