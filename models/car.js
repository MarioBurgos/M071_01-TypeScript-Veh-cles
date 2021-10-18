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
    return Car;
}());
