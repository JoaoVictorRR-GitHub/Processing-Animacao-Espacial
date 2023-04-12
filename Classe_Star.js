/*
Codigo por:     The Coding Train.
Link do video:  https://www.youtube.com/watch?v=17WoOqgXsRM

Bryn Mawr College, Department of Computer Science <br>
Classic starfield using 2D transformations and z-scaling.
*/
class Star {
  
  // Star coordinates in 3D  
  constructor() {
  
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    
    this.Pz = this.z;
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
  }
  
  update() {
    
    this.z -= Speed;       // Move star closer to viewport
    
    if (this.z < 1) {      // Reset star if it passes viewport
      
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      
      this.Pz = this.z;
      this.r = random(0, 255);
      this.g = random(0, 255);
      this.b = random(0, 255);
    }
  }

  draw() {
    
    //fill(255);
    noStroke(); 
    fill(this.r, this.g, this.b);
    
    this.Sx = map((this.x / this.z), 0, 1, 0, width);
    this.Sy = map((this.y / this.z), 0, 1, 0, height);
    
    this.R = map(this.z, 0, width, 16, 0);
    ellipse(this.Sx, this.Sy, this.R, this.R);
    
    this.Px = map((this.x / this.Pz), 0, 1, 0, width);
    this.Py = map((this.y / this.Pz), 0, 1, 0, height);
    
    this.Pz = this.z;
    
    //stroke(255);
    stroke(this.r, this.g, this.b);
    line(this.Px, this.Py, this.Sx, this.Sy);
  }
}