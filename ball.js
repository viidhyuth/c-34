class Ball {
    constructor(x,y,width,height){
    var opt={
        restitution:0.8,
        friction:1.0,
        density:0.04

    }
    this.body=Bodies.circle(x,y,width/2,opt)
    this.width=width
    this.height=height
    World.add(world,this.body);

    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
       fill ("gray")
       ellipse(0,0,this.width,this.height)
       pop()
    }
}