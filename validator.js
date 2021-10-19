"use strict";
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.prototype.validatePlate = function (plate) {
        var regex = /^[0-9]{4}[BCDFGHJKLMNPRSTVWXYZ]{3}/i;
        if (plate == "") {
            return false;
        }
        if (!regex.test(plate)) {
            return false;
        }
        return true;
    };
    Validator.prototype.validateBrand = function (brand) {
        if (brand === "") {
            return false;
        }
        return true;
    };
    Validator.prototype.validateColor = function (color) {
        if (color === "") {
            return false;
        }
        return true;
    };
    return Validator;
}());
