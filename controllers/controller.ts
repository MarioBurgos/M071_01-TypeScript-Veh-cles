var car: Car;
let carForm: any;
let wheelsForm: any;

let plate: string;
let brand: string;
let color: string;

function initApp(){
    showCarForm();
}
function createCar(plate: string, brand: string, color: string) {
    car = new Car(plate, color, brand);
}

function addWheel(size: number, brand: string) {
    car.addWheel(new Wheel(size, brand));
}

function showCarForm() {
    
    const formContainer = document.querySelector('#form-container');
    const startButton = document.querySelector('#start-button');
    startButton?.setAttribute('disabled', '');

    let carForm = document.createElement('form');
    carForm.className = "card p-5 mb-4";
    carForm.setAttribute("id", "car-form");
    carForm.innerHTML = `
        <p class="h4 pb-4">Car detail:</p>
        <div class="row mb-4">
            <div class="col-md-4 pe-3">
                <label for="plate">Plate</label>
                <input type="text" name="plate" id="plate" class="form-control">
            </div>
            <div class="col-md-4 pe-3">
                <label for="brand">Brand</label>
                <input type="text" name="brand" id="brand" class="form-control">
            </div>
            <div class="col-md-4">
                <label for="color">Color</label>
                <input type="text" name="color" id="color" class="form-control">
            </div>
        </div>
        <div class="col-12">
            <button class="btn btn-primary float-end" onclick="showWheelsForm(); return false">Add Wheels</button>
        </div>
        `;
    formContainer?.appendChild(carForm);
   

}
function showWheelsForm() {
    let plate = document.querySelector("#plate") as HTMLInputElement;
    let brand = document.querySelector("#brand") as HTMLInputElement;
    let color = document.querySelector("#color") as HTMLInputElement;

    createCar(plate.value, brand.value, color.value);

    console.log(car);

    const formContainer = document.querySelector('#form-container');
    let wheelsForm = document.createElement('form');
    wheelsForm.className = "card p-5 mb-4";
    wheelsForm.innerHTML = `
    <p class="h4 pb-4">Wheels detail:</p>
    <div class="row mb-4">
        <div class="col-3 justify-content-between border-end">
            <h6>Wheel nº 1:</h6>
            <label for="w-size">Wheel Size</label>
            <input type="text" name="w-size" id="w-size" class="form-control me-3">
            <label for="w-brand">Wheel Brand</label>
            <input type="text" name="w-brand" id="w-brand" class="form-control">
        </div>
        <div class="col-3 justify-content-between border-end">
            <h6>Wheel nº 2:</h6>
            <label for="w-size">Wheel Size</label>
            <input type="text" name="w-size" id="w-size" class="form-control me-3">
            <label for="w-brand">Wheel Brand</label>
            <input type="text" name="w-brand" id="w-brand" class="form-control">
        </div>
        <div class="col-3 justify-content-between border-end">
            <h6>Wheel nº 3:</h6>
            <label for="w-size">Wheel Size</label>
            <input type="text" name="w-size" id="w-size" class="form-control me-3">
            <label for="w-brand">Wheel Brand</label>
            <input type="text" name="w-brand" id="w-brand" class="form-control">
        </div>
        <div class="col-3 justify-content-between">
            <h6>Wheel nº 4:</h6>
            <label for="w-size">Wheel Size</label>
            <input type="text" name="w-size" id="w-size" class="form-control me-3">
            <label for="w-brand">Wheel Brand</label>
            <input type="text" name="w-brand" id="w-brand" class="form-control">
        </div>
    </div>
    <div class="col-12">
        <button class="btn btn-primary float-end" onclick="createCar(); return false;">Create Car</button>
    </div>
    `;
    formContainer?.removeChild(formContainer.childNodes[1]);
    formContainer?.appendChild(wheelsForm);    
}

