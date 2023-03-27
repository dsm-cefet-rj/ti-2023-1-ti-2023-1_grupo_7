let green, red, blue, purple;
let obj;

function mouseOver(ponto){
    if(modulo(mouseX-ponto.x)<20&&modulo(mouseY-ponto.y)<20){
        return true;
    }
    return false;
}
class Rosca{
    constructor(){
        this._total = 0;
        this._amount = new Array();
        this._angles = new Array();
        this._palette = [color(0,255,0),
            color(255,0,0),
            color(0,0,255),
            color(255,0,255),
            color(150,0,200)];
        var i=0;
        for (let value of arguments){
            if (!(isNaN(value))&&value>0){
                this._total += value;
                this._amount[i] = value;
            }
            i++;
        }
        i=0;
        for (let value of this._amount){
            this._angles[i]=(value/this._total)*2*PI;
            i++;
        }
    }
    render(x,y,r) {
        var i = 0;
        var prevAng = 0;
        var accumulator = 0;
        for (let currAng of this._angles){
            accumulator += currAng
            stroke(this._palette[i]);
            arc(x,y,r*2,r*2,prevAng,accumulator);
            prevAng = accumulator;
            (i<this._palette.length-1)?i++:i=0;
        }
    }
}
function setup(){
    var canvas = createCanvas(400,400);
    canvas.parent("rosca");
    obj = new Rosca(12,45,78,41);
}
function draw(){
    //background();
    noFill();
    strokeWeight(30)
    strokeCap(SQUARE);
    obj.render(200,200,180);
}