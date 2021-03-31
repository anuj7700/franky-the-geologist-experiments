class Iron {
    //This is the constructor to insialize iron objects
    // with x, y, width and height
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':3,
        'density':30,
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    //This function displays a rectangular shape
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("lightgrey");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };