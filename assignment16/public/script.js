async function showCars(){
    let carsJson = await fetch('api/cars');
    let cars = await carsJson.json();
    let carsDiv = document.getElementById("cars");
    carsDiv.innerHTML = "";

    for(i in cars){
        carsDiv.append(getCarElem(cars[i]));
    }
}

async function showCar(){
    let id = document.getElementById("txt-car-id").value;
    let response = await fetch(`api/cars/${id}`);
    let car = await response.json();

    let carDiv = document.getElementById("car");
    carDiv.append(getCarElem(car));
}

function getCarElem(car){
    let carDiv = document.createElement("div");
    carDiv.classList.add("car");
    let carTitle = document.createElement("h3");
    carTitle.innerHTML = car.id + ": " + car.make;

    let carP = document.createElement("p");
    carP.innerHTML = `by ${car.model}, year ${car.year}`;

    //create edit and delete links
    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.setAttribute("data-id", car.id);
    editButton.onclick =showEditCar;
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("data-id", car.id);
    deleteButton.onclick = deleteCar;
    carP.append(editButton);
    carP.append(deleteButton);

    carDiv.append(carTitle);
    carDiv.append(carP);
    
    return carDiv;
}

async function showEditCar(){
    const id = this.getAttribute("data-id");
    document.getElementById("edit-car-id").innerHTML = id;

    let response = await fetch(`api/cars/${id}`);
    let car = await response.json();
    document.getElementById("txt-edit-car-make").value = car.make;
    document.getElementById("txt-edit-car-model").value = car.model;
    document.getElementById("txt-edit-car-year").value = car.year;

    return false;
}

async function deleteCar(){
    const id = this.getAttribute("data-id");
    
    let response = await fetch(`/api/cars/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        console.log("Error adding car");
        return;
    }

    showcars();
    return false;
}

async function addCar(){
    //get the car inforamtion
    const carMake = document.getElementById("txt-new-car-make").value;
    const carModel = document.getElementById("txt-new-car-model").value;
    const carYear = document.getElementById("txt-new-car-year").value;

    console.log(`you are adding ${carMake}, ${carModel}, ${carYear}`);

    let car = {"make": carMake, "model":carModel, "year":carYear};

    let response = await fetch('/api/cars/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(car),
    });

    if(response.status != 200){
        console.log("Error adding car");
        return;
    }

    let result = await response.json();
    showcars();
}

async function editCar(){
    let id = document.getElementById("edit-car-id").textContent;
    let make = document.getElementById("txt-edit-car-make").value;
    let model = document.getElementById("txt-edit-car-model").value;
    let year = document.getElementById("txt-edit-car-year").value;
    let car = {"make":make, "model": model, "year": year};

    let response = await fetch(`/api/cars/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(car),
    });

    if(response.status != 200){
        console.log("Error edditing car");
    }

    //update the car list
    showcars();
}

window.onload = function(){
    this.showCars();
    let showCarButton = document.getElementById("btn-show-car");
    showCarButton.onclick = showCar;

    let addCarButton = document.getElementById("btn-add-car");
    addCarButton.onclick = addCar;

    let editCarButton = document.getElementById("btn-edit-car");
    editCarButton.onclick = editCar;
}