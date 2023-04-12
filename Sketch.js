/*
Universidade Federal do Espírito Santo - UFES
Centro Universitário Norte do Espírito Santo - CEUNES

Período:    2021/02.
Atividade:  Projeto Final.
Disciplina: Sistemas Multimídia.
Professor:  Leandro Lesqueves Costalonga.
Aluno:      João Victor do Rozário Recla.
*/

"use strict";



// Capture - Ferramenta de captura e gravacao.
P5Capture.setDefaultOptions({
  format: "gif",
  quality: 1,
  verbose: true,
  framerate: 22,
  disableScaling: true
});

var onGravacao = 0;  // Indica se uma gravacao foi iniciada.
const Capture = P5Capture.getInstance();



// Variaveis de audio.
let Efeito;        // Indica um efeito sonoro.
let Musica;        // Indica uma musica.
let Musica_01;     // Indica uma musica.
var onMusica = 0;  // Indica se uma musica esta ativa.


// Variaveis do projeto.
let i,j;
let Speed;        // Indica a velocidade das estrelas.
let N = 400;      // Indica a quantidade de estrelas.
let Stars = [N];  // Indica um vetor de estrelas.
let Personagem;   // Indica um personagem.





/*  Funcao de inicializacao.  */
function setup() {

  
  createCanvas(1200, 800);  // Configura o tamanho da janela.
  // createCanvas(800, 300);
  smooth();
  stroke(255);
  strokeWeight(5);

  // Inicializa o vetor com estrelas.
  for(i = 0; i < N; i++)
    Stars[i] = new Star();
  
  Personagem = new Personagem_();           // Cria o personagem.
  Efeito     = loadSound('Audios/01.wav');  // Carrega o efeito sonoro.
  Musica     = loadSound('Audios/02.wav');  // Carrega a musica.
  Musica_01  = loadSound('Audios/03.wav');  // Carrega a musica.

  frameRate(22);
}
//==============================================================





/*  Funcao que desenha na tela.  */
function draw() {

  
  /*  Configura a velocidade das estrelas com
      base no movimento horizontal do mouse.  */
  Speed = map(mouseX, 0, width, 0, 50);
  background(20);
  
  
  /*  Configura um circulo no centro da tela com
      base no movimento horizontal do mouse.  */
  push();
  fill(180, 180, 180);
  circle(width/2, height/2, (-mouseX/5));
  pop();
  

  // Atualiza os movimentos do personagem.
  push();
  Personagem.Move(keyCode, key);
  Personagem.Draw();
  pop();
    
  
  /*  Configura um ponto vermelho para
      identificar a posicao do mouse.  */
  push();
  stroke(255, 0, 0);
  circle(mouseX, mouseY, 5);
  pop();
  
  
  /*  Translada o ponto de partida das
      estrelas para o centro da tela.  */
  translate(width/2, height/2);
  
  for(j = 0; j < 2; j++){
    for(i = 0; i < N; i++){
      
      // Atualiza o movimento das estrelas.
      Stars[i].update();
      Stars[i].draw();
    }
  }
}
//==============================================================





/*  Funcao que identifica os movimentos do mouse.  */
function mouseMoved(){

  
  // Verifica se o mouse esta na metade direita da tela.
  if((pmouseX >= width/2)){
    
    
    if(!Efeito.isPlaying()){
    
      // Liga o efeito sonoro, se nao estiver ativo.
      Efeito.play();
      Efeito.loop();
    }
    
    /*  Controla o rate do efeito sonoro
        com base na velocidade ("Speed").  */
    Efeito.rate(Speed*0.01);
  }
  
  // Verifica se o mouse esta na metade esquerda da tela.
  else if(pmouseX < width/2){
    
    // Desliga o efeito sonoro.
    Efeito.stop();
    Efeito.rate(1);
  }
}
//==============================================================





/*  Funcao que identifica as teclas pressionadas.  */
function keyPressed() {
   
  // Verifica se a tecla "m" foi pressionada.
  if(key === "m"){
    
    if(onMusica === 0){
      
      // Liga a primeira musica.
      print("|  Musica 01 ligada.");
      onMusica = 1;
      Musica.play();
      Musica.loop();
      Musica.rate(0.5);
    }
    else if(onMusica === 1){
      
      Musica.stop();
      
      // Liga a segunda musica.
      print("|  Musica 02 ligada.");
      onMusica = 2;
      Musica_01.play();
      Musica_01.loop();
      Musica_01.rate(0.5);
    }
    else{
      
      // Desliga as musicas.
      print("|  Musicas desligadas.");
      onMusica = 0;
      Musica.stop();
      Musica_01.stop();
    }
  }
  
  
  // Verifica se a tecla "g" foi pressionada.
  if(key === "g"){
    
    if(onGravacao === 0){
      
      // Inicia a gravacao.
      Capture.start();
      onGravacao = 1;
    }
    else{
      
      // Finaliza a gravacao.
      Capture.stop();
      onGravacao = 0;
    }
  }
}
//==============================================================