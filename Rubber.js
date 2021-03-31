class Rubber{
	constructor(x,y,r,color){
		var options={
			'restitution':1.5,
			'friction':4,
			'density':5,
			isStatic: false
		}
			// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
		World.add(world, this.body)
	}

	display(){
		var pos = this.body.position;
		rectMode(CENTER);
		strokeWeight(4);
		stroke("black");
		fill("darkblue");
		//draw the ellipse here to display the rubber ball
		ellipse(pos.x, pos.y, this.r, this.r);
	}
}