class Plinko{

    constructor(x,y){
        this.body=Bodies.circle(x,y,10,{isStatic:true})
        World.add(world,this.body)
    }

    display() {
        push ()
        fill ("grey")
        ellipse (this.body.position.x,this.body.position.y,10,10)
        ellipseMode(RADIUS)
        pop ()
    }
}