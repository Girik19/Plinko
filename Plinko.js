class Plinko {
    constructor(x,y){
        var options={
    restitution:1.4,
    density:0.8,
    //isStatic:false
}
this.body=Bodies.circle(x,y,10,options)
this.x=x
this.y=y
this.r=10
World.add(world,this.body)
}
display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    noStroke();
    fill("white")
    ellipseMode(RADIUS)
    ellipse(0,0,10,10)
    pop()
}

}