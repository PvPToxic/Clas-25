class Boat{
    constructor(x,y,w,h,pos){
        var options = {
            restitution: 0.8, friction: 1, density: 1
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w
        this.height = h
        this.image = loadImage("assets/boat.png")
        this.boatPosition = pos
        World.add(world,this.body)
    
    }
    display(){
        var position = this.body.position
        var angle = this.body.angle
        push()
        translate(position.x, position.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,this.boatPosition,this.width,this.height)
        pop()
    }
}