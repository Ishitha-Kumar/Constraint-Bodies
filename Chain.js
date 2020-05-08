class Chain {
    constructor(bodyA,bodyB)
    {
        //the options for creating our body
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:1,
            length:10
        }
        //we added the chain
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display()
    {
        //connecting 2 bodies using constraint
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}