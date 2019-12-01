class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 30;
        this.image = loadImage("images/player.jpg");
    }
    
   move(pos){
    this.y=this.y+pos*10;
   }
    
    display(){
        var pos = this.body.position; 
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width*3,this.height*3);
    }
    move(pos){
        this.y=this.y+pos*10;
       }
}