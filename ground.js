class Ground{
    constructor(){
        this.body = Bodies.rectangle(400,380,800,50,{isStatic:true});
        this.width = 800;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);

    }
}