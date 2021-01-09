class Box{
    constructor(x,y,width,height) {
      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }



    display(){
      
 

    if (this.body.speed < 3) {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill(28,5,243)
      rect(0, 0, this.width, this.height);
      pop();
    } else {
      World.remove(world, this.body);
      push();
      tint(1000,200,this.visibility);
      this.visibility = this.visibility - 1;
      pop();
    }





  }

  score() {
    if(this.visibility<0 && this.visibility>-105) {
         // score = score+1
          scoregame++;
        
          //console.log(score)
    }
  }



};