async function showCars(){
    
    let response = await fetch(`api/cars/`);
    let cars = await response.json();
    let carsDiv = document.getElementById("cars");
    carsDiv.innerHTML = "";
    console.log(cars);
    for(i in cars){
        console.log(cars[i]);
        carsDiv.appendChild(getCarElem(cars[i]));
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
    carTitle.innerHTML = car.id + ": " + car.model;

    let carP = document.createElement("p");
    carP.innerHTML = `by ${car.make}, "Production Years: ${car.pYears}`;
    let carP = document.createElement("p");

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


async function addCar(){
    const make = document.getElementById("txt-add-car-make").value;
    const model = document.getElementById("txt-add-car-model").value;
    const color = document.getElementById("txt-add-car-color").value;
    const layoutText = document.getElementById("txt-add-car-layout").value;
    const pYearsText = document.getElementById("txt-add-car-years").value;
    const layout = layoutText.split("\n");
    const pYears = pYearsText.split("\n");
    const feedbackP = document.getElementById("feedback");
    feedbackP.classList.remove("error");
    feedbackP.classList.remove("success");
    feedbackP.classList.remove("hidden");

    let car = {"make": make, "model": model, "color": color, "layout": layout, "production years":pYears};
    console.log(car);

    let response = await fetch('/api/cars/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(car),
    });

    if(response.status != 200){
        feedbackP.innerHTML = "Error Adding Car";
        feedbackP.classList.add("error");
        return;
    }

    let result = await response.json();
    feedbackP.innerHTML = "Successfully Added Car";
    feedbackP.classList.add("success");
}

async function editCar(){
    let make = document.getElementById("txt-edit-car-make").value;
    let model = document.getElementById("txt-edit-car-model").value;
    let color = document.getElementById("edit-car-color").value;
    let layout = document.getElementById("edit-carlayout").value;
    let pYears = document.getElementById("txt-edit-car-years").value;
    let car = {"make": make, "model": model, "color": color, "layout": layout, "production years":pYears}
    
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
    showCars();
}

async function showEditCar(){
    const id = this.getAttribute("data-id");
    document.getElementById("edit-car-id").innerHTML = id;

    let response = await fetch(`api/cars/${id}`);
    let car = await response.json();
    document.getElementById("txt-edit-car-make").value = car.make;
    document.getElementById("txt-edit-car-model").value = car.model;
    document.getElementById("txt-edit-car-layout").value = car.layout;
    document.getElementById("txt-edit-car-color").value = car.color;
    document.getElementById("txt-edit-car-years").value = car.pYears;

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

    showCar();
    return false;
}

window.onload = function(){
    this.document.getElementById("btn-add-car").onclick = addCar;

}