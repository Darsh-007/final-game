class blocks {
    constructor(){
        this.xPosition=0;
        this.yPosition=0;
        this.width=80;
        this.height=80;
        this.image=loadImage("images/block.png")
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.xPosition,this.yPosition,this.width,this.height);

    }
}