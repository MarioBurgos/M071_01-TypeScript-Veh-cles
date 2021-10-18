"use strict";
var car;
var carForm;
var wheelsForm;
var plate;
var brand;
var color;
var wSize;
var wBrand;
function initApp() {
    showCarForm();
}
function createCar(plate, brand, color) {
    car = new Car(plate, color, brand);
}
function addWheel(size, brand) {
    car.addWheel(new Wheel(size, brand));
}
/** La funcion enseña el primer formulario al pulsar el botón START.  El formulario pide la matricula, marca y color.
 * Se inhabilita el botón "START" para que el usuario no pueda crear más formularios.
 * El último elemento del form es un botón "Add Wheels", que en su método onclick muestra el siguiente
 * formulario y guarda los datos de los inputs del actual, en un atributo de clase.
 */
function showCarForm() {
    var formContainer = document.querySelector('#form-container');
    var startButton = document.querySelector('#start-button');
    startButton === null || startButton === void 0 ? void 0 : startButton.setAttribute('disabled', '');
    var carForm = document.createElement('form');
    carForm.className = "card p-5 mb-4";
    carForm.setAttribute("id", "car-form");
    carForm.innerHTML = "\n        <p class=\"h4 pb-4\">Car detail:</p>\n        <div class=\"row mb-4\">\n            <div class=\"col-md-4 pe-3\">\n                <label for=\"plate\">Plate</label>\n                <input type=\"text\" name=\"plate\" id=\"plate\" class=\"form-control\">\n            </div>\n            <div class=\"col-md-4 pe-3\">\n                <label for=\"brand\">Brand</label>\n                <input type=\"text\" name=\"brand\" id=\"brand\" class=\"form-control\">\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"color\">Color</label>\n                <input type=\"text\" name=\"color\" id=\"color\" class=\"form-control\">\n            </div>\n        </div>\n        <div class=\"col-12\">\n            <button class=\"btn btn-primary float-end\" onclick=\"showWheelsForm(); return false\">Add Wheels</button>\n        </div>\n        ";
    formContainer === null || formContainer === void 0 ? void 0 : formContainer.appendChild(carForm);
}
/** Elimina el childNode del container, es decir, el formulario anterior.  Coloca en su lugar el nuevo formulario que tiene
 * los inputs de los datos detallados de las ruedas.  Tiene un botón que llama al método collectWheelsData
*/
function showWheelsForm() {
    var formContainer = document.querySelector('#form-container');
    // crear el nuevo form
    var wheelsForm = document.createElement('form');
    wheelsForm.className = "card p-5 mb-4";
    wheelsForm.innerHTML = "\n    <p class=\"h4 pb-4\">Wheels detail:</p>\n    <div class=\"row mb-4\">\n        <div class=\"col-3 justify-content-between border-end\">\n            <h6>Wheel n\u00BA 1:</h6>\n            <label for=\"w-size\">Wheel Size</label>\n            <input type=\"text\" name=\"s1\" id=\"s1\" class=\"form-control me-3 w-size\">\n            <label for=\"w-brand\">Wheel Brand</label>\n            <input type=\"text\" name=\"b1\" id=\"b1\" class=\"form-control\">\n        </div>\n        <div class=\"col-3 justify-content-between border-end\">\n            <h6>Wheel n\u00BA 2:</h6>\n            <label for=\"w-size\">Wheel Size</label>\n            <input type=\"text\" name=\"s2\" id=\"s2\" class=\"form-control me-3 w-size\">\n            <label for=\"w-brand\">Wheel Brand</label>\n            <input type=\"text\" name=\"b2\" id=\"b2\" class=\"form-control\">\n        </div>\n        <div class=\"col-3 justify-content-between border-end\">\n            <h6>Wheel n\u00BA 3:</h6>\n            <label for=\"w-size\">Wheel Size</label>\n            <input type=\"text\" name=\"s3\" id=\"s3\" class=\"form-control me-3 w-size\">\n            <label for=\"w-brand\">Wheel Brand</label>\n            <input type=\"text\" name=\"b3\" id=\"b3\" class=\"form-control\">\n        </div>\n        <div class=\"col-3 justify-content-between\">\n            <h6>Wheel n\u00BA 4:</h6>\n            <label for=\"w-size\">Wheel Size</label>\n            <input type=\"text\" name=\"s4\" id=\"s4\" class=\"form-control me-3 w-size\">\n            <label for=\"w-brand\">Wheel Brand</label>\n            <input type=\"text\" name=\"b4\" id=\"b4\" class=\"form-control\">\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <button class=\"btn btn-primary float-end\" onclick=\"collectWheelsData(); return false;\">Create Car</button>\n    </div>\n    ";
    // guardar los datos del formulario anterior y comprobar si se puede continuar
    if (collectCarData()) {
        //hacer el cambio
        formContainer === null || formContainer === void 0 ? void 0 : formContainer.removeChild(formContainer.childNodes[1]);
        formContainer === null || formContainer === void 0 ? void 0 : formContainer.appendChild(wheelsForm);
    }
}
/** Captura los datos de los inputs del primer formulario y los utiliza para crear un coche (sin ruedas) */
function collectCarData() {
    plate = document.querySelector("#plate");
    brand = document.querySelector("#brand");
    color = document.querySelector("#color");
    if (plate.value == '' || brand.value == '') {
        showMessage("Missing data!  Unable to create a car without a plate number and/or brand", "danger", 1500);
        return false;
    }
    createCar(plate.value, brand.value, color.value);
    return true;
}
/**itera sobre los inputs del formulario de las ruedas, los utiliza para crear ruedas y las va añadiendo al array del objeto<Car> */
function collectWheelsData() {
    wheel: Wheel;
    for (var i = 1; i < 5; i++) {
        wSize = document.querySelector("#s" + i);
        wBrand = document.querySelector("#b" + i);
        addWheel(parseFloat(wSize.value), wBrand.value);
    }
    // console.log(car);
    showMessage("Car created succesfully!", "success", 1500);
    showMessage(car.toString(), "dark", 20000);
}
/** Muestra alertas en la UI */
function showMessage(message, cssClass, timeOut) {
    var div = document.createElement('div');
    div.className = "alert alert-" + cssClass;
    div.appendChild(document.createTextNode(message));
    // showing in DOM
    var result = document.querySelector('.result');
    result === null || result === void 0 ? void 0 : result.appendChild(div);
    setTimeout(function () {
        var _a;
        (_a = document.querySelector('.alert')) === null || _a === void 0 ? void 0 : _a.remove();
    }, timeOut);
}
