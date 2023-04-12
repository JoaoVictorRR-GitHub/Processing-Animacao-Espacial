/*
Universidade Federal do Espírito Santo - UFES
Centro Universitário Norte do Espírito Santo - CEUNES

Período:    2021/02.
Atividade:  Projeto Final.
Disciplina: Sistemas Multimídia.
Professor:  Leandro Lesqueves Costalonga.
Aluno:      João Victor do Rozário Recla.
*/



/*  Classe Personagem_ - Modelo de um personagem.  */
class Personagem_ {

  
  /*  Metodo para inicializar a classe Personagem_.  */  
  constructor() {
  
    
    //  Atributos iniciais.
    this.x = width/2;        // Posicao no eixo x.
    this.y = height/2 + 80;  // Posicao no eixo y.
    this.Vel = 0;            // Velocidade do personagem.
    
    // Cores do personagem.
    this.corMao    = color(180, 200, 180);  // Cor da mao.
    this.corPe     = color(40, 40, 30);     // Cor do pe.
    this.corCabeca = color(40, 40, 30);     // Cor da cabeca.
    this.corCorpo  = color(0, 0, 240);      // Cor do corpo.
    
    // Cores de contorno do personagem.
    this.contorno_Mao    = color(50, 110, 110);  // Contorno da mao.
    this.contorno_Pe     = color(50, 110, 110);  // Contorno do pe.
    this.contorno_Cabeca = color(50, 110, 110);  // Contorno da cabeca.
    this.contorno_Corpo  = color(220, 0, 0);     // Contorno do corpo.
  }
  
  
  /*  Metodo para mover o personagem.  */
  Move(Chave_Tecla, Chave_Letra) {
    
    
    /*  Regula a velocidade do personagem com
        base no movimento horizontal do mouse.  */
    if(pmouseX > width/2)
      this.Vel = Speed/2;
    else
      this.Vel = Speed/1.5;
    
    
    // Movimento para a direita.
    if(((Chave_Tecla === RIGHT_ARROW) || (Chave_Letra === "d")) && (this.x < width-30))
    {
        this.x += this.Vel;
    }
    
    // Movimento para a esquerda.
    else if(((Chave_Tecla === LEFT_ARROW) || (Chave_Letra === "a")) && (this.x > 30))
    {
        this.x -= this.Vel;
    }
    
    // Movimento para baixo.
    else if(((Chave_Tecla === DOWN_ARROW) || (Chave_Letra === "s")) && (this.y < height-40))
    {
        this.y += this.Vel;
    }
    
    // Movimento para a cima.
    else if(((Chave_Tecla === UP_ARROW) || (Chave_Letra === "w")) && (this.y > (height/2)+50))
    {
        this.y -= this.Vel;
    }
    
    else{
      
      // Movimento com o mouse.
      if(mouseIsPressed){
        
        this.x = mouseX;
        this.y = mouseY;
      }
      
      // Nenhum Movimento.
      keyCode = BACKSPACE;  // Espaco.
      key = "#";
    }
  }

  
  /*  Metodo para desenhar o personagem.  */
  Draw() {
    
    strokeWeight(3);
    
    // Cabeca.
    stroke(this.contorno_Cabeca);
    fill(this.corCabeca);
    circle(this.x, this.y, 80);
    
    // Corpo.
    stroke(this.contorno_Corpo);
    fill(this.corCorpo);
    circle(this.x, this.y +50, 90);
    //==========================================

    
    // Corpo - Braco esquerdo.
    noStroke();
    //stroke(this.contorno_Corpo);
    fill(this.corCorpo);
    circle(this.x -50, this.y +30, 50);
    
    // Braco esquerdo.
    stroke(this.contorno_Mao);
    fill(this.corMao);
    circle(this.x -70, this.y +60, 50);
    //==========================================
     
    
    // Corpo - Braco direito.
    noStroke();
    //stroke(this.contorno_Corpo);
    fill(this.corCorpo);
    circle(this.x +50, this.y +30, 50);
    
    // Braco direito.
    stroke(this.contorno_Mao);
    fill(this.corMao);
    circle(this.x +70, this.y +60, 50);
    //==========================================
    
    
    // Corpo - Perna esquerda.
    noStroke();
    //stroke(this.contorno_Corpo);
    fill(this.corCorpo);
    circle(this.x -20, this.y +100, 50);
    
    // Perna esquerda.
    stroke(this.contorno_Pe);
    fill(this.corPe);
    circle(this.x -30, this.y +130, 50);
    //==========================================

    
    // Cortpo - Perna direita.
    noStroke();
    //stroke(this.contorno_Corpo);
    fill(this.corCorpo);
    circle(this.x +20, this.y +100, 50);
    
    // Perna direita.
    stroke(this.contorno_Pe);
    fill(this.corPe);
    circle(this.x +30, this.y +130, 50);
    //==========================================
  }
}