class Car{
    plate:string;
    color:string;
    brand:string;
    wheels:Wheel[];
    
    constructor(plate:string,color:string,brand:string){
        this.plate=plate;
        this.color=color;
        this.brand=brand;
        this.wheels=new Array();
    }
    
    addWheel(wheel:Wheel):void{
        this.wheels.push(wheel);
    }
}