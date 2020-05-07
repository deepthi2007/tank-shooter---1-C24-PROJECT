class Cannon{
    constructor(angle){
        this.body = Bodies.rectangle(150,300,200,35);
        this.width = 200;
        this.height = 35;
        World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    fill(250, 205, 7);
    rect(pos.x,pos.y,this.width,this.height);
    rect(250,300,10,50);
    fill(0,0,0);
    circle(125,330,60)
    
    }
}