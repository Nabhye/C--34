class Box{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.8,
            friction: 0.8,
            density: 0.9
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.heigth = height;
        World.add(world,this.body);
    }
 display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill("yellow");
     strokeWeight(4);
     stroke("red");
     rect(0,0,this.width,this.height);
    pop()
 }
}