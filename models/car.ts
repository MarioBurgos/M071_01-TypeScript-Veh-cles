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

    toString():string{
        var str:string = `[Plate] ${this.plate}; [Brand] ${this.brand}; [Color] ${this.color}; \n`;
        var i = 1;
        this.wheels.forEach(w => {
            str += `[Wheel ${i}] Brand: ${w.brand}; Diameter:  ${w.diameter}; \n`;
            i++;
        });

        return str;
    }
}