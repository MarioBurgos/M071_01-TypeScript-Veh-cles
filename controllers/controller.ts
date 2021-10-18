var car: Car;
var carForm: any;
var wheelsForm: any;

var plate: HTMLInputElement;
var brand: HTMLInputElement;
var color: HTMLInputElement;
var wSize: HTMLInputElement;
var wBrand: HTMLInputElement;

function initApp() {
    showCarForm();
}
function createCar(plate: string, brand: string, color: string) {
    car = new Car(plate, color, brand);
}

function addWheel(size: number, brand: string) {
    car.addWheel(new Wheel(size, brand));
}


/** La funcion enseña el primer formulario al pulsar el botón START.  El formulario pide la matricula, marca y color.
 * Se inhabilita el botón "START" para que el usuario no pueda crear más formularios.
 * El último elemento del form es un botón "Add Wheels", que en su método onclick muestra el siguiente
 * formulario y guarda los datos de los inputs del actual, en un atributo de clase.
 */
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

/** Elimina el childNode del container, es decir, el formulario anterior.  Coloca en su lugar el nuevo formulario que tiene 
 * los inputs de los datos detallados de las ruedas.  Tiene un botón que llama al método collectWheelsData
*/
function showWheelsForm() {
    const formContainer = document.querySelector('#form-container');  
    // crear el nuevo form
    let wheelsForm = document.createElement('form');
    wheelsForm.className = "card p-5 mb-4";
    wheelsForm.innerHTML = `
    <p class="h4 pb-4">Wheels detail:</p>
    <div class="row mb-4">
        <div class="col-3 justify-content-between border-end">
            <h6>Wheel nº 1:</h6>
            <label for="w-size">Wheel Size</label>
            <input type="text" name="s1" id="s1" class="form-control me-3 w-size">
            <label for="w-brand">Wheel Brand</label>
            <input type="text" name="b1" id="b1" class="form-control">
        </div>
        <div class="col-3 justify-content-between border-end">
            <h6>Wheel nº 2:</h6>
            <label for="w-size">Wheel Size</label>
            <input type="text" name="s2" id="s2" class="form-control me-3 w-size">
            <label for="w-brand">Wheel Brand</label>
            <input type="text" name="b2" id="b2" class="form-control">
        </div>
        <div class="col-3 justify-content-between border-end">
            <h6>Wheel nº 3:</h6>
            <label for="w-size">Wheel Size</label>
            <input type="text" name="s3" id="s3" class="form-control me-3 w-size">
            <label for="w-brand">Wheel Brand</label>
            <input type="text" name="b3" id="b3" class="form-control">
        </div>
        <div class="col-3 justify-content-between">
            <h6>Wheel nº 4:</h6>
            <label for="w-size">Wheel Size</label>
            <input type="text" name="s4" id="s4" class="form-control me-3 w-size">
            <label for="w-brand">Wheel Brand</label>
            <input type="text" name="b4" id="b4" class="form-control">
        </div>
    </div>
    <div class="col-12">
        <button class="btn btn-primary float-end" onclick="collectWheelsData(); return false;">Create Car</button>
    </div>
    `;

    // guardar los datos del formulario anterior y comprobar si se puede continuar
    if(collectCarData()){
        //hacer el cambio
    formContainer?.removeChild(formContainer.childNodes[1]);
    formContainer?.appendChild(wheelsForm);
    }

    
}

/** Captura los datos de los inputs del primer formulario y los utiliza para crear un coche (sin ruedas) */
function collectCarData(): boolean {
    plate = document.querySelector("#plate") as HTMLInputElement;
    brand = document.querySelector("#brand") as HTMLInputElement;
    color = document.querySelector("#color") as HTMLInputElement;
    if(plate.value == '' || brand.value == ''){
        showMessage("Missing data!  Unable to create a car without a plate number and/or brand", "danger", 1500);
        return false;
    }
    createCar(plate.value, brand.value, color.value);
    return true;
}

/**itera sobre los inputs del formulario de las ruedas, los utiliza para crear ruedas y las va añadiendo al array del objeto<Car> */
function collectWheelsData(){ 
     wheel: Wheel; 
    for(var i = 1; i<5; i++){
        wSize = document.querySelector("#s"+ i) as HTMLInputElement;
        wBrand = document.querySelector("#b"+i) as HTMLInputElement;
        addWheel(parseFloat(wSize.value), wBrand.value);
    }
   // console.log(car);
   showMessage("Car created succesfully!", "success", 1500);
   showMessage(car.toString(), "dark", 20000);
}

/** Muestra alertas en la UI */
function showMessage(message: string, cssClass: string, timeOut: number) {
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass}`;
    div.appendChild(document.createTextNode(message));
    // showing in DOM
    const result = document.querySelector('.result');
    result?.appendChild(div);
    setTimeout(() => {
        document.querySelector('.alert')?.remove();
    }, timeOut);
}


