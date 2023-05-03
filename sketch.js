
function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraJogador();
  mostraCarros();
  movimentaCarro();
  movimentaJogador();
  loopCarro1();
  verificaColisao();
  pontos();
  marcaPonto()
}

