class createDrops{
    constructor(x,y){
        var options = {
            friction : 0.001, 
            restitution : 0.1
        }
        this.rain = Bodies.circle(x,y,10,options);
        this.x = x;
        this.y = y;
        World.add(world, this.rain);
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
    display(){
        //ellipseMode(RADIUS);
        fill("blue")
        ellipse(this.x,this.y,10,10);
    }
}