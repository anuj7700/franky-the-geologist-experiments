class Plane {
    constructor(x,y,width,height) {
      var options = {
       //'restitution':0.8,
       //'friction':0.9,
       //'density':10,
        isStatic: true
      }
      this.body = Bodies.rectangle(x,y-50,width,height,options);
      this.width = width;
      this.height = height; 
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      //console.log(pos);
      push();
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };