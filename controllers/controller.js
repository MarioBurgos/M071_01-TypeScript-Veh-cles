"use strict";
var _a;
var car;
// let wSize: string;
// let wBrand: string;
function createCar(plate, brand, color) {
    var car = new Car(plate, color, brand);
    // document.getElementById('car-form')
    // = "CAR: PLATE: " + car.plate
    //     + " COLOR: " + car.color + " BRAND: " + brand
    //     + " WHEELS: " + JSON.stringify(car.wheels);
}
function getWSize() {
}
function addWheel(size, brand) {
    car.addWheel(new Wheel(size, brand));
}
function showCarForm() {
    var formContainer = document.querySelector('#form-container');
    var startButton = document.querySelector('#start-button');
    startButton === null || startButton === void 0 ? void 0 : startButton.setAttribute('disabled', '');
    if (formContainer === null || formContainer === void 0 ? void 0 : formContainer.hasChildNodes) {
        var carForm = document.createElement('form');
        carForm.className = "card p-5 mb-4";
        carForm.innerHTML = "\n        <p class=\"h4 pb-4\">Car detail:</p>\n        <div class=\"row mb-4\">\n            <div class=\"col-md-4 pe-3\">\n                <label for=\"plate\">Plate</label>\n                <input type=\"text\" name=\"plate\" id=\"plate\" class=\"form-control\">\n            </div>\n            <div class=\"col-md-4 pe-3\">\n                <label for=\"brand\">Brand</label>\n                <input type=\"text\" name=\"brand\" id=\"brand\" class=\"form-control\">\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"color\">Color</label>\n                <input type=\"text\" name=\"color\" id=\"color\" class=\"form-control\">\n            </div>\n        </div>\n        <div class=\"col-12\">\n            <button class=\"btn btn-primary float-end\" onclick=\"showWheelsForm()\">Add Wheels</button>\n        </div>\n        ";
        formContainer === null || formContainer === void 0 ? void 0 : formContainer.appendChild(carForm);
    }
}
function showWheelsForm() {
    var _a;
    var formContainer = document.querySelector('#form-container');
    var wheelsForm = document.createElement('form');
    wheelsForm.className = "card p-5 mb-4";
    wheelsForm.innerHTML = "\n    <p class=\"h4 pb-4\">Wheels detail:</p>\n    <div class=\"row mb-4\">\n        <div class=\"col-3 justify-content-between\">\n            <label for=\"w-size\">Wheel Size</label>\n            <input type=\"text\" name=\"w-size\" id=\"w-size\" class=\"form-control me-3\" onchange=\"getWSize();\">\n            <label for=\"w-brand\">Wheel Brand</label>\n            <input type=\"text\" name=\"w-brand\" id=\"w-brand\" class=\"form-control\">\n        </div>\n        <div class=\"col-3 justify-content-between\">\n            <label for=\"w-size\">Wheel Size</label>\n            <input type=\"text\" name=\"w-size\" id=\"w-size\" class=\"form-control me-3\">\n            <label for=\"w-brand\">Wheel Brand</label>\n            <input type=\"text\" name=\"w-brand\" id=\"w-brand\" class=\"form-control\">\n        </div>\n        <div class=\"col-3 justify-content-between\">\n            <label for=\"w-size\">Wheel Size</label>\n            <input type=\"text\" name=\"w-size\" id=\"w-size\" class=\"form-control me-3\">\n            <label for=\"w-brand\">Wheel Brand</label>\n            <input type=\"text\" name=\"w-brand\" id=\"w-brand\" class=\"form-control\">\n        </div>\n        <div class=\"col-3 justify-content-between\">\n            <label for=\"w-size\">Wheel Size</label>\n            <input type=\"text\" name=\"w-size\" id=\"w-size\" class=\"form-control me-3\">\n            <label for=\"w-brand\">Wheel Brand</label>\n            <input type=\"text\" name=\"w-brand\" id=\"w-brand\" class=\"form-control\">\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <button class=\"btn btn-primary float-end\" onclick=\"createCar();\">Create Car</button>\n    </div>\n    ";
    (_a = document.getElementById('form-container')) === null || _a === void 0 ? void 0 : _a.appendChild(wheelsForm);
}
// DOM Events
(_a = document.getElementById('car-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    var _a, _b;
    // const plate = document.getElementById('plate')?.textContent;
    var brand = (_a = document.getElementById('brand')) === null || _a === void 0 ? void 0 : _a.textContent;
    var color = (_b = document.getElementById('color')) === null || _b === void 0 ? void 0 : _b.textContent;
    // const car = new Car(plate, brand, color);
    e.preventDefault(); //Cancela el refresh de la pagina onSubmit()
});
