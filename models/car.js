"use strict";
var Car = /** @class */ (function () {
    function Car(plate, color, brand) {
        this.plate = plate;
        this.color = color;
        this.brand = brand;
        this.wheels = new Array();
    }
    Car.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel);
    };
    Car.prototype.toString = function () {
        var str = "[Plate] " + this.plate + "; [Brand] " + this.brand + "; [Color] " + this.color + "; \n";
        var i = 1;
        this.wheels.forEach(function (w) {
            str += "[Wheel " + i + "] Brand: " + w.brand + "; Diameter:  " + w.diameter + "; \n";
            i++;
        });
        return str;
    };
    return Car;
}());
