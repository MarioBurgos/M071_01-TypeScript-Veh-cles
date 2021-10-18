let car: Car;
// let wSize: string;
// let wBrand: string;


function createCar(plate: string, brand: string, color: string) {
    let car = new Car(plate, color, brand);

    // document.getElementById('car-form')
    // = "CAR: PLATE: " + car.plate
    //     + " COLOR: " + car.color + " BRAND: " + brand
    //     + " WHEELS: " + JSON.stringify(car.wheels);
}

function getWSize() {

}
function addWheel(size: number, brand: string) {
    car.addWheel(new Wheel(size, brand));
}

function showCarForm() {
    const formContainer = document.querySelector('#form-container');
    const startButton = document.querySelector('#start-button');
    startButton?.setAttribute('disabled', '') ;
    
    if (formContainer?.hasChildNodes) {

        const carForm = document.createElement('form');
        carForm.className = "card p-5 mb-4";
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
            <button class="btn btn-primary float-end" onclick="showWheelsForm()">Add Wheels</button>
        </div>
        `;
        formContainer?.appendChild(carForm);
    }

}
function showWheelsForm() {
    const formContainer = document.querySelector('#form-container');
    const wheelsForm = document.createElement('form');
    wheelsForm.className = "card p-5 mb-4";
    wheelsForm.innerHTML = `
    <p class="h4 pb-4">Wheels detail:</p>
    <div class="row mb-4">
        <div class="col-3 justify-content-between">
            <label for="w-size">Wheel Size</label>
            <input type="text" name="w-size" id="w-size" class="form-control me-3" onchange="getWSize();">
            <label for="w-brand">Wheel Brand</label>
            <input type="text" name="w-brand" id="w-brand" class="form-control">
        </div>
        <div class="col-3 justify-content-between">
            <label for="w-size">Wheel Size</label>
            <input type="text" name="w-size" id="w-size" class="form-control me-3">
            <label for="w-brand">Wheel Brand</label>
            <input type="text" name="w-brand" id="w-brand" class="form-control">
        </div>
        <div class="col-3 justify-content-between">
            <label for="w-size">Wheel Size</label>
            <input type="text" name="w-size" id="w-size" class="form-control me-3">
            <label for="w-brand">Wheel Brand</label>
            <input type="text" name="w-brand" id="w-brand" class="form-control">
        </div>
        <div class="col-3 justify-content-between">
            <label for="w-size">Wheel Size</label>
            <input type="text" name="w-size" id="w-size" class="form-control me-3">
            <label for="w-brand">Wheel Brand</label>
            <input type="text" name="w-brand" id="w-brand" class="form-control">
        </div>
    </div>
    <div class="col-12">
        <button class="btn btn-primary float-end" onclick="createCar();">Create Car</button>
    </div>
    `;
    document.getElementById('form-container')?.appendChild(wheelsForm);
}

// DOM Events
document.getElementById('car-form')
    ?.addEventListener('submit', (e) => {
        // const plate = document.getElementById('plate')?.textContent;
        const brand = document.getElementById('brand')?.textContent;
        const color = document.getElementById('color')?.textContent;
        // const car = new Car(plate, brand, color);




        e.preventDefault(); //Cancela el refresh de la pagina onSubmit()
    });
