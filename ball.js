class Ball extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.trajactory=[];
    }
    display(){
        super.display();


        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
    }
}